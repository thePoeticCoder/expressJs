let fruits ="apple";
console.log(fruits);
{
    console.log(fruits); // this line is tempral deadzone bcz 
    let fruits ;//fruits is defines outside yhe block or below the line 
   
    fruits="orange";
    console.log(fruits);

}
console.log(fruits);