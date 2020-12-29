//Merge Sorted Arrays
//array1 = [0, 3, 4, 6]
//array2 = [4, 6, 30]
//mergeSortedArrays = [0, 3, 4, 4, 6, 6, 30]

function mergeSortedArrays(array1, array2){
    const mergedArray = [];

    let array1Item = array1[0];
    let array2Item = array2[0];

    let i = 0;
    let j = 0;

    //Check Input
    if(array1.length === 0){
        return array2;
    }
    if(array2.length === 0){
        return array1;
    }

    while(array1Item || array2Item){
        //check for undefined
        if(!array2Item || (array1Item < array2Item)){
            mergedArray.push(array1Item);
            array1Item = array1[i+1];
            i++;
        } 
        else {
            mergedArray.push(array2Item);
            array2Item = array2[j+1];
            j++;
        }
    }
    return mergedArray;
}