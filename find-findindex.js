function findUserByUsername(arr, username){
    return arr.find(function(val){
        return val.username === username;
    })
}

function removeUser(arr, username){
    let Index = arr.findIndex(function(val){
        return val.username === username;
    })
    if(Index === -1){
        return;
    }
    return arr.splice(Index, 1)[0];
}