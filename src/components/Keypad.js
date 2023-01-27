// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <input onChange={event => console.log("Entering password...")}/>
        </div>
    )
}

export default Keypad;