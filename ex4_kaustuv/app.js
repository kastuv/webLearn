const List =[];

List.push(20,39,12,62);

let sum = 0; 

const Average = (arr) => {
    
    for( let i=0; i< List.length;i++){
        sum = sum + List[i];
    }
    return  (sum/List.length);
}

const result = Average(List);


console.log("The average of "+ List.length +" test score is: "+result.toFixed(1));
console.log("No of test score:" + List.length)
console.log("Test score ");

for(let i=0;i<List.length;i++)
{
    console.log(List[i])
}