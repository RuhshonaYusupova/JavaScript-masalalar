
//QO'SHIMCHA
//BIRINCHI.  Bo'sh arrayga 1 dan 50 gacha bo'lgan sonlarni qo'shib, Keyin consolega shu arraydagi juft sonlarni chiqaramiz, keyin esa shu arraydagi toq sonlarni chiqaramiz.

let arr = []
let juft = []
let toq = []

for( let i=1; i<=50; i++){
  arr[i-1]=i
}
console.log(arr)

for(let i=0; i<=49;i++){
  if(arr[i] % 2 == 0){
    juft.push(arr[i])
  }
  else{
    toq.push(arr[i])
  }
}
console.log(juft)
console.log(toq)


//IKKINCHI. Bo'sh arrayga 1dan 100 gacha sonlarni kiritib, ichidan 3ga bo'linadiganlarini hammasini yig'indisini hisoblab chiqaramiz.
/*
let arr = []
let yigindi = 0
for(let i=1; i<=100; i++){
  arr[i-1]=i
}
for(let i=0; i<=99; i++){
  if(arr[i] % 3 ==0){
    yigindi += arr[i]
  }
}
console.log(` 3 ga bo'linadiganlarining hammasining yig'indisi= ${yigindi}`)
*/

//UCHINCHI. Bo'sh arrayga  1 va 100 oraliqda tashodifiy 20ta son kiritib Juftlarini alohida arrayga olamiz va toqlarini ham alohida arrayga olib arraylarni consolega chiqaramiz
/*
let arr = []
let juft = []
let toq = []
for( let i=0; i<=19; i++){
  arr[i]= parseInt(Math.random()*100)
}
console.log(arr)

for(let i=0; i<=19; i++){
  if(arr[i] % 2 == 0){
    juft.push(arr[i])
  }
  else{
    toq.push(arr[i])
  }
}
console.log(juft)
console.log(toq)
*/

//TO'RTINCHI. 10 nafar talabaning yoshi berilgan.O'rtacha yoshni toping.
/*
let arr =[12,24,17,24,18,14,23,16,20,21]
let umumiy = 0
let arrLen = arr.length
for( i=0; i<=arrLen-1; i++){
  umumiy += arr[i]
}
console.log(` O'rtacha yosh: ${Math.floor(umumiy/arrLen)}`)
*/


// CASE-1

a = parseInt(Math.random()*10)% 8;
  switch(a) {
    case 1:
      console.log("Dushanba"); break;
    case 2:
      console.log("Seshanba"); break; 
    case 3:
      console.log("Chorshanba"); break;  
    case 4:
      console.log("Payshanba"); break;     
    case 5:
      console.log("Juma"); break;
    case 6:
      console.log("Shanba"); break;
    case 7:
      console.log("Yakshanba"); break;
}


// CASE-2

a = prompt("Bir xonali son kiriting")
  switch(a) {
    case "1":
      console.log("Yomon"); break;
    case "2":
      console.log("Qoniqarsiz"); break; 
    case "3":
      console.log("Qoniqarli"); break;  
    case "4":
      console.log("Yaxshi"); break;     
    case "5":
      console.log("A'lo"); break;
    default:
      console.log("Xato");  
}




// CASE-3
a = prompt("Oylardan birining raqamini kiriting")
  switch(a) {
    case "1":
      console.log('Qish'); break;
    case "2":
      console.log('Qish'); break; 
    case "3":
      console.log('Bahor'); break;  
    case "4":
      console.log('Bahor'); break;;     
    case "5":
      console.log('Bahor'); break;
    case "6":
      console.log('Yoz'); break;
    case "7":
      console.log('Yoz'); break; 
    case "8":
      console.log('Yoz'); break;  
    case "9":
      console.log('Kuz'); break;;     
    case "10":
      console.log('Kuz'); break;
    case "11":
      console.log('Kuz'); break;;     
    case "12":
      console.log('Qish'); break;
  }



// CASE-4
a = prompt("Oylardan birining raqamini kiriting")
  switch(a) {
    case "1":
      console.log(` ${a} - oyda 30 kun bor. `); break;
    case "2":
      console.log(` ${a} - oyda 28 kun bor. `); break; 
    case "3":
      console.log(` ${a} - oyda 31 kun bor. `); break;  
    case "4":
      console.log(` ${a} - oyda 30 kun bor. `); break;;     
    case "5":
      console.log(` ${a} - oyda 31 kun bor. `); break;
    case "6":
      console.log(` ${a} - oyda 30 kun bor. `); break;
    case "7":
      console.log(` ${a} - oyda 31 kun bor. `); break; 
    case "8":
      console.log(` ${a} - oyda 31 kun bor. `); break;  
    case "9":
      console.log(` ${a} - oyda 30 kun bor. `); break;;     
    case "10":
      console.log(` ${a} - oyda 31 kun bor. `); break;
    case "11":
      console.log(` ${a} - oyda 30 kun bor. `); break;;     
    case "12":
      console.log(` ${a} - oyda 30 kun bor. `); break;
  }


// CASE-5

a = prompt("Qo'shish, Ayirish, Bo'lish, Ko'paytirish yoki Darajaga ko'tarish belgilaridan birini kiriting")
firstNum = 20
secondNum = 5
console.log(` Birinchi son: ${firstNum} `)
console.log(` Ikkinchi son: ${secondNum} `)
  switch(a) {
    case "+":
      console.log(` ${firstNum} + ${secondNum} = ${firstNum + secondNum} `); break;
    case "-":
      console.log(` ${firstNum} - ${secondNum} = ${firstNum - secondNum} `); break; 
    case "/":
      console.log(` ${firstNum} / ${secondNum} = ${firstNum / secondNum} `); break;  
    case "*":
      console.log(` ${firstNum} * ${secondNum} = ${firstNum * secondNum} `); break;;     
    case "**":
      console.log(` ${firstNum} ** ${secondNum} = ${firstNum ** secondNum} `); break;
    default:
      console.log("Xato");
  }



// YOSH

a = prompt("Tug'ilgan yilingiz? ")
yosh = 2022 - a
if( yosh >= 16 ){
  console.log(` Siz ${2022 - a} yoshda ekansiz.Kirishingiz mumkin. `)
}
else{
  console.log(` Siz ${2022 - a} yoshda ekansiz.Kirishingiz taqiqlangan. `)
}






