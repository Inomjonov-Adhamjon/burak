// TASK T

// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.


// yechim:
function mergeSortedArrays(num1: number[], num2: number[]): number[] {
    const merge: number[] = num1.concat(num2);
    const sort: number[] = merge.sort((a, b) => a - b)

    return sort
}


const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log("result:", result)

// TASK S:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar 
// orasidagi tushib qolgan sonni topib uni return qilsin

// yechim:
// function missingNumber(arr: number[]): number {
//     const length = arr.length;
//     const sum = length * (length + 1) / 2;
//     let actualSum = 0

//     for (let num of arr) {
//         actualSum += num
//     }

//     return sum - actualSum
// };

// const result = missingNumber([3, 0, 1]);
// console.log(result);




// TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin


// yechum:
// function calculate(str: string) {
//     const arr = str.split(" ");
//     let store: number = 0
//     for (let element of arr) {
//         if (!isNaN(Number(element))) {
//             store += Number(element)
//         }
//     }
//     return store

// };

// const result = calculate("1 + 2");
// console.log(result);
// const result2 = calculate("1 + 2 + 5");
// console.log(result2);







// TASK Q:

// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

// yechim:
// function hasProperty(obj: Record<string, any>, str: string): boolean {
//     const keys = Object.keys(obj)
//     return keys.includes(str)
// };

// const result = hasProperty({ name: "BMW", model: "M3" }, "model");
// console.log(result)




// TASK P:

// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// Yechim:
// function objectToArray(object: Record<string, any>): [string, any][] {
//     return Object.entries(object);
// };

// const result = objectToArray({ a: 10, b: 20 });
// console.log(result);


// initial yechim:
// function objectToArray(obj: object) {
//     const arr = Object.entries(obj);
//     return arr
// };

// const result = objectToArray({ a: 10, b: 20 })
// console.log(result);





// TASK O:

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// yechim
// function calculateSumOfNumbers(arr: any[]) {
//     let sum = 0;
//     for (let ele of arr) {
//         if (typeof ele == "number") {
//             sum += ele
//         }
//     }
//     return sum
// }


// const result = calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);
// console.log(result)









// Task N 
// Shunday function yozing, u string qabul qilsin va string palindrom yani togri 
// oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

// yechimi:
// function polindromCheck(str: string): boolean {
//     const reversed = str.split("").reverse().join("")
//     return str === reversed
// }
// const result = polindromCheck("dad");
// console.log("result:", result)



// TASK M: 

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin
// va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni 
// kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.

// yechim:
// function getSquareNumbers(numbers) {
//     const result = numbers.map((number) => {
//         return {
//             number: number,
//             square: number * number
//         }

//     });
//     return result
// }

// const result = getSquareNumbers([1, 2, 3, 4]);
// console.log(result)



// TASK L
// Shunday function yozing, u string qabul qilsin va string ichidagi 
// hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan 
// stringni qaytarsin.


// yechim:
// function reverseSentence(str) {
//     const word = str.split(" ")
//     const teskari = word.map((word) => word.split("").reverse().join(""))

//     return teskari.join(" ")
// };

// console.log(reverseSentence("we like coding"));
