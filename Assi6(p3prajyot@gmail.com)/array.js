let arr=[3,45,6,7,23,5,7,8];
arr.sort(function(a, b){return a - b});
function find_largest(i)
{
    let length = arr.length;
    let pos=length-i;
    return arr[pos];
}

console.log(find_largest(3));