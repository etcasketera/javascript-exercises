const removeFromArray = function(arr, ...rem) {
    let num_to_rem = rem.length
    let arr_len = arr.length
    for (i = 0; i < num_to_rem; i++){
        for (j = 0; j < arr_len; j++){
            if (rem[i] === arr[j]) {
                arr.splice(j,1);
                j++;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
