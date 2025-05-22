//destructing objects
/*const user =[{'id':1,'name':'raji','price':49},{'id':2,'name':'ji','price':8},{'id':2,'name':'ji','price':8}]
const[id,name,price]=user
console.log(name);
const{name:full}=user
console.log(name)




//destructing of array

/*const num=[23,4,5]
const[a,b,c]=num
console.log(a)



/*const user =[{'id':1,'name':'raji','price':49},{'id':2,'name':'ji','price':8}]
//rest in objects
const[f,...last]=user
console.log(last)

/*const score=[2,43,5,67,44]
// rest in destruction
const[a,...arrscore]=score
console.log(arrscore[3])*/


// rest in function
/*function add(...values){
 return values.filter((value)=>value>3)
}
console.log(add(3,4,5))

/*function mul(...values){
return values.reduce((a,b)=>a*b)
}
console.log(mul(3,4,22,3))


/*const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];


const newProduct = { id: 4, name: "p4", price: 90 };

const newProducts = [...products,newProduct]
//console.log(newProducts)

const incre = newProducts.map((value)=>({...value,price:value.price+5}))

incre.forEach(Element=>{
    console.log(`name:${Element.name},price:${Element.price}`)
})
 
/*function add(x,y){
    return new Promise((resolve,reject)=>{
        if(x<4){
            resolve(x+y);
        }
        else{
            reject("error cant less than 4")
        }
    })
}
function sqr(v){
    return v*v;
}
 async function main() {
    try{
let n1=await add(4,5);
let result=sqr(n1);
console.log(result)
    }
    catch (err){
        console.log(err);
    }
 }
 main();



/*function add(x,y){
    return Promise.resolve(x+y);
}
function sqr(v){
    return v*v;
}
async function main(){
    let sum=await add(4,5);
    let result=sqr(sum);
console.log(result)
}
main()

/*const f1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
      // reject("Something Went Wrong");
    }, 5000);
  });
};
const f2 = (x) => {
  console.log(x + 6);
};
const f3 = async () => {
  try {
    let n1 = await f1();
    f2(n1);
  } catch (err) {
    console.log(err);
  }
};

f3();
/*function f1(){
setTimeout(()=>{
console.log("hello")
},5000)
}
function f2(){
    console.log("raji")
}
f1()
f2()

/*const product = [
    { id: 1, name: "apple", price: 23, category: "fruit", inStock: true, rating: 4.5 },
    { id: 2, name: "orange", price: 13, category: "fruit", inStock: true, rating: 4.2 },
    { id: 3, name: "banana", price: 29, category: "fruit", inStock: false, rating: 4.0 },
    { id: 4, name: "grapes", price: 35, category: "fruit", inStock: true, rating: 4.3 },
    { id: 5, name: "mango", price: 45, category: "fruit", inStock: false, rating: 4.8 },
    { id: 6, name: "pineapple", price: 50, category: "fruit", inStock: true, rating: 4.1 },
    { id: 7, name: "watermelon", price: 60, category: "fruit", inStock: true, rating: 4.6 },
    { id: 8, name: "kiwi", price: 40, category: "fruit", inStock: false, rating: 4.4 },
    { id: 9, name: "strawberry", price: 55, category: "berry", inStock: true, rating: 4.9 },
    { id: 10, name: "blueberry", price: 65, category: "berry", inStock: false, rating: 4.7 }
];



//////////////
/*const cart={1:4,3:5,5:4,7:9};
product.map((value)=>{
   if(cart[value.id]){
    console.log(value.id,value.name,value.price*cart[value.id])
   }
   })





//////////////////////////////////
//print name ,id,.. where price>40

/*let updatedProducts=product.map(value=>({
    ...value,id:value.id,name:value.name,total:value.price*value.rating

    }));
let pro=updatedProducts.filter((value)=>{
    return value.price>40;
    
});
//console.log(pro)
pro.forEach(Element=>console.log(Element.name+" "+Element.price))


/*let updatedProducts=product.map(value=>({
    ...value,id:value.id,name:value.name,total:value.price*value.rating

    }));

updatedProducts.forEach(Element=>console.log(`name:${Element.name}  ,total:${Element.total}`))


/*let updatedProducts=product.map(value=>{
    return{
        name:value.name,
        inStock:"true"
    }
})
updatedProducts.forEach(value=>console.log(value.name+" "+value.inStock))


/*let updatedProducts=product.map((value)=>({
    ...value,inStock:"true"
}))
console.log(updatedProducts)

/*let first=product.map((value)=>({
    ...value,price:value.price+5
}))
console.log(first)

/* product.map((value) => {
 console.log(`name:${value.name} , price:${value.price+5}`)
});

/*product.forEach(element => {
   console.log(element.name+" "+element.rating) 
});*/

//product.forEach(value=>console.log(value.rating+5))