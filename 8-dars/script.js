
// // BIRINCHI 
// // Uzunlik l santimetrda berilgan.Undagi to'liq metrlar sonini aniqlovchi programma tuzilsin.1m=100sm
// function metr (l){
//     console.log(`${l} santimetr ${l/100} metrga teng. `)
// }
// metr (1234)

// //IKKINCHI 
// //Og'irligi m kg da berilgan.Uning to'liq tonnalar sonini aniqlang. 1t=1000kg
// function tonna (m){
//     return (`${m} kg  ${m/1000} tonnaga teng. `)
// }
// console.log(tonna (1234))

// // UCHINCHI
// //A>B musbat sonlar berilgan. A kesmada B kesmani necha marta joylashtirish mumkin?

// function kesma (a,b){
//     return (` ${a} smli kesmada ${b}smli kesma ${a/b} marta joylashadi.`)
// }
// console.log(kesma(50,10))

// // TO'RTINCHI
// // Ikki xonali son berilgan.Uning 10liklar xonasidagi va 1liklar xonasidagi raqamini aniqlang.
// let son=prompt('Ikki xonali son kiriting: ')
// console.log(`O'nliklar xonasidagi son=${son[0]}, birliklar xonasidagi son=${son[1]} `)


// //BESHINCHI
// // Ikki xonali son berilgan.Uning raqamlar yig'ndisini topuvchi programma tuzing
// let s= prompt('Ikki xonali son kiriting: ')
// let a= parseInt(s % 10)
// let b= Math.floor(s % 10)
// console.log(`${s}ning raqamalar yig'indisi= ${a + b} ga teng `)

// //OLTINCHI
// // Ikki xonali son berilgan.Uning raqamlar ko'paytmasini topuvchi programma tuzing
// let son= +prompt('Ikki xonali son kiriting: ')
// console.log(son + 'ning raqamlar ko\'paytmasi=' + son[0] * son[1] + 'ga teng')

// // YETTINCHI
// function yuzlar (a){
//     let yuzXonasi = a % 1000
//     let yuzlarXonasidagiSon = Math.floor(yuzXonasi / 100)
//     return (`Yuzlar xonasidagi son = ${yuzlarXonasidagiSon}`)
// }
// console.log(yuzlar(1785))

// // SAKKIZINCHI
// function vaqt(n){
//     let min= Math.floor(n/60)
//     let soat=Math.floor(min/60)
//     return `Kun voshidan boshlab ${min} minut va ${soat} soat o'tdi`
// }
// console.log(vaqt(14738))

// IF ELSE

// // 1
// function musbat(a){
//     if(a>=0){
//         console.log(true)
//     }else(
//         console.log(false)
//     )
// }
// musbat(-12)

// // 2
// function toq(a){
//     if(a % 2 != 0){
//         console.log(true)
//     }else(
//         console.log(false)
//     )
// }
// toq(17)

// // 3
// function juft(a){
//     if(a % 2 == 0){
//         console.log(true)
//     }else(
//         console.log(false)
//     )
// }
// juft(24)

// // 4
// function katta(a,b){
//     if(a>0 && b>0){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }
// katta(12,-25)

// //5
// function katta(a,b,c){
//     if(a>b && b>c){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }
// katta(50,40,30)

// //6
// function son(a,b,c){
//     if(a<b && b<c){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }
// son(12,13,14)

// // 7
// function toq(a,b){
//     if(a % 2 !=0 && b % 2 !=0){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }
// toq(13,12)

// // 8
// function musbat(a,b,c,d){
//     if(a>0 && b>0 && c>0 && d>0 ){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }
// musbat(2,4,6,5)

// //9
// function musbat(a,b,c){
//     if((a>0 && b>0) || (b>0 && c>0) || (a>0 && c>0)){
//       console.log(true)                                         // noto'g'ri
//     }else{
//         console.log(false)
//     }
// }
// musbat(1,-5,-8)

// //10
// function hafta(a){
//   if(a==1){
//     console.log('Dushanba')
//   }else if(a==2){
//     console.log('Seshanba')
//   }else if(a==3){
//     console.log('Chorshanba')
//   }else if(a==4){
//     console.log('Payshanba')
//   }else if(a==5){
//     console.log('Juma')
//   }else if(a==6){
//     console.log('Shanba')
//   }else if(a==7){
//     console.log('Yakshanba')
//   }else{
//     console.log(false)
//   }
// }
// hafta(2)

// // 11
// function kompaniya(a) {
//   if(a == 99){
//     console.log('Uzmobile')
//   }else if(a == 91){
//     console.log('Beeline')
//   }else if(a == 94){
//     console.log('Ucel')
//   }else if(a == 33){
//     console.log('Humans')
//   }else{
//     console.log(false)
//   }
// }
// kompaniya(33)

// // 12
// function son(a){
//   if(a % 2 == 0){
//     console.log(++a)
//   }else{
//     console.log(--a)
//   }
// }
// son(24)

// // 13
// function son(a){
//   if(a % 2 == 0){
//     console.log(a + 3)
//   }else{
//     console.log(a - 2)
//   }
// }
// son(25)

// // 14
// function katta(a,b){
//   if(a>b){
//     console.log(a)
//   }else{
//     console.log(b)
//   }
// }
//  katta(12,8)

// // 15
// function katta(a,b,c){
//   if(a>b && a>c){
//     console.log(a)
//   }else if(b>a && b>c){
//     console.log(b)
//   }else{
//     console.log(c)
//   }
// }
// katta(14,55,6)

// // 16
// function katta(a,b,c){
//   if(a<b && a<c){
//     console.log(a)
//   }else if(b<a && b<c){
//     console.log(b)
//   }else{
//     console.log(c)
//   }
// }
// katta(84,55,46)

// 17 Jinsga qarab rasm chiqaruvchi dastur tuzing

// // 18
// function stipendiya(a){
//   if(a==5){
//     console.log('500 000')
//   }else if(a==4){
//     console.log('400 000')
//   }else{
//     console.log('Sizga stipendiya yo\'q!!!')
//   }
// }
// stipendiya(3)

// // 19
// function son(a){
//   if(a%2 == 0 && a>0){
//     console.log('Juft musbat')
//   }else if(a%2 == 0 && a<0){
//     console.log('Juft manfiy')
//   }else if(a%2 !=0 && a>0){
//     console.log('Toq musbat')
//   }else if(a%2 !=0 && a<0){
//     console.log('Toq manfiy')
//   }else{
//     console.log(false)
//   }
// }
// son(-25)

// // 20
// function yil(a) {
//   let yosh=2022-a
//   return `Siz ${yosh} yoshda ekansiz. `
// }
// console.log(yil(2004))

// // 21
// function son(a,b,c){
//   if(a<=b && b<=c){
//     console.log(true)
//   }else{
//     console.log(false)
//   }
// }
// son(18,13,15)

// // 22
// function toq(a,b){
//   if(a % 2 != 0 || b % 2 != 0){
//     console.log(true)
//   }else{                                           
//     console.log(false)
//   }
// }
// toq(11,13)

// // 23
// function musbat(a,b,c){
//   if(a>0 && b>0 && c>0){
//     console.log(true)
//   }else{
//     console.log(false)
//   }
// }
// musbat(20,30,-41)

// // 24
// function musbat(a,b,c){
//   if(a>0 || b>0 || c>0){
//     console.log(true)
//   }else{                                     // noto'g'ri
//     console.log(false)
//   }
// }
// musbat(20,30,-41)

// // 25
// function son(a){
//   if(a[0]!=a[1] && a[1]!=a[2] && a[0]!=a[2]){
//     console.log(true)
//   }else{                                                //noto'g'ri
//     console.log(false)
//   }
// }
// son(222)

// //26
// function son(a){
//  if(parseInt(a[0])<parseInt(a[1]) && parseInt(a[1])<parseInt(a[2])){
//    console.log(true)
//  }                                  
// }
// son(181)

// //27
// function com(a){
//   if(a=='samsung'){
//     console.log('5 million')
//   }else if(a=='apple'){
//     console.log('4 million')
//   }else{
//     console.log('Bizda bunday nomli kompyuter yoq')
//   }
// }
// com('apple')

//28 MURAKKAB SONLAR

//switch
// //1
// function haftaKuni(a){
//   switch(a) {
//     case 1:
//       console.log("Dushanba"); break;
//     case 2:
//       console.log("Seshanba"); break; 
//     case 3:
//       console.log("Chorshanba"); break;  
//     case 4:
//       console.log("Payshanba"); break;     
//     case 5:
//       console.log("Juma"); break;
//     case 6:
//       console.log("Shanba"); break;
//     case 7:
//       console.log("Yakshanba"); break;
//     default:
//       console.log('Xato!')  
// }
// }
// haftaKuni(1)

// // 2
// function baho(a){
//   switch(a) {
//     case 1:
//       console.log("Yomon"); break;
//     case 2:
//       console.log("Qoniqarsiz"); break; 
//     case 3:
//       console.log("Qoniqarli"); break;  
//     case 4:
//       console.log("Yaxshi"); break;     
//     case 5:
//       console.log("A'lo"); break;
//     default:
//       console.log("Xato");  
// }
// }
// baho(5)


// // 3
// function fasl(a){
//   switch(a) {
//     case 1:
//       console.log('Qish'); break;
//     case 2:
//       console.log('Qish'); break; 
//     case 3:
//       console.log('Bahor'); break;  
//     case 4:
//       console.log('Bahor'); break;;     
//     case 5:
//       console.log('Bahor'); break;
//     case 6:
//       console.log('Yoz'); break;
//     case 7:
//       console.log('Yoz'); break; 
//     case 8:
//       console.log('Yoz'); break;  
//     case 9:
//       console.log('Kuz'); break;;     
//     case 10:
//       console.log('Kuz'); break;
//     case 11:
//       console.log('Kuz'); break;;     
//     case 12:
//       console.log('Qish'); break;
//     default:
//       console.log('Xato')  
//   }
// }
// fasl(10)
  


// // 4
// function oy(a){
//   switch(a) {
//     case 1:
//       console.log(` ${a} - oyda 30 kun bor. `); break;
//     case 2:
//       console.log(` ${a} - oyda 28 kun bor. `); break; 
//     case 3:
//       console.log(` ${a} - oyda 31 kun bor. `); break;  
//     case 4:
//       console.log(` ${a} - oyda 30 kun bor. `); break;;     
//     case 5:
//       console.log(` ${a} - oyda 31 kun bor. `); break;
//     case 6:
//       console.log(` ${a} - oyda 30 kun bor. `); break;
//     case 7:
//       console.log(` ${a} - oyda 31 kun bor. `); break; 
//     case 8:
//       console.log(` ${a} - oyda 31 kun bor. `); break;  
//     case 9:
//       console.log(` ${a} - oyda 30 kun bor. `); break;;     
//     case 10:
//       console.log(` ${a} - oyda 31 kun bor. `); break;
//     case 11:
//       console.log(` ${a} - oyda 30 kun bor. `); break;;     
//     case 12:
//       console.log(` ${a} - oyda 30 kun bor. `); break;
//   }
// }
// oy(10)
 
// // 5
// function son(a,b){
//   let belgi= prompt("arifmatik amallardan birini kiriting")
//     switch(belgi) {
//       case "+":
//         console.log(` ${a} + ${b} = ${a + b} `); break;
//       case "-":
//         console.log(` ${a} - ${b} = ${a - b} `); break; 
//       case "/":
//         console.log(` ${a} / ${b} = ${a / b} `); break;  
//       case "*":
//         console.log(` ${a} * ${b} = ${a * b} `); break;;     
//       case "**":
//         console.log(` ${a} ** ${b} = ${a ** b} `); break;
//       default:
//         console.log("Xato");
//     }
// }
// son(10,5)
 
// // 6 
// function baho(a){
//   switch(a){
//     case 5:
//       console.log('500 000'); break;
//     case 4:
//       console.log('100 000'); break;
//     default:
//       console.log('Sizga stipendiya yoq!')    
//   }
// }
// baho(3) 

// FOR

// //1    k va n. k sonini n marta chiqaruvchi programma tuzing
// function son(k,n){
//   for(let i = 1; i<= n; i++){
//     console.log(` k=${k}, n=${i}`)
//   }
// }
// son(1,7)

// //2  a va b. a<b. a va b sonlari orasidagi barcha sonlarni (a va b ni ham) chiqaruvchi programma
// function son(a,b){
//   for( let i=a; i<=b; i++){
//     console.log(i)
//   }
// }
// son(10,15)


// //3  a va b. a<b. a va b sonlari orasidagi barcha sonlarni (a va b ni dan tashqari)kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma
// function son(a,b){
//   for(let i=b-1; i>a; i--){
//     console.log(i)
//   }
// }
// son(5,10)

// //4
// let a = 10    //1kg konfet narxi
// for( let i = 1; i<=10; i++){
//   console.log(` ${i}kg konfetning narxi: ${i*a} ming so'm`)
// }

// //5  
// let a = 10    //1kg konfet narxi
// for( let i = 0.1; i<=1; i+=0.1){
//   console.log(` ${i}kg konfetning narxi: ${i*a} ming so'm`)
// }

// // 6
// let a = 10    //1kg konfet narxi
// for( let i = 1.2; i<=2; i+=0.2){
//   console.log(` ${i}kg konfetning narxi: ${i*a} ming so'm`)
// }

// //7
// function son(a,b){
//   let yigindi=0
//   for(let i=a; i<=b; i++){
//     yigindi +=i
//   }
//   console.log(`Yig'indi ${yigindi} ga teng.`)
// }
// son(2,4)

// //8
// function son(a,b){
//   let kopaytma=1
//   for(let i=a; i<=b; i++){
//     kopaytma *= i
//   }
//   console.log(`Ko'paytma ${kopaytma} ga teng.`)
// }
// son(2,4)

// //9
// function son(a,b){
//   let yigindi=0
//   for(let i=a; i<=b; i++){
//     yigindi += i*i
//   }
//   console.log(`Yig'indi ${yigindi} ga teng.`)
// }
// son(2,4)

// // 10     n butun son berilgan. S=1+1/2 +1/3+... +1/n
// let n = 5
// let all=0
// for(i=1; i<=n; i++){
//   console.log(i)
//   all += 1/i
// }
// console.log("Natija: ", all)

// // 11
// function toq(a){
//   for(let i=1; i<=a; i++){
//     if(i % 2 !=0){
//       console.log(i)
//     }
//   }
// }
// toq(20)

// // 12
// function toq(a){
//   for(let i=1; i<=a; i++){
//     if(i % 2 ==0){
//       console.log(i)
//     }
//   }
// }
// toq(20)

// 13   MURAKKAB SON

// // 14
// function son(a){
//   for(let i=1; i<=a; i++){
//     console.log(Math.pow(i,2))
//   }
// }
// son(10)

// //15
// function son(a){
//   for(i=a; i>=1; i--){
//     console.log(i)
//   }
// }
// son(20)

// // 16 BESHGA KARRALI
// function son(n) {
//   for(let i=0; i<=n; i++){
//     if(i % 5 ==0){
//       continue;
//     }
//     console.log(i)
//   }
// }
// son(20)

// //17
// function kopaytma(a){
//   let kopaytma=1
//   for(let i=1; i<=a; i++){
//     kopaytma *=i
//   }
//   console.log(`Ko'paytma ${kopaytma} ga teng.`)
// }
// kopaytma(5)


// // 18 FAKTORIAL
// function faktorial(n) {
//   let yigindi=1
//   for(let i=1; i<=n; i++){
//     yigindi *=i
//   }
//   console.log(yigindi)
// }
// faktorial(4)

// //19
// function son(n,x) {
//   let yigindi=1
//   for(let i=1; i<=n; i++){
//     yigindi=(1+x+ x*i/i*i)
//   }
//   console.log(yigindi)
// }
// son(3,5)


// // 20
// function bolish(n,x){
//   for(let i=1; i<=n; i++){
//     if(i%x ==0){
//       console.log(i)
//     }
//   }
// }
// bolish(20,5)



// //  kara jadvali
// function karaJadval(a){
//   for(let i=1; i<=10; i++){
//     console.log(`${a} * ${i} = ${i*a} `)
//   }
// }
// karaJadval(6)






















