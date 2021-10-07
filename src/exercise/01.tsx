// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

type GreetingProps = {
  initialName?: string
}

function Greeting(props: GreetingProps) {
  const {initialName = ''} = props
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, setName] = React.useState(initialName);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // 🐨 update the name here based on event.target.value
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
