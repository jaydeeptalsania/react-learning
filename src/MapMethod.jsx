function MapMethod(){    // instead of 'for loop' use 'map method' to iterate elements
 let myItems = ['mouse','keyboard','printer','charger'];
  return(
    <>
     {myItems.map((item) => <p>{item}</p>)}
    </>
  )
}

export default MapMethod;