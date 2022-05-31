// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

type NameProps = {
  name?: string
  onNameChange: React.ChangeEventHandler<HTMLInputElement>
}
type DisplayProps = {
  name?: string
  animal?: string
}
type FavoriteAnimalProps = {
  animal?: string
  onAnimalChange: React.ChangeEventHandler<HTMLInputElement>
}

function Name(props: NameProps) {
  const {name = '', onNameChange = () => {}} = props
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
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
  const {name, animal} = props
  return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}

function App() {
  const [name, setName] = React.useState('')
  const [animal, setAnimal] = React.useState('')

  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      <FavoriteAnimal
        animal={animal}
        onAnimalChange={event => setAnimal(event.target.value)}
      />
      <Display name={name} animal={animal} />
    </form>
  )
}

export default App
