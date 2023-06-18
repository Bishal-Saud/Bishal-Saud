let arr = [56,85,62,421,721,52,100,154];

function findingValue(){
    
    let min = Math.min(...arr);
    console.log("Minmun : ", min);
    
    let max = Math.max(...arr);
    console.log("maxmun : ", max);
    
    let minAndMaxinObject = {"min":min,
    "max":max}
    console.log(minAndMaxinObject)

}

findingValue(arr) 