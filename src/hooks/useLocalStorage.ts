import { useCallback, useEffect, useState } from "react"

export function useLocalStorage<T>(key: string): [T[], (newState: T[]) => void] {
  const [savedData, setSavedData] = useState<T[]>([])

  function saveState(newState: T[]) {
    localStorage.setItem(key, JSON.stringify(newState))
    setSavedData(newState)
  }

  const loadState = useCallback(() => {
    const savedJSON = localStorage.getItem(key)

    if (savedJSON) {
      const saved = JSON.parse(savedJSON) as T[]
  
      setSavedData(saved)
    }
  }, [key])

  useEffect(() => {
    loadState()
  }, [loadState])

  return [savedData, saveState]
}
