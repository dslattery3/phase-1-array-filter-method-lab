// Code your solution here
function findMatching(array, str){
    let newArray = []
    newArray = array.filter(name => name.toLowerCase() === str.toLowerCase())
    return newArray
}
function fuzzyMatch(array, str){
    let newArray = []
    newArray = array.filter(name => name[0] === str[0])
    return newArray
}

function matchName(obj, str){
    //each obj has name and hometown
    let newObj = {}
    newObj = obj.filter(person => person.name === str)
    return newObj
}