import React, { useRef } from 'react';

const Child = ({name, send, update}) => {
    const inputRef = useRef();
    const nameRef = useRef();
    const pressButton=()=>{

        alert("Default Text: " + inputRef.current.value);
    }
    const pressButtonParams=(text)=>{
        alert(`Text: ${text}`);
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        update(nameRef.current.value);
    }


    return (
        <div style={{background:'cyan',padding:'10px'}}>
            <p onMouseOver={()=>{console.log("Mouse Over")}}>Hello, {name}</p>
            <button onClick={()=>{
                console.log("Pressed Button 1");
            }}>Boton 1</button>
            <button onClick={pressButton}>Boton 2</button>
            <button onClick={()=>{pressButtonParams("Text")}} text='Text'>Boton 3</button>
            <input placeholder='Insert message to the parent element' 
                onFocus={()=>{console.log("Input Focused")}} 
                onChange={(e)=>{console.log("Input Changed: "+e.target.value)}}
                onCopy={()=>{console.log("Input coppied")}}
                ref={inputRef}
            />
            <button onClick={()=>{send(inputRef.current.value)}}>Send Message</button>
            <div style={{marginTop:'20px'}}>
                <form onSubmit={formSubmit}>
                    <input placeholder='New Name' ref={nameRef}/>
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
