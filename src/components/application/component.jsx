import React from 'react';
import {useReducer} from 'react';
import {Provider} from './context';
import {reducer,init} from './reducer';

function Application(props){

    const [store,dispatch] = useReducer(reducer,init);

    return (
        <Provider value={{store,dispatch}}>
            {props.children}
        </Provider>
    );
}

export default Application;