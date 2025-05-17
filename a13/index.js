const product = [
    {id:1,name:"apple",price:23},
     {id:2,name:"orange",price:13},
      {id:3,name:"banana",price:29}

];

//product.forEach((product)=>console.log(product.price+5))
//product.forEach((product)=>console.log(product.name))

/*let pro=product.map((value)=> value.price+5)

console.log(pro)


let name=product.map((value)=>value.name)
console.log(name)*/

let updatedProducts = product.map((value) => {
  return {
    name: value.name,
    price: value.price + 5
  };
});

console.log(updatedProducts);