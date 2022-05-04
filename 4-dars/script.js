
// for( let i = 0; i<=6; i++){
//   console.log(` ${i} * ${i}= ${i**2}` )
// }

/*
// 9 kara jadvali
for(let i = 1; i<= 10; i++){
  console.log(` 9 * ${i} = ${i*9}`)
}
*/

/*
// 5 kara
for(let i = 1; i<= 10; i++){
  console.log(` 5 * ${i} = ${i*5}`)
}
*/

//MASALALAR

//1-masala k va n. k sonini n marta chiqaruvchi programma tuzing
/*
let k = 5
let n = 10
for(let i = 1; i<= n; i++){
  console.log(` k=${k}, n=${i}`)
}
*/

/*
//2-masala a va b. a<b. a va b sonlari orasidagi barcha sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma
let a = 5
let b = 10
let sum = 0
for( let i=5; i<=10; i++){
  console.log(i)
  sum++
}
console.log(`Ularning soni: ${sum}`)
*/

/*
//3-masala a va b. a<b. a va b sonlari orasidagi barcha sonlarni (a va b ni dan tashqari)kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma
let a = 5
let b = 10
let all = 0
for(let i=b-1; i>a; i--){
  console.log(i)
  all++
}
console.log(`Ularning soni: ${all}`)
*/

/*
//4-masala  
let a = 5    //1kg konfet narxi
for( let i = 1; i<=10; i++){
  console.log(` ${i}kg konfetning narxi: ${i*a} ming so'm`)
}
*/

/*
// 10-masala n butun son berilgan. S=1+1/2 +1/3+... +1/n
let n = 5
let all=0
for(i=1; i<=n; i++){
  console.log(i)
  all += 1/i
}
console.log("Natija: ", all)
*/

//QO'SHIMCHA
//1.  Bo'sh arrayga 1 dan 50 gacha bo'lgan sonlarni qo'shib, Keyin consolega shu arraydagi juft sonlarni chiqaramiz, keyin esa shu arraydagi toq sonlarni chiqaramiz.
/*
let arr = []
for( let i=0; i<=49; i++){
  arr[i]=i+1
}
for(let i=0; i<=arr.length-1;i++){
  if(arr[i] % 2 == 0){
    console.log(arr[i])
  }
}
for(let i=0; i<=arr.length-1; i++){
  if(arr[i] % 2 !=0){
    console.log(arr[i])
  }
}
*/

//For ga arr[i]=i deysz

//if(i%2 == 0){
//   console.log(i)
// }

//2. Bo'sh arrayga 1dan 100 gacha sonlarni kiritib, ichidan 3ga bo'linadiganlarini hammasini yig'indisini hisoblab chiqaramiz.




//3. Bo'sh arrayga  1 va 100 oraliqda tashodifiy 20ta son kiritib Juftlarini alohida arrayga olamiz va toqlarini ham alohida arrayga olib arraylarni consolega chiqaramiz




