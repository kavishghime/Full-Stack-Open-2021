import React from 'react'

const Hello = ({ name, age }) => {

  //destructuring
  // const name = props.name
  // const age = props.age
  //const { name, age } = props
  // or {name,age} as arguments to Hello, as shown above

  //helper function
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App