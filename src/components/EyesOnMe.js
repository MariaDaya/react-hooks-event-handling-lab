// Code EyesOnMe Component Here
function EyesOnMe (){
    <button onFocus={event => console.log("Good!")} onBlur={event => console.log("Hey! Eyes on me!")}>
        Eyes on me</button>
}