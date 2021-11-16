let arr = [6, 7, 8, 9, 10];

// for 케이스는 크게 3 가지로
// for문 마다 용도가 조금씩 다르다.

console.log("test1. for(i=0;i<arr.length;i++) : ");
for (i = 0; i < arr.length; i++) {
  console.log("i : " + i + ", arr = " + arr[i]);
}

console.log("test2. for(i in arr) : ");
for (i in arr) {
  console.log("i : " + i + ", arr = " + arr[i]);
}

console.log("test3. for(i of arr) : ");
for (i of arr) {
  console.log("i : " + i + ", arr = " + arr[i]);
}

//응용

console.log("test4. forEach : (arr)");
arr.forEach(function (item, index, arr2) {
  console.log(item, index, arr2[index]);
});

console.log("test4. forEach2 : (Object)");

let obj = { a: "가", b: "나", c: "다" };

for (let key in obj) {
  console.log(key, obj[key]);
}
