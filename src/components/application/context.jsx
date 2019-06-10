import {createContext} from 'react';

const context = createContext();

const Provider = context.Provider;
const Consumer = context.Provider;

export {
    context,
    Provider,
    Consumer
};