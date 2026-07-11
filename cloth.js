/* Woolwork site: the one Tier 3 hero simulation the kit allows per page.
   A line of felt pennants strung across the hero on a length of yarn, swaying
   in a slow draft. Canvas 2D, decoration only: pointer-events none, hidden
   from assistive tech, feature-detected, paused off-screen and on hidden
   tabs, and a single settled frame under prefers-reduced-motion. */
(function(){
  'use strict';
  var canvas = document.getElementById('bunting');
  if(!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  if(!ctx) return;

  var rmq = matchMedia('(prefers-reduced-motion: reduce)');
  var reduced = rmq.matches;
  var W = 0, H = 0;

  /* Dyes come from the kit tokens so the night flip re-dyes the pennants. */
  var felts = [], thread = '#bfa886';
  function dye(){
    var cs = getComputedStyle(document.documentElement);
    var read = function(name, fallback){
      var v = cs.getPropertyValue(name).trim();
      return v || fallback;
    };
    felts = [
      read('--rose', '#e2707e'), read('--butter', '#f0c05a'),
      read('--leaf', '#7fae6a'), read('--sky', '#6fa8c9'),
      read('--plum', '#9a7bb0')
    ];
    thread = read('--thread-cream', '#bfa886');
    /* When the loop is not repainting (reduced motion, paused, hidden),
       repaint once so a theme flip re-dyes immediately. */
    if(pts.length && !raf) draw();
  }

  /* Verlet rope pinned at both ends and the middle: bunting hangs in two
     swags, which keeps the sag shallow enough that no pennant leaves the
     canvas. Stirred by a slow sinusoidal draft. */
  var N = 42, pts = [], rest = 0;
  function build(){
    /* Render at least twice the CSS resolution so the small diagonal pennant
       edges and stitches stay crisp on ordinary displays and browser zoom.
       Four is a safe ceiling for the hero's shallow canvas. */
    var dpr = Math.min(4, Math.max(2, window.devicePixelRatio || 1));
    var rect = canvas.getBoundingClientRect();
    W = Math.max(1, rect.width); H = Math.max(1, rect.height);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    pts = [];
    var x0 = W * 0.03, x1 = W * 0.97, y = H * 0.18;
    var mid = Math.floor(N / 2);
    rest = ((x1 - x0) / (N - 1)) * 1.012;
    for(var i = 0; i < N; i++){
      var x = x0 + (x1 - x0) * i / (N - 1);
      pts.push({x:x, y:y, px:x, py:y, pin:(i === 0 || i === mid || i === N - 1)});
    }
  }

  var t = 0;
  function step(){
    t += 1/60;
    var i, p;
    for(i = 0; i < N; i++){
      p = pts[i];
      if(p.pin) continue;
      var vx = (p.x - p.px) * 0.985;
      var vy = (p.y - p.py) * 0.985;
      p.px = p.x; p.py = p.y;
      p.x += vx + Math.sin(t * 0.9 + p.x * 0.013) * 0.016;
      p.y += vy + 0.12;
    }
    for(var k = 0; k < 3; k++){
      for(i = 0; i < N - 1; i++){
        var a = pts[i], b = pts[i + 1];
        var dx = b.x - a.x, dy = b.y - a.y;
        var d = Math.sqrt(dx * dx + dy * dy) || 1;
        var diff = (d - rest) / d * 0.5;
        if(!a.pin){ a.x += dx * diff; a.y += dy * diff; }
        if(!b.pin){ b.x -= dx * diff; b.y -= dy * diff; }
      }
    }
  }

  function draw(){
    ctx.clearRect(0, 0, W, H);
    var i;
    /* Pennants: one per pair of rope segments, hung between segment ends. */
    var flagLen = Math.min(46, H * 0.44);
    for(i = 1; i < N - 2; i += 2){
      var a = pts[i], b = pts[i + 1];
      var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      var dx = b.x - a.x, dy = b.y - a.y;
      var d = Math.sqrt(dx * dx + dy * dy) || 1;
      /* Apex hangs along the segment normal on the gravity side
         (canvas y grows downward). */
      var ax = mx - (dy / d) * flagLen, ay = my + (dx / d) * flagLen;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.lineTo(ax, ay);
      ctx.closePath();
      ctx.fillStyle = felts[((i - 1) / 2) % felts.length];
      ctx.fill();
      /* Felt reads through light, not flatness: clip to the pennant and lay a
         gradient so light gathers along the top band and shadow pools at the
         hanging tip, giving each flag real thickness. */
      ctx.clip();
      var shade = ctx.createLinearGradient(mx, my, ax, ay);
      shade.addColorStop(0, 'rgba(255,252,242,0.34)');
      shade.addColorStop(0.32, 'rgba(255,252,242,0)');
      shade.addColorStop(1, 'rgba(30,18,10,0.28)');
      ctx.fillStyle = shade;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();
      /* Occluded outline, lit top hem, and a stitched hem just below it. */
      ctx.beginPath();
      ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.lineTo(ax, ay); ctx.closePath();
      ctx.lineJoin = 'round';
      ctx.strokeStyle = 'rgba(30,20,12,.24)'; ctx.lineWidth = 1.3; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'rgba(255,252,242,.5)'; ctx.lineWidth = 2; ctx.stroke();
      ctx.save();
      ctx.setLineDash([4, 3.5]);
      ctx.beginPath();
      ctx.moveTo(a.x * .82 + ax * .18, a.y * .82 + ay * .18);
      ctx.lineTo(b.x * .82 + ax * .18, b.y * .82 + ay * .18);
      ctx.strokeStyle = 'rgba(255,252,242,.55)'; ctx.lineWidth = 1.6; ctx.stroke();
      ctx.restore();
    }
    /* The yarn line itself, over the pennant tops. */
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for(i = 1; i < N; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.strokeStyle = thread; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y - 1);
    for(i = 1; i < N; i++) ctx.lineTo(pts[i].x, pts[i].y - 1);
    ctx.strokeStyle = 'rgba(255,252,242,.35)'; ctx.lineWidth = 1; ctx.stroke();
  }

  /* Fixed-timestep loop: the sway speed is the same at 30, 60, or 144Hz. */
  var running = false, visible = true, raf = 0, last = 0, acc = 0;
  var STEP = 1000 / 60;
  function loop(ts){
    raf = 0;
    if(!running || !visible || document.hidden) return;
    if(!last) last = ts;
    acc += Math.min(100, ts - last);
    last = ts;
    while(acc >= STEP){ step(); acc -= STEP; }
    draw();
    raf = requestAnimationFrame(loop);
  }
  function start(){
    if(reduced || raf || !running || !visible || document.hidden) return;
    last = 0;
    raf = requestAnimationFrame(loop);
  }
  function stop(){
    if(raf){ cancelAnimationFrame(raf); raf = 0; }
  }

  function settleAndDrawOnce(){
    for(var s = 0; s < 240; s++) step();
    draw();
  }

  build();
  dye();
  if(reduced){
    running = false;
    settleAndDrawOnce();
  }else{
    running = true;
    /* Pre-settle so the line does not visibly fall into place on load. */
    for(var s = 0; s < 120; s++) step();
    start();
  }

  new MutationObserver(dye).observe(document.documentElement,
    {attributes:true, attributeFilter:['data-theme']});

  new IntersectionObserver(function(entries){
    visible = entries[entries.length - 1].isIntersecting;
    if(visible) start();
  }).observe(canvas);
  document.addEventListener('visibilitychange', start);

  if(rmq.addEventListener){
    rmq.addEventListener('change', function(e){
      reduced = e.matches;
      if(reduced){ running = false; stop(); settleAndDrawOnce(); }
      else { running = true; start(); }
    });
  }

  var resizeTimer = 0;
  window.addEventListener('resize', function(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function(){
      build();
      if(reduced){ settleAndDrawOnce(); }
      else { for(var s = 0; s < 120; s++) step(); if(!raf) draw(); start(); }
    }, 120);
  });
})();
