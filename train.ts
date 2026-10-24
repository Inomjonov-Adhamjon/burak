/* TASK Y

Shunday function yozing, uni 2'ta array parametri bo'lsin.
Bu function ikkala arrayda ham ishtirok etgan bir xil
qiymatlarni yagona arrayga joylab qaytarsin. */

// yechim:
function findIntersection(arr1: number[], arr2: number[]): number[] {
    return arr1.filter((num) => arr2.includes(num));
}

const result = findIntersection([1, 2, 3], [3, 2, 0]);
console.log(result)


// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// yechim
// function countOccurrences(obj: Record<string, any>, str: string): number {
//     let count = 0;

//     for (let i in obj) {
//         if (i === str) {
//             count++
//         }
//         if (typeof obj[i] === "object" && obj[i] !== null) {
//             count += countOccurrences(obj[i], str)

//         };

//     };

//     return count
// };



// const result = countOccurrences({ model: 'Bugatti', steer: { model: 'HANKOOK', size: 30 } }, 'model')
// console.log(result)


// TASK W

// Shunday function yozing, u o'ziga parametr sifatida
// yagona array va number qabul qilsin. Siz tuzgan function
// arrayni numberda berilgan uzunlikda kesib bo'laklarga
// ajratgan holatida qaytarsin.
// MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

// yechim: 
// function chunkArray(ary: number[], num: number): number[][] {
//     const bloc = [];

//     for (let i = 0; i < ary.length; i += num) {
//         bloc.push(ary.slice(i, i + num));
//     }
//     return bloc;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));





// TASK V

// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.

// yechim
// function countChars(str: string): Record<string, number> {
//     let count: Record<string, number> = {}
//     for (let ele of str) {
//         if (count[ele]) {
//             count[ele]++
//         } else {
//             count[ele] = 1
//         }
//     }
//     return count
// }


// const result = countChars("hello");
// console.log(result)


// TASK U

// Shunday function tuzing, uni number parametri bo'lsin.
// Va bu function berilgan parametrgacha, 0'dan boshlab
// oraliqda nechta toq sonlar borligini aniqlab return qilsi.

// yechim:
// function sumOdds(num: number): number {
//     let count = 0;
//     for (let i = 0; i < num; i++) {
//         if (i % 2 !== 0) {
//             count++
//         }

//     }
//     return count
// }

// const result = sumOdds(9);
// const result2 = sumOdds(11);
// console.log(result)
// console.log(result2)



// TASK T

// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.


// yechim:
// function mergeSortedArrays(num1: number[], num2: number[]): number[] {
//     const merge: number[] = num1.concat(num2);
//     const sort: number[] = merge.sort((a, b) => a - b)

//     return sort
// }


// const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// console.log("result:", result)

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
