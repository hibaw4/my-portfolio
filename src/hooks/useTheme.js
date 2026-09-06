import { useState, useEffect } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Initialize theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme')
    const initialTheme = savedTheme || 'dark'
    
    const root = document.documentElement
    root.classList.remove('dark')
    
    if (initialTheme === 'dark') {
      root.classList.add('dark')
    }
    
    setTheme(initialTheme)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light'
    })
  }

  return [theme, toggleTheme]
}

export default useTheme

