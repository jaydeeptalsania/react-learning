export default function DynamicComponent (){
   let firstName = 'Jaydeep';

   let fullName = () =>{
     return 'Jaydeep Talsania'
   }

    return <h3>
        First name :- {firstName}
        Full name :- {fullName()}
    </h3>
}