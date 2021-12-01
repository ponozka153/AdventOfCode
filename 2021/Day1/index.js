//https://adventofcode.com/2021/day/1/input - browser console

//First one
var main = document.querySelector("body > pre").innerText.split("\n")
var answer = 0
var numBefore = 0
main.forEach(curNum =>{
if(curNum != ""){
if(numBefore < curNum){
    numBefore = curNum
    answer++
} else {
    numBefore = curNum
}
}
})

console.log(answer)

//Second one
var main = document.querySelector("body > pre").innerText.split("\n")
var array = []
var numbers = []
var i = 0

main.forEach(() =>{
if(main[0+i] != undefined&&main[1+i] != undefined&&main[2+i] != undefined&&Number(main[0+i]) != 0&&Number(main[1+i]) != 0&&Number(main[2+i]) != 0){
var sum = Number(main[0+i]) + Number(main[1+i]) + Number(main[2+i])
array.push(sum)
}
i++
})

var answer = 0
var numBefore = 0
array.forEach(curNum =>{
if(numBefore < curNum){
    numBefore = curNum
    answer++
} else {
    numBefore = curNum
}
})

console.log(answer - 1) //I don't know why I had to do that minus 1 thing xd