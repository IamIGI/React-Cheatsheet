import React from 'react';
import { useState } from 'react';

export const Content = () => {
    const [name, setName] = useState('Igor');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Igor', 'Bartek'];
        const int = Math.floor(Math.random() * 2);
        setName(names[int]);
    };

    const handleClick2 = () => {
        setCount(count + 1);
        console.log(count); //value of count was initially brought to the function, so it won't change,
        //until react page reload again
    };

    const handleClick3 = (e) => {
        console.log(count);
    };

    return (
        <main>
            <p> Hello {name}</p>
            <button onClick={handleNameChange}>Change name</button>
            <button onClick={handleClick2}>Click it 2</button>
            <button onClick={handleClick3}>Click it 3</button>
        </main>
    );
};

export default Content;
