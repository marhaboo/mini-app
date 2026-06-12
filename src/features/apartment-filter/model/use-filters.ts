
"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

export const useFilters = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const setParam = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.replace(`/?${params.toString()}`, {scroll: false})
  }, [searchParams, router])

  return {
    search: searchParams.get("search") ?? "",
    rooms: searchParams.get("rooms") ?? "",
    minPrice: searchParams.get("minPrice") ?? "",
    maxPrice: searchParams.get("maxPrice") ?? "",
    setParam,
  }
}