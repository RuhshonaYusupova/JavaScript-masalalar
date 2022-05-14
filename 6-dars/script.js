/*
1.Mamlakatlar ichidan 4 belgidan iborat davlatlarni bitta arrayga olib Mamlakatlar ro'yhatidan o'chiring.

2.Mamlakatlar ichidan 6 belgidan iborat davlatlarni bitta arrayga olib Mamlakatlar ro'yhatidan o'chiring.

3.Mamlakatlar ichidan G harfi bilan boshlangan davlatlarni bitta arrayga olib Mamlakatlar royhatidan ochiring.

4.Mamlakatlar ichidan C harfi bilan boshlangan davlatlarni bitta arrayga olib Mamlakatlar royhatidan ochiring.

5.Mamlakatlar royhatidan yuqoridagi 4 va 6 belgidan iborati va "G" va "C" harflari bilan boshlanganlarini chiqarib tashlab consolega chiqaring.
*/


let countries_size_4 = [];
let countries_size_6 = [];

let countries_G_harf_bn_boshlanganlari = [];
let countries_C_harf_bn_boshlanganlari = [];

let countries_Qolgani = [];

const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombi",
    "Comoros",
    "Congo (Brazzaville)",
    "Congo",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor Timur)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, The",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
];

// BIRINCHI
for(item of countries){
    if(item.length==4){
        countries_size_4.push(item)
        countries.splice(countries.indexOf(item),1)
    } 
}
console.log(countries_size_4)

// IKKINCHI
for(item of countries){
    if(item.length==6){
        countries_size_6.push(item)
        countries.splice(countries.indexOf(item),1)
    } 
}
console.log(countries_size_6)

// UCHINCHI
for(item of countries){
    if(item[0]=='G'){
        countries_G_harf_bn_boshlanganlari.push(item)
        countries.splice(countries.indexOf(item),1)
    } 
}
console.log(countries_G_harf_bn_boshlanganlari)

// TO'RTINCHI
for(item of countries){
    if(item[0]=='C'){
        countries_C_harf_bn_boshlanganlari.push(item)
        countries.splice(countries.indexOf(item),1)
    } 
}
console.log(countries_C_harf_bn_boshlanganlari)

countries.slice(countries_size_4,countries_size_6,countries_C_harf_bn_boshlanganlari,countries_G_harf_bn_boshlanganlari)
console.log(countries.length)

/*
const login='Ruhshona'
const parol=12345678
let a=prompt("Loginni kiriting: ")
while(a !=login){
    a=prompt("Iltimos Loginni to'g'ri yozing" )
 }
let b=prompt('Parolni kiriting: ')
while(b !=parol){
    b=prompt("Iltimos Parolni to'g'ri yozing" )
 }
*/




