
let number=12056897216985389;
let mass = [];

console.log(`Entered number: ${number}`)
 function descendingOrder() {
    
   while (number>10) {
       let a=number%10;
       number=(number-a)/10;
       mass.push(a);
   }
    mass.push(number);
    console.log(`basic: ${mass}`);
    mass=mass.sort();
    mass=mass.reverse();
    console.log(`up sorted: ${mass}`);

    let rezzzult=0;
    for (let index = 0; index < mass.length; index++) {
        rezzzult = (rezzzult+mass[index])*10;
    }
    console.log(`Sorted number: ${rezzzult/10}`);
  }

 descendingOrder();