// code your solution here
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

saturdayFun("bathe my dog")

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(string = "*"){
    const innerFunction = function (word = special) {
        return `You are ${string}${word}${string}!` 
    }
    return innerFunction
}
wrapAdjective("%")("a dedicated programmer")
