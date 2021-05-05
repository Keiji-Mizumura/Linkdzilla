function SampleComponent(props){
    return (
        <div>
            <h1>A BUTTON</h1>
            <button onClick={props.alert}>CLICK ME!</button>
        </div>
    )
}

export default SampleComponent;