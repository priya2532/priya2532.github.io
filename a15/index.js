const product = [
    {id:1,name:"apple",price:23},
     {id:2,name:"orange",price:13},
      {id:3,name:"banana",price:29}

];
//item id and qty

const cart={1:7,3:5}
// short circuting
product.map(value=>{
    cart[value.id] && (
   
    console.log(value.id,value.name,value.price,value.price*cart[value.id])
    )
});


/*product.map(value=>{
    if(cart[value.id]){
     const qty = cart[value.id] ;
    console.log(value.id,value.name,value.price,value.price*qty)
    }
});




// adding total column

/*const product = [
    {id:1,name:"apple",price:23,qty:3,status:"pending"},
     {id:2,name:"orange",price:13,qty:4,status:"pending"},
      {id:3,name:"banana",price:29,qty:2,status:"pending"}

];*/

//print name,price,qty,total where qty>2

/*let updatedProducts = product.map((product) => ({
  ...product,price:product.price+5,status:"complete"
  ,name:product.name,total:product.price*product.qty
}));

let pro = updatedProducts.filter((value) => {
  return value.qty > 2; 
});

console.log(pro); 






/*let updatedProducts = product.map((product) => ({
  ...product,price:product.price+5,status:"complete"
  ,name:product.name,total:product.price*product.qty
}));

//console.log(updatedProducts)
updatedProducts.forEach(element => {
  console.log(element.name+" "+element.total);
})*/



/*const product = [
    {id:1,name:"apple",price:23,status:"pending"},
     {id:2,name:"orange",price:13,status:"pending"},
      {id:3,name:"banana",price:29,status:"pending"}

];
//change status to complete
let updatedProducts = product.map((product) => ({
  ...product,price:product.price+5,status:"complete"
}));
//console.log(updatedProducts)

let first = updatedProducts.map((value) => {
    return {
        name: value.name,
        status: value.status,
    };
});
console.log(first);*/