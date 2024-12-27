// 1. Quyidagi massivdagi barcha odamlarni yoshlarining o’rtacha qiymatini chiqaruvchi getAverageAge(arr) nomli funksiya yozing.
const people = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];
function getAverageAge(arr) {
  let ages = 0;
  for (let i = 0; i < arr.length; i++) {
    ages += arr[i].age;
  }
  return ages / arr.length;
}
console.log(getAverageAge(people));

// 2. Massiv ichidagi har bir objectga isMarried nomli property qo’shilsin. Agar object yoshi 25 dan kichi bo’lsa isMarried ga false, aks holda true qiymat o’zlashtirilsin.
function isMarried(obj, age) {
  const ages = [];
  for (let i = 0; i < obj.length; i++) {
    obj[i].age > age ? (obj[i].isMarried = true) : (obj[i].isMarried = false);
    ages.push(obj[i]);
  }
  return ages;
}
console.log(isMarried(people, 25));

// 3. Quyidagi objectlardan tuzilgan massiv ichidagi yoshi eng katta va yoshi eng kichik bo’lgan insonning ismlarini qaytaruvchi getNameMaxMinAge(arr) nomli funksiya yozing. (for)
function getNameMaxMinAge(arr) {
  let maxName = [];
  let minName = [];
  let max = [];
  let min = arr[0].age; // ********
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].age > max) {
      max = arr[i].age;
      maxName = arr[i].name;
    }
    if (arr[i].age < min) {
      min = arr[i].age;
      minName = arr[i].name;
    }
  }
  return { maxName, minName };
}
console.log(getNameMaxMinAge(people));

// 4. Objectda turli xil kalitlar bir xil qiymatlarga ega, kalitlari o'sha qiymatlardan iborat shunday object tuzingki, bu objectning qiymatlari massiv ko'rinishidagi eski objectning kalitlarlaridan iborat bo'lsin.
let num = {1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20}
let keyObj = {};
for(let key in num){
    if(!keyObj[num[key]]){
        keyObj[num[key]] = [key]
    }else{
        keyObj[num[key]].push(key)
    }
}
console.log(keyObj);
// Output: {20: [1, 3, 8], 30: [2, 5], 40: [4, 7]: 50: [6]}




// 5. Ikkita object berilgan ularning ba'zi kalitlari bir xil. Bir xil kalitlaridan iborat bo'lmagan yangi object hosil qiling.
let obj1 = { a: 3, b: 10, c: 5, d: 7 };
let obj2 = { a: 10, d: 4, e: 6, f: 15 };
function getKeys(obj1, obj2) {
  let result = {};
  let key1 = Object.keys(obj1);
  for (let i = 0; i < key1.length; i++) {
    let key = key1[i];
    if (!Object.hasOwn(obj2, key)) {
      result[key] = obj1[key];
    }
  }

  let key2 = Object.keys(obj2);
  for (let i = 0; i < key2.length; i++) {
    let key = key2[i];
    if (!Object.hasOwn(obj1, key)) {
      result[key] = obj2[key];
    }
  }
  return result;
}
console.log(getKeys(obj1, obj2));

// UYGA VAZIFA
// 1.Quyidagi objectni outputdagi ko'rinishda chiqaring. (toString, join)
const me = {
  firstName: "Abdulaziz",
  lastName: "Toshpulatov",
  age: 23,
  languages: ["js", "python", "c++", "nodejs"],
  friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
};

function formatObject(obj){
    let result = "";
    for(let key in obj){
        let value = obj[key];
        if(Array.isArray(value)){
            if(key === "friends"){
                value = value.join("+");
            }else{
                value = value.join(",")
            }
        }
        result += `${key}: ${value}\n`
    }
    return result
}
console.log(formatObject(me));



// 2. Kalitlari 1 dan n gacha bo’lganlar sonlarga, qiymatlari esa o’sha sonlarning kvatratiga teng object hosil qiling. (for)
let n = 5;
function objSqrt(n){
    let obj = {};
    for(let i = 1; i <= n; i++){
        obj[i] = i ** i;
    }
    return obj
}
// console.log(objSqrt(n));


// 3. 2-misoldan hosil bo’lgan objectning kalitlari va qiymatlari yig’indisini toping. (Object.keys(), Object.values())
function SumOfKeysValues(obj){
    let keys = Object.keys(obj).map(Number);
    let values = Object.values(obj);
    let sumOfKeys = 0;
    let sumOfValues = 0;
    for(let i = 0; i < keys.length; i++){
        sumOfKeys += keys[i]
    }
    for(let i = 0; i < values.length; i++){
        sumOfValues += values[i]
    }
    return sumOfKeys + sumOfValues
}
let SumObj = objSqrt(n)
console.log(SumOfKeysValues(SumObj));



// 4. Stringlar massivi berilgan. Shunday object hosil qilingki, o’sha objectning kalitlari massiv elementlaridan va qiymatlari esa ularning uzunligidan iborat bo’lsin. (for) 

// har bir valueda nega 4 chiqib qolyapti tushunmadim
let obj = ["Abdulaziz", "Safarmurod", "O'rol", "Jahongir"];

function toObj(obj){

    let result = {};

    for(let i = 0; i < obj.length; i++){
        let key = obj[i]
        let value = obj.length
        result[key] = value;
    }
    return result   
}
console.log(toObj(obj));


// 5. Shunday object berilganki, uning kalitlari mahsulotlardan va qiymatlari esa ularning narxlaridan tuzilgan. Barcha mahsulot qancha turishini toping. (Object.values())
let fruits = {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000};

function findSum(sum){
    let value = Object.values(sum)
    let calc = 0;
    for(let i = 0; i < value.length; i++){
        calc += value[i]
    }
    return calc
}
console.log(findSum(fruits));








