export function HeaderBar(props) {
    console.log('props in header', props)

    const myName = props.myName ?  props.myName : "YOUR NAME HERE"

    if (myName.length > 0) {
        return (
            <h1 className="bg-primary text-light px-1">Hello App (from {myName})</h1>
        )
    } else {
        return (
            <h1 className="bg-primary text-light px-1">Hello App!</h1>
        )
    }

    
}