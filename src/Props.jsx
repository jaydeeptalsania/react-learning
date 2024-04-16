const Props = (props) => {
    const {mySurname} = props; 
  return(
    <>
      <h1>My name is:-{props.myName}</h1>
      <h3>My surname is :- {mySurname}</h3>
    </>
  )
}

export default Props;