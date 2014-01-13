  var methods = { m: moveTo
                , z: closePath
                , l: lineTo

                , h: horizontalLine
                , v: verticalLine
                , c: curveTo
                , s: shortCurveTo
                , q: quadraticBezier
                , t: smoothQuadraticBezier
                , a: elipticalArc
                }

function horizontalLine() {}
function verticalLine() {}
function curveTo() {}
function shortCurveTo() {}
function quadraticBezier() {}
function smoothQuadraticBezier () {}
function elipticalArc(){}

function kludge(coords) {
  var s = []
  twoEach(coords, function (a, b) { s.push(+ a, + b) })
  return s
}

function parse (str) {
  var buffer = []

  str.match(/[a-z][^a-z]*/ig).forEach(function (segment, i, match) {
    var instruction = methods[segment[0].toLowerCase()]
      , coords = segment.slice(1).trim().split(/,| /g)

    ;[].push.apply(buffer, kludge(coords))
    // if (! instruction) return
    // //if (instruction.name == 'closePath' && match[i+1]) return instruction.call(buffer, match[i+1])

    // if ('function' == typeof instruction)
    //   coords.length == 1 ? instruction.call(buffer) : twoEach(coords, instruction, buffer)
    // else
    //   console.error(instruction + ' ' + segment[0] + ' is not yet implemented')
  })

  return buffer
}

window.pse = parse

var pos = [0, 0]
function moveTo(x, y) {
  pos = [x, y]
}

var subpathStart
function closePath(next) {
  subpathStart = pos
  lineTo.apply(this, /m/i.test(next) ? next.slice(1).trim().split(/,| /g) : this.coords[0])
}

function lineTo(x, y) {
  this.push(pos[0], pos[1], y, 0)
  pos = [x,y]
}
