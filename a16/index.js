function add(x,y){
    return new Promise((resolve,reject)=>{
        if(x<5){
            reject("x is less than 5")
        }
        else{
            resolve(x+y)
        }
    })
}
function sqrt(v){
    return v*v;
}
async function main(){
    try{
let sum= await add(10,5)
let result=sqrt(sum)
console.log(result)
} catch (error){
    console.log(error)
}
}
main()


/*function greet(){
  console.log("Hello World")
}
 
async function dispData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json()
  console.log(data);
  greet()
}
dispData();
*/