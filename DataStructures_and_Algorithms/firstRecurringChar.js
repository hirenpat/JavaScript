//Given an array = [1,2,3,3,4,5]
//It should return --> 3

//Given an array = [1,2,3,4,5]
//It should return --> undefined

//--------------------BY USING ARRAY---------------------//

function firstRecurringChar(input){
    for(let i = 0; i < input.length; i++){
        for(let j = i+1; j < input.length; j++){
            if(input[i] === input[j]){
                return input[i];
            }
        }
    }
    return undefined;
}

//------------------BY USING Hash Table------------------//

// function firstRecurringChar(input){
//     let map ={};
//     for(let i = 0; i < input.length; i++){
//         if(map[input[i]] !== undefined){
//             return input[i];
//         }
//         else{
//             map[input[i]] = i;
//         }
//     }
//     return undefined;
// }