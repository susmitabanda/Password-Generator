import React, { useState } from 'react'
import './Generator.css';

const Generator = () => {

    const [uppercase, setUpeercase] = useState(false);
    const [lowercase, setLowercase] = useState(false);
    const [symbol, setSymbol] = useState(false);
    const [number, setNumber] = useState(false);
    const [length, setLength] = useState(10);
    const [password, setPassword] = useState('')



    const generatePassword = () => {
        let characters = '';
        if (uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
        if (number) characters += '0123456789';
        if (symbol) characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';

        if (characters.length === 0) {
            setPassword("Please select atleast one option");
            return;
        }
        let generated ='';
        for(let i =0 ;i<length ;i++){
            const randIndex = Math.floor(Math.random()* characters.length)
            generated += characters[randIndex];
        }
        setPassword(generated);
    };
    const handlecopy = ()=>{
        navigator.clipboard.writeText(password);
        alert("password copied to clipboard!")
    };
    const handledelete = () =>{
        setPassword('');
        setUpeercase(false)
        setLowercase(false);
        setNumber(false);
        setSymbol(false);
    }


    return (
        <>
            <div className='passwordBox'>
                <h1>Password Generator</h1>

                <div className='passwordBox-input'>
                    <input type='text' placeholder='Generate your password' value={password}/>
                    <button onClick={handlecopy}><img src="copy.png" alt="" /></button>
                </div>
                <div className="passlength">
                    <label>Password length</label>
                    <input type='number' value={length} onChange={(e)=>setLength(e.target.value)} min="5" max ="10"></input>
                </div>

                <div className="passcheckbox">
                    <label>Include Uppercase</label>
                    <input type='checkbox' checked={uppercase} onChange={(e)=>setUpeercase(!uppercase)}></input>
                </div>

                <div className="passcheckbox">
                    <label>Include Lowercase</label>
                    <input type='checkbox' checked={lowercase} onChange={(e)=>setLowercase(!lowercase)}></input>
                </div>
                <div className="passcheckbox">
                    <label>Include number</label>
                    <input type='checkbox' checked={number} onChange={(e)=>setNumber(!number)}></input>
                </div>
                <div className="passcheckbox">
                    <label>Include symbols</label>
                    <input type='checkbox' checked={symbol} onChange={(e)=>setSymbol(!symbol)}></input>
                </div>
                <button className='generate' onClick={generatePassword}>
                    <h3>Generate</h3>
                </button>
                <button className='delete' onClick={handledelete}>
                    <h3>Delete</h3>
                </button>

            </div>


        </>
    )
}

export default Generator