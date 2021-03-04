import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(){
    const [number, setNumber] = useState(1);
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch()
    return(
        <div>
            <h2>Number of cakes: {numOfCakes}</h2>
            <input type="text" value={number} onChange={ event => setNumber(event.target.value)} />
            <button onClick={() => dispatch(buyCake(number))}>Buy {number} Cakes</button>
        </div>
    )
}

export default CakeContainer;