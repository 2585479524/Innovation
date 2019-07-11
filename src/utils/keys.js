export function com(arr) {
    let sum = [];
    for (var i = 0; i < arr.length; i++) {
        var k = arr[i];
        let single = Object.values(k);
        for (var b = 0; b < single.length; b++) {
            var d = single[b]
            console.log(d);
            sum.push(d);
        }
        console.log(sum);
    }
    return sum
}
export default {
    com
}