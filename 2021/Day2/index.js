//https://adventofcode.com/2021/day/2/input

//First one
var main = document.querySelector("body > pre").innerHTML.split("\n")
var horizontal = 0
var depth = 0

main.forEach(curNumber =>{
  

    if(curNumber.startsWith("forward")){
        number = curNumber.replace("forward ", "")
        horizontal = horizontal + Number(number)
    } if(curNumber.startsWith("up")){
        number = curNumber.replace("up ", "")
        depth = depth - Number(number)
    } if(curNumber.startsWith("down")){
        number = curNumber.replace("down ", "")
        depth = depth + Number(number)
    }
})

console.log(`Horizontal: ${horizontal}`)
console.log(`Depth:  ${depth}`)

console.log(`Horizontal * Depth (answer): ${horizontal * depth}`)

//Second one
var main = document.querySelector("body > pre").innerHTML.split("\n")
var horizontal = 0
var depth = 0
var aim = 0

main.forEach(curNumber =>{
  

    if(curNumber.startsWith("forward")){
        number = curNumber.replace("forward ", "")
        horizontal = horizontal + Number(number)
        depth = (aim * Number(number)) + depth
    } if(curNumber.startsWith("up")){
        number = curNumber.replace("up ", "")
        aim = aim - Number(number)
    } if(curNumber.startsWith("down")){
        number = curNumber.replace("down ", "")
        aim = aim + Number(number)
    }
})

console.log(`Horizontal: ${horizontal}`)
console.log(`Depth:  ${depth}`)

console.log(`Depth * aim: ${depth * aim}`)

console.log(`Horizontal * Depth (answer): ${horizontal * depth}`)