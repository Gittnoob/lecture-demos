const myName = "Thomas";
const myImg = "/img/puppy.jpg"

function NumberList(props){
    const numComponents = props.numbers.map((num)=>{
        const elm = <div>My number is {num} </div>
        return elm;
    })
    return numComponents
}

export function HeaderElement(props) {
    console.log("props",props);
    return (
        <header>
            {/* Within App.jsx, we passed in the myNumArray into the header declaration, 
            which then gets taken in by the NumberList function and processed into a list */}
            <NumberList numbers={props.myNumArray} />
            <h1 id="hello" className="myClass">Hello World from {myName}!</h1>
            <p>A leap year has {(365+1)*24*60} minutes</p>
            <img src={myImg} alt = "a puppy"></img>
        </header>
    )
}