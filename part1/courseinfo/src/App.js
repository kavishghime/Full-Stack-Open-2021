import React from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <h1>
      {props.course}
    </h1>
  )
}

//component which will show how it should look on the html page
const Part = (props) => {
  console.log(props)
  return (
    // <div>
    //   <p>
    //     {props.name} {props.exercise}
    //   </p>
    // </div>
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    // <div>
    //   <Part name={props.parts[0].name} exercise={props.parts[0].exercises} />
    //   <Part name={props.parts[1].name} exercise={props.parts[1].exercises} />
    //   <Part name={props.parts[2].name} exercise={props.parts[2].exercises} />
    // </div>

    <div>
      <Part part={props.part1} exercise={props.exercise1} />
      <Part part={props.part2} exercise={props.exercise2} />
      <Part part={props.part3} exercise={props.exercise3} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    // <div>
    //   <p>
    //     Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    //   </p>
    // </div>

    <div>
      <p>
        Number of exercises {props.exercise}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of component',
  //     exercises: 14
  //   }
  // ]

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />

      {/* 
      exercise 1.2 says:
      Refactor the Content component so that 
      it does not render any names of parts or their number of exercises by itself.
      Instead it only renders three Part components 
      of which each renders the name and number of exercises of one part.
      */}

      <Content />

      <Total exercise={exercises1 + exercises2 + exercises3} />

      {/* <Content parts={parts} /> */}
      {/* <Total parts={parts} /> */}


    </div>
  )
}

export default App