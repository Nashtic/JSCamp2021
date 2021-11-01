function addToCart(quantity, productName="Elma"){
    console.log("Sepete eklendi: ürün: " 
    + productName + " adet: " + quantity)
}

//addToCart("")
addToCart(10)
//addToCart("Karpuz")

//arrow functions
let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma", 5 , 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3 , 15)

//object 
let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün: "+product.productName)
    console.log("Adet: "+product.quantity)
    console.log("Fiyat: "+product.unitPrice)   
}

function cartTotal(product) {
    console.log("Sepet toplamı = "+ (product.unitPrice*product.quantity))
}

addToCart3(product1)
cartTotal(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}

//adres ataması
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

//sayısal veriler değer tipidir.
//veri obje veya array ise referans tipidir.

function addToCart4(x) {
    console.log(products)
}
//fonksiyon içerisinde products tanımlı değilse bir üst scope'a bakılır
let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

//gönderilen veriler array şeklinde yollanır.
function add(bisey, ...numbers) { //rest operator -- rest operatoru haricinde bir operator varsa basa yazılır
    let total = 0
    for (let index = 0; index < numbers.length; index++) {
        total = total + numbers[index]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30,40)
//add(20,30,40,50)

let numbers = [30,10,5,150,65]
//console.log(numbers)
//numbers'ı ayır
console.log(Math.max(...numbers)) 

//destructring
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name: "İç Anadolu", population:"20M"},
    {name: "Marmara", population:"30M"},
    {name: "Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]

//console.log(icAnadolu.population)
//console.log(marmara.name)
//console.log(karadeniz.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

//login({title}){
//    console.log("<h1>" + title + "</h1>")
//}