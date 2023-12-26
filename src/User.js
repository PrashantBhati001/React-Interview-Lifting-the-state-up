/*

function User(prop)
{

     return (
        <>
        <h1>Child</h1>
        <div>{prop.data}</div>
        </>
        
     )    
}

export default User;

*/


function User(prop)
{
   let name="sakshi"
     return (
        <>
        <h1>Child</h1>
        <div>{prop.data(name)}</div>
        </>
        
     )    
}

export default User;