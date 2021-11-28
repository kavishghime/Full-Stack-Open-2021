import React from 'react'

//'Header' component
const Header = (props) => {
  console.log(props)
  return (
    <h1>
      {props.course}
    </h1>
  )
}

//'Part' component, which will be used in "Content' component
const Part = (props) => {
  console.log(props)
  return (
    // exercise 1.2
    // <div>
    //   <p>
    //     {props.part} {props.exercise}
    //   </p>
    // </div>

    //exercise 1.3
    < div >
      <p>
        {props.name} {props.exercise}
      </p>
    </div >
  )
}

//'Content' component referencing 'Part' component
const Content = (props) => {
  console.log(props)
  return (
    //exercise 1.2
    // <div>
    //   <Part part={props.part1} exercise={props.exercise1} />
    //   <Part part={props.part2} exercise={props.exercise2} />
    //   <Part part={props.part3} exercise={props.exercise3} />
    // </div>

    //exercise 1.3
    //When the values are coming from objects, props will focus only on objects
    <div>
      <Part name={props.part1} exercise={props.part1} />
      <Part name={props.part2} exercise={props.part2} />
      <Part name={props.part3} exercise={props.part3} />
    </div>

    // <div>
    //   <Part name={props.parts[0].name} exercise={props.parts[0].exercises} />
    //   <Part name={props.parts[1].name} exercise={props.parts[1].exercises} />
    //   <Part name={props.parts[2].name} exercise={props.parts[2].exercises} />
    // </div>


  )
}

//'Total' component
const Total = (props) => {
  console.log(props)
  return (
    //exercise 1.2
    // <div>
    //   <p>
    //     Number of exercises {props.exercise}
    //   </p>
    // </div>

    //exercise 1.3
    <div>
      <p>
        Number of exercises {props.part}
      </p>
    </div>

    // <div>
    //   <p>
    //     Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    //   </p>
    // </div>


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

  //exercise 1.2
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of component'
  // const exercises3 = 14

  //exercise 1.3
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />

      {/* exercise 1.2 */}
      {/* <Content /> */}

      {/* exercise 1.3 */}
      <Content />

      {/* exercise 1.2 */}
      {/* <Total exercise={exercises1 + exercises2 + exercises3} /> */}

      {/* exercise 1.3 */}
      <Total part={part1.exercises + part2.exercises + part3.exercises} />

      {/* <Content parts={parts} /> */}
      {/* <Total parts={parts} /> */}

    </div>
  )
}

export default App