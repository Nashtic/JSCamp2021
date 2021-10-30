console.log("Merhaba Kodlama.io")

//JS type safe değildir.

let dolarBugun = 9.30;
let dolarDun = 9.20;

{
    let dolarDun = 9.10
}
console.log(dolarDun)

//Const verilere değer atanamaz.

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//Birden fazla veriyi anı değişkende kullanmak için 
//array kullanılır.

//camelCasing - fonksiyonlarda, değişkenlerde
//PascalCasing - example: C# metot isimleri
let konutKredileri = ["Konut Kredisi","Özel Konut Kredisi","Kamu Konut Kredisi"]

console.log("<ul>")
for (let index = 0; index < konutKredileri.length; index++) {
    console.log("<li>"+konutKredileri[index]+"</li>")
    
}
console.log("</ul>")