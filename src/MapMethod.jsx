function MapMethod(){    // instead of 'for loop' use 'map method' to iterate elements
 let myItems = ['mouse','keyboard','printer','charger'];
  return(
    <>
     {myItems.length === 0 ? <h3>The list is empty</h3>:null}
     {myItems.map((item ,index) => <p key={index}>{item}</p>)}
    </>
  )
}

export default MapMethod;