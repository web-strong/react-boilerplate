import React from 'react';
import {context as Context} from './components/application/context';
import {useContext} from 'react';
import {updateCount} from './components/application/actions';

function Button(props){

    const context = useContext(Context);
    let {store,dispatch} = context;
    let {count} = store;
    const onClick = ()=>updateCount(count).then((result)=>{ dispatch(result); })

    return (
        <button onClick={onClick}>button {count}</button>
    );

}

export default Button;