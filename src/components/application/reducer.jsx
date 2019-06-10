const init = {count:0};
function reducer(state,action){
    switch(action.type){
        case 'UPDATE:COUNT':
            return {...state,...action.payload};
        default:
            return {...state};
    }
}

export {init,reducer};