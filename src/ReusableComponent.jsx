function ReusableComponent (){
    let myNumber = Math.random();
    return <p style={{'color':'red'}}>Random number:- {myNumber}</p>
}

export default ReusableComponent;