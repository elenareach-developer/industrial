import React, { useEffect, useState } from 'react'
import { WheelProps } from '../config/projects'

/* demetinons dependency: size,    const centerX = 195
  const centerY = 195
   canvas.setAttribute('width', '400')
      canvas.setAttribute('height', '400')
          ctx.clearRect(0, 0, 400, 400)
             width='400'
        height='400'
  */
const WheelComponent = ({
  segments,
  segColors,
  winningSegment,
  onFinished,
  primaryColor = 'black',
  contrastColor = 'white',
  buttonText = 'Spin',
  isOnlyOnce = true,
  size,
  upDuration = 100,
  downDuration = 1000,
  fontFamily = 'proxima-nova'
}:WheelProps) => {
  let currentSegment = ''
  let isStarted = false
  const [isFinished, setFinished] = useState(false)
  
  let timerHandle = 0
  const timerDelay = segments.length
  let angleCurrent = 0
  let angleDelta = 0
  let canvasContext:any 
  let maxSpeed:number = Math.PI / +`${(segments?.length>0)?(segments?.length):1}`
  const upTime = segments.length * upDuration
  const downTime = segments.length * downDuration
  let spinStart = 0
  let frames = 0
  const centerX = size+5
  const centerY = size+5

  useEffect(() => {
    const segLen:number = segments.length;
    const colorLen:number = segColors.length
    let segColor:string[] = []
    if(segLen>colorLen){
      let rem = segLen%colorLen;
      let whole = (segLen-rem)/colorLen
      if(whole>0){
        for(let i=0; i<whole; i++){
          segColor = [...segColor, ...segColors]
        }
      }
      if(rem>0){
        segColor = [...segColor, ...segColors.slice(0,rem)]
      }

      if(segColor[0]== segColor[segColor.length-1]){
        segColor[segColor.length-1] = segColor[1]
      }
      segColors = segColor
    }
  },[segments])

  useEffect(() => {
    wheelInit()
    setTimeout(() => {
      window.scrollTo(0, 1)
    }, 0)
  }, [segments])
  const wheelInit = () => {
    initCanvas()
    wheelDraw()
  }

  const initCanvas = () => {
    let canvas = document.getElementById('canvas')
    console.log(navigator)
    if (navigator.userAgent.indexOf('MSIE') !== -1) {
      canvas = document.createElement('canvas')
      canvas.setAttribute('width', (size+10)*2+"")
      canvas.setAttribute('height', (size+10)*2+"")
      canvas.setAttribute('id', 'canvas')
      document?.getElementById('wheel')?.appendChild(canvas)
    }
    canvas?.addEventListener('click', spin, false)
    canvasContext = (canvas as HTMLCanvasElement).getContext('2d')
  }
  const spin = () => {
    isStarted = true
    if (timerHandle === 0) {
      spinStart = new Date().getTime()
      // maxSpeed = Math.PI / ((segments.length*2) + Math.random())
      maxSpeed = Math.PI / segments.length
      frames = 0
      timerHandle = setInterval(onTimerTick, timerDelay)
    }
  }
  const onTimerTick = () => {
    frames++
    draw()
    const duration = new Date().getTime() - spinStart
    let progress = 0
    let finished = false
    if (duration < upTime) {
      progress = duration / upTime
      angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2)
    } else {
      if (winningSegment) {
        if (currentSegment === winningSegment && frames > segments.length) {
          progress = duration / upTime
          angleDelta =
            maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2)
          progress = 1
        } else {
          progress = duration / downTime
          angleDelta =
            maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2)
        }
      } else {
        progress = duration / downTime
        angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2)
      }
      if (progress >= 1) finished = true
    }

    angleCurrent += angleDelta
    while (angleCurrent >= Math.PI * 2) angleCurrent -= Math.PI * 2
    if (finished) {
      setFinished(true)
      onFinished(currentSegment)
      clearInterval(timerHandle)
      timerHandle = 0
      angleDelta = 0
    }
  }

  const wheelDraw = () => {
    clear()
    drawWheel()
    drawNeedle()
  }

  const draw = () => {
    clear()
    drawWheel()
    drawNeedle()
  }

  const drawSegment = (key:any, lastAngle:any, angle:any) => {
    const ctx = canvasContext
    const value = segments[key]
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, size, lastAngle, angle, false)
    ctx.lineTo(centerX, centerY)
    ctx.closePath()
    ctx.fillStyle = segColors[key]
    ctx.fill()
    ctx.stroke()
    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.rotate((lastAngle + angle) / 2)
    ctx.fillStyle = contrastColor
    ctx.font = 'bold 1em ' + fontFamily
    ctx.fillText(value.substr(0, 21), size / 2 + 20, 0)
    ctx.restore()
  }

  const drawWheel = () => {
    const ctx = canvasContext
    let lastAngle = angleCurrent
    const len = segments.length
    const PI2 = Math.PI * 2
    ctx.lineWidth = 1
    ctx.strokeStyle = primaryColor
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    ctx.font = '1em ' + fontFamily
    for (let i = 1; i <= len; i++) {
      const angle = PI2 * (i / len) + angleCurrent
      drawSegment(i - 1, lastAngle, angle)
      lastAngle = angle
    }

    // Draw a center circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, 50, 0, PI2, false)
    ctx.closePath()
    ctx.fillStyle = primaryColor
    ctx.lineWidth = 10
    ctx.strokeStyle = contrastColor
    ctx.fill()
    ctx.font = 'bold 1em ' + fontFamily
    ctx.fillStyle = contrastColor
    ctx.textAlign = 'center'
    ctx.fillText(buttonText, centerX, centerY + 3)
    ctx.stroke()

    // Draw outer circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, size, 0, PI2, false)
    ctx.closePath()

    ctx.lineWidth = 10
    ctx.strokeStyle = primaryColor
    ctx.stroke()
  }

  const drawNeedle = () => {
    const ctx = canvasContext
    ctx.lineWidth = 1
    ctx.strokeStyle = contrastColor
    ctx.fileStyle = contrastColor
    ctx.beginPath()
    ctx.moveTo(centerX + 20, centerY - 50)
    ctx.lineTo(centerX - 20, centerY - 50)
    ctx.lineTo(centerX, centerY - 70)
    ctx.closePath()
    ctx.fill()
    const change = angleCurrent + Math.PI / 2
    let i =
      segments.length -
      Math.floor((change / (Math.PI * 2)) * segments.length) -
      1
    if (i < 0) i = i + segments.length
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = primaryColor
    ctx.font = 'bold 1.5em ' + fontFamily
    currentSegment = segments[i]
    isStarted && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50)
  }
  const clear = () => {
    const ctx = canvasContext
    ctx.clearRect(0, 0, (size+10)*2, (size+10)*2)
  }
  return (
    <div id='wheel'>
      <canvas
        id='canvas'
        width={(size+10)*2+""}
        height={(size+10)*2+""}
        style={{
          pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto'
        }}
      />
    </div>
  )
}
export default WheelComponent