let C = {}
C.getOffset = function (ele) {
  let mouse = { x: 0, y: 0 }
  ele.addEventListener('mousemove', function (e) {
    let { x, y } = C.eventWrapper(e)
    mouse.x = x
    mouse.y = y
  })
  return mouse
}

C.eventWrapper = function (ev) {
  let { pageX, pageY, target } = ev
  let { left, top } = target.getBoundingClientRect()
  return { x: pageX - left, y: pageY - top }
}

// 角度转弧度
C.toRad = function (angle) {
  return angle * Math.PI / 180
}

// 弧度转角度
C.toAngle = function (rad) {
  return rad * 180 / Math.PI
}

// 随机数
C.rp = function (arr, int) {
  let max = Math.max(...arr)
  let min = Math.min(...arr)

  let n = Math.random() * (max - min) + min
  return int ? Math.round(n) : n
}
// 随机颜色
C.rColor = function () {
  return `rgb(${C.rp([50, 255], true)}, ${C.rp([50, 255], true)}, ${C.rp([50, 255], true)})`
}

// 矩形碰撞检测
C.rectBump = function (r1, r2) {
  return r1.x + r1.w >= r2.x && r1.y + r1.h >= r2.y && r1.x <= r2.x + r2.w && r1.y <= r2.y + r2.h
}

// 求两点间距离
C.getDist = function (x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}

// 小球边界反弹处理
C.checkBallBounce = function (ball, W, H, bounce) {
  if (ball.x - ball.r <= 0) {
    ball.x = ball.r
    ball.vx *= bounce
  } else if (ball.x + ball.r >= W) {
    ball.x = W - ball.r
    ball.vx *= bounce
  }
  if (ball.y - ball.r <= 0) {
    ball.y = ball.r
    ball.vy *= bounce
  } else if (ball.y + ball.r >= H) {
    ball.y = H - ball.r
    ball.vy *= bounce
  }
}
