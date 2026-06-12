"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

const ProgressBar = () => {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    timerRef.current = setTimeout(() => setLoading(true), 0)
    const hide = setTimeout(() => setLoading(false), 500)

    return () => {
      clearTimeout(timerRef.current!)
      clearTimeout(hide)
    }
  }, [pathname])

  if (!loading) return null

  return (
    <div className="fixed top-0 left-0 z-50 h-0.5 w-full">
      <div className="h-full bg-zinc-900 dark:bg-zinc-50 animate-[progress_0.5s_ease-in-out]" />
    </div>
  )
}

export default ProgressBar