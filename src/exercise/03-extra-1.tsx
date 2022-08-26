// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

type DisplayProps = {
  name?: string
  animal?: string
}
type FavoriteAnimalProps = {
  animal?: string
  onAnimalChange: React.ChangeEventHandler<HTMLInputElement>
}

function Name() {
  const [name, setName] = React.useState('')

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </div>
  )
}

function FavoriteAnimal(props: FavoriteAnimalProps) {
  const {animal, onAnimalChange} = props
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal} onChange={onAnimalChange} />
    </div>
  )
}

function Display(props: DisplayProps) {
  const {animal} = props
  return <div>{`Your favorite animal is: ${animal}!`}</div>
}

function App() {
  const [animal, setAnimal] = React.useState('')

  return (
    <form>
      <Name />
      <FavoriteAnimal
        animal={animal}
        onAnimalChange={event => setAnimal(event.target.value)}
      />
      <Display animal={animal} />
    </form>
  )
}

export default App
