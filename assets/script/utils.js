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

C.rColor = function () {
  return `rgb(${C.rp([100, 255], true)}, ${C.rp([100, 255], true)}, ${C.rp([100, 255], true)})`
}