// Use this arrays for solution
let array_1 = [3, 1, 3, 4, 2, 4, 12]
let array_2 = [4, 15, 43, 1, 15, 1]


let arr = [];

for (let i = 0; i < array_1.length; i++){

 const element = parseInt( array_1[i])
let exist = false
}
for (let j = 0; j < array_2.length; j++){
const next_element = parseInt(array_2[j])
if (element == next_element){
 exist = true
    break
}


}
if (!exist){
    array_1.push(element);

}
console.log(arr);
