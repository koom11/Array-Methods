const nums = [10,20,30,-12,40,50,60,70,80,90,100];

let total = 0;
for(let num of nums){
    total += num;
}
console.log(total);

let min = nums[0];
for(let i = 1; i < nums.length; i++){
    if(nums[i] < min){
        min = nums[i];
    }
}
console.log(min);

let str = "lollapalooza";
const charFreq = {};
for(char of str){
    if(charFreq[char]){
        charFreq[char] +=1;
    }
    else{
        charFreq[char] = 1;
    }
}

let evens = [2,4,6,8,10];
 let reduced = evens.reduce(function(accumulator, nextValue){
    return accumulator + nextValue;
});


let words = ['hello', 'I', 'love', 'you'];
let sentence = words.reduce(function(acc, nextWord){
    console.log(acc, nextWord);
    return `${acc} ${nextWord}`;
})

const midTermScores = [50,88,56,34,90,78,87,95,86];
let minScore = midTermScores.reduce(function(min, nextScore){
     return nextScore < min ? nextScore: min;
});
let maxScore = midTermScores.reduce(function(max, nextScore){
    return nextScore > max ? nextScore: max;
});

const finalScores = [98,76,78,98,78,86,95,56,76,43,54,65,91];
const minFinal = finalScores.reduce(function(min, nextScore){
    return nextScore < min ? nextScore : min;
}, minScore);
const maxFinal = finalScores.reduce(function(max, nextScore){
    return nextScore > max ? nextScore : max;
}, maxScore);


const nameArr = [{name: 'Dawn'},{name: 'Evelyn'},{name: 'Eric'},{name: 'Mochi'}]

function extractValue(arr, key){
    return arr.reduce(function(acc, nextObj){
        acc.push(nextObj[key]);
        return acc;
    }, []);
}