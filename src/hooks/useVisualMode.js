import { useState } from "react"

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial)
  const [history, setHistory] = useState([initial])

  function transition(mode, replace = false) {

    if (replace === true) {
      back()
      setMode(mode)
    }

    // history.push(mode)
    setHistory(prev => ([...prev, mode]))
    setMode(mode)

  }

  function back() {
    //Back should not trigger if there is only one item in history
    // i.e 'initial mode'
    if (history.length > 1) {
      history.pop()
      const mode = history[history.length - 1]
      setMode(mode)
    }
  }

  return { mode, transition, back }
}