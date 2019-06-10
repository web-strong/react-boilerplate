async function updateCount (payload){
    let type = `UPDATE:COUNT`;
    return {type,payload};
}

export default {
    updateCount
}