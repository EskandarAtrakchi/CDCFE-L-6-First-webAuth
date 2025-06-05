"use client"

import { useEffect, useRef } from "react"

export function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src =
      "https://cdn.vox-cdn.com/thumbor/MF3OGE87i3w84zd8uixF8XA6_bc=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/18365342/dnb_land_ocean_ice.2012.3600x1800.0.jpg"

    const CanvasXSize = canvas.width
    const CanvasYSize = canvas.height
    const speed = 15
    const scale = 1.05
    const y = -4.5

    const dx = 0.75
    let imgW: number
    let imgH: number
    let x = 0
    let clearX: number
    let clearY: number

    img.onload = () => {
      imgW = img.width * scale
      imgH = img.height * scale

      if (imgW > CanvasXSize) {
        x = CanvasXSize - imgW
      }

      if (imgW > CanvasXSize) {
        clearX = imgW
      } else {
        clearX = CanvasXSize
      }

      if (imgH > CanvasYSize) {
        clearY = imgH
      } else {
        clearY = CanvasYSize
      }

      // Start animation
      return setInterval(draw, speed)
    }

    function draw() {
      ctx.clearRect(0, 0, clearX, clearY)

      if (imgW <= CanvasXSize) {
        if (x > CanvasXSize) {
          x = 0
        }

        if (x > CanvasXSize - imgW) {
          ctx.drawImage(img, x - CanvasXSize + 1, y, imgW, imgH)
        }
      } else {
        if (x > CanvasXSize) {
          x = CanvasXSize - imgW
        }

        if (x > CanvasXSize - imgW) {
          ctx.drawImage(img, x - imgW + 1, y, imgW, imgH)
        }
      }

      ctx.drawImage(img, x, y, imgW, imgH)
      x += dx
    }

    // Cleanup
    return () => {
      // Any cleanup if needed
    }
  }, [])

  return <canvas ref={canvasRef} width={600} height={250} className="w-full h-64 rounded-lg bg-black/10"></canvas>
}
