// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)
  const [name, setName] = useLocalStorageState('name', initialName)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function useLocalStorageState(key: string, initialValue: any): [any, React.Dispatch<React.SetStateAction<any>>] {
  const [value, setValue] = React.useState(initializeState)

  function initializeState(): string {
    return getLocalValue('name') || initialValue
  }

  React.useEffect(() => {
    setLocalValue(key, value)
  }, [key, value])

  return [value, setValue]
}

function getLocalValue(key: string) {
  const json = window.localStorage.getItem(key)

  return json ? JSON.parse(json) : null
}

function setLocalValue(key: string, value: any) {
  const json = JSON.stringify(value)

  window.localStorage.setItem(key, json)
}

function App() {
  return <Greeting />
}

export default App
