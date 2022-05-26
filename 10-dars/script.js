// let sana = prompt("Tug'ilgan sanagizni kiriting: ")
// function getTime(sana){
//   let msec= new Date()-new Date(sana),
//       sec= parseInt(msec/1000),
//       min= parseInt(sec/60),
//       soat= parseInt(min/60),
//       kun= parseInt(soat/24),
//       yil= parseInt(kun/365)
//       return{
//         msec,
//         sec,
//         min,
//         soat,
//         kun,
//         yil,
//       }
// }
// console.log(getTime(sana))


// let name= new Date()
// console.log(name)
// console.log(name.getTime())

// 1
let sana= prompt("Tug'ilgan sanagizni kiriting: ")
let sanaDate= new Date(sana)
let qosh1= sanaDate.getDate() + 1
sanaDate.setDate(qosh1)
// 2
let now=new Date()
console.log(sanaDate)
console.log(now)
// 3
let msec= now - sanaDate
console.log('millisekund: ' + msec)
let sec= msec/1000
console.log('sekund: ' + parseInt(sec))
let min=sec/60
console.log('minut: ' + parseInt(min))
let soat=min/60
console.log('soat: ' + parseInt(soat))
let kun= soat/24
console.log('kun: ' + parseInt(kun))
let yil= kun/365
console.log('yil: ' + parseInt(yil))

// MASALALAR
 // 1
function arr(n){
  let numbers=[]
  for(let i=1; i<=n; i++){
    numbers.push(i)
  }
  return numbers
}
console.log(arr(20))

// 2
let daraja=(n) =>{
  let arr=[]
  for(let i=1; i<=n; i++){
    arr.push(2**i)
  }
  return arr
}
console.log(daraja(4))



//  NOTOGRIIIIIII

// // 5
// let arr=[]
// let toq=[]
// let juft=[]
// let qosh= function(n){
//   for(let i=1; i<=n; i++){
//     arr.push(i)
//     if(arr.indexOf(i)%2==0){
//       toq.push(i)
//     }else{
//       juft.push(i)
//     }
//   }
//   return {
//         arr,
//         juft,
//         toq, 
//   }
// }
// console.log(qosh(15))
// console.log('Toq\'s length: '+ toq.length)
// console.log('Juft\'s length: '+ juft.length)

// // 6
// let arr=[]
// let kamayish= (n) =>{
//   for(let i=1; i<=n; i++){
//     arr.push(i)
//   }
//   return arr.reverse()
// }
// console.log(kamayish(20))

// 8
// function yigindi(n){

// }





