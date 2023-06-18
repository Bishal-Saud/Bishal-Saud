let text = "My Name is Bishal Saud 6 6 Bishal";
// let text = prompt("enter word")
const counts = countWord(text);
console.log(counts)


function countWord(text) {
 const words =text.split(' ');
 const wordCountMap= new Map();
 for(let word of words){
     if(wordCountMap.has(word)){
         wordCountMap.set(word, wordCountMap.get(word)+1)
        } else {
        // console.log(wordCountMap)
        wordCountMap.set(word, 1);
    }
 }
 return wordCountMap;
}