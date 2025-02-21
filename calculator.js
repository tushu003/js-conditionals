/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const age=24;
const price=250;
const students=true;
if(age<10){
    console.log("Free")
}
else if(students){
    const discount=price*50/100;
    console.log(discount);
}
else if(age>=60){
    const discount2=price*15/100;
    console.log(discount2);
}
else{
    console.log("Regular ticket fare 800 tk");
}