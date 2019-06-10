import mutations from './mutations';

async function updateCount (count){
    let payload = {count:count+1};
    return mutations.updateCount(payload);
}

export {
    updateCount
}