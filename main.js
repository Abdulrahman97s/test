let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newMap = mix.map(function(ele, index, array){
    return typeof ele === "number"
}, 10)

console.log(newMap)