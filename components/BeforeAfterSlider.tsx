"use client"

import { useRef, useState } from "react"
import Image from "next/image"

type Props = {
  beforeSrc: string
  afterSrc: string
  alt?: string
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt = "Before and After",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sliderPos, setSliderPos] = useState(50)

  const updateSlider = (clientX: number) => {
    const bounds = containerRef.current?.getBoundingClientRect()
    if (!bounds) return
    const percentage = ((clientX - bounds.left) / bounds.width) * 100
    setSliderPos(Math.max(0, Math.min(100, percentage)))
  }

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if ("touches" in e) {
      updateSlider(e.touches[0].clientX)
    } else {
      updateSlider(e.clientX)
    }
  }
  return (
    <div
      ref={containerRef}
      className="
        relative
        w-full
        h-full
        min-h-[300px]
        overflow-hidden
        rounded-2xl
        select-none
        touch-none
        mx-auto
        bg-gray-100
      "
      onMouseDown={handleDrag}
      onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
      onTouchMove={handleDrag}
      role="img"
      aria-label={alt}
    >
      {/* After image full background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterSrc}
          alt={`${alt} after`}
          fill
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Before image clipped on top */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="relative w-full h-full">
          <Image
            src={beforeSrc}
            alt={`${alt} before`}
            fill
            className="object-cover"
            draggable={false}
          />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-2 left-4 text-sm font-medium text-white bg-black/60 px-2 py-0.5 rounded">
        Before
      </div>
      <div className="absolute top-2 right-4 text-sm font-medium text-white bg-black/60 px-2 py-0.5 rounded">
        After
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 left-0 w-[2px] h-full bg-white z-10"
        style={{ left: `${sliderPos}%`, transform: "translateX(-1px)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2
                     rounded-full bg-white border border-gray-300 shadow-lg
                     hover:scale-110 transition-transform duration-200"
        />
      </div>

      {/* Accessibility input (invisible) */}
      <input
        type="range"
        min={0}
        max={100}
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        aria-label="Before and after slider"
        className="sr-only"
      />
    </div>
  )
}
