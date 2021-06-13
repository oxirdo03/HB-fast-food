let button1 = document.getElementById("b1");
let button2 = document.getElementById("b2");
let button3 = document.getElementById("b3");
let button4 = document.getElementById("b4");
let button5 = document.getElementById("b5");
let button6 = document.getElementById("b6");
let button7 = document.getElementById("b7");
let button8 = document.getElementById("b8");
let button9 = document.getElementById("b9");
let button10 = document.getElementById("b10");
let button11= document.getElementById("b11");
let button12 = document.getElementById("b12");
let button13 = document.getElementById("b13");
let button14 = document.getElementById("b14");
let button15 = document.getElementById("b15");
let button16 = document.getElementById("b16");
let button17 = document.getElementById("b17");
let button18 = document.getElementById("b18");
let button19 = document.getElementById("b19");
let button20 = document.getElementById("b20");

let finalPrize = document.getElementById("total");

let count1= document.getElementById("c1");
let count2= document.getElementById("c2");
let count3= document.getElementById("c3");
let count4= document.getElementById("c4");
let count5= document.getElementById("c5");
let count6= document.getElementById("c6");
let count7= document.getElementById("c7");
let count8= document.getElementById("c8");
let count9= document.getElementById("c9");
let count10= document.getElementById("c10");

let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let c5 = 0;
let c6 = 0;
let c7 = 0;
let c8 = 0;
let c9 = 0;
let c10 = 0;

let sum =0;




button1.addEventListener("click" ,function(){
    if(c1>0){
        c1--;
        sum = sum-2.5;
        
        count1.innerHTML=c1;
        finalPrize.innerHTML = `Total price: ${sum} лв`;
    }

});
button2.addEventListener("click", function(){
  c1++;
  count1.innerHTML=c1;
  sum = sum + 2.5;
  
  finalPrize.innerHTML = `Total price: ${sum} лв`;
})
button3.addEventListener("click" ,function(){
    if(c2>0){
        c2--;
        sum = sum-3;
        count2.innerHTML=c2;
        finalPrize.innerHTML = `Total price: ${sum} лв`;
    }

});
button4.addEventListener("click", function(){
  c2++;
  count2.innerHTML=c2;
  sum = sum + 3;
  finalPrize.innerHTML = `Total price: ${sum} лв`;
})
button5.addEventListener("click" ,function(){
    if(c3>0){
        c3--;
        sum = sum-4;
        Number.parseFloat(sum).toFixed(2);
        count3.innerHTML=c3;
        finalPrize.innerHTML = `Total price: ${sum} лв`;
    }

});
button6.addEventListener("click", function(){
  c3++;
  count3.innerHTML=c3;
  sum = sum + 4;
  finalPrize.innerHTML = `Total price: ${sum} лв`;
})
button7.addEventListener("click" ,function(){
    if(c4>0){
        c4--;
        sum = sum-3.5;
        count4.innerHTML=c4;
        finalPrize.innerHTML = `Total price: ${sum} лв`;
    }

});
button8.addEventListener("click", function(){
  c4++;
  count4.innerHTML=c4;
  sum = sum + 3.5;
  finalPrize.innerHTML = `Total price: ${sum} лв`;
})
button9.addEventListener("click" ,function(){
    if(c5>0){
        c5--;
        sum = sum-3;
        count5.innerHTML=c5;
        finalPrize.innerHTML = `Total price: ${sum} лв`;
    }

});
button10.addEventListener("click", function(){
  c5++;
  count5.innerHTML=c5;
  sum = sum + 3;
  finalPrize.innerHTML = `Total price: ${sum} лв`;
})
button11.addEventListener("click" ,function(){
    if(c6>0){
        c6--;
        sum = sum-1.5;
        count6.innerHTML=c6;
        finalPrize.innerHTML = `Total price: ${sum} лв`;
    }

});
button12.addEventListener("click", function(){
  c6++;
  count6.innerHTML=c6;
  sum = sum + 1.5;
  finalPrize.innerHTML = `Total price: ${sum} лв`;
})
button13.addEventListener("click" ,function(){
    if(c7>0){
        c7--;
        sum = sum-1.5;
        count7.innerHTML=c7;
        finalPrize.innerHTML = `Total price: ${sum} лв`;
    }

});
button14.addEventListener("click", function(){
  c7++;
  count7.innerHTML=c7;
  sum = sum + 1.5;
  finalPrize.innerHTML = `Total price: ${sum} лв`;
})
button15.addEventListener("click" ,function(){
    if(c8>0){
        c8--;
        sum = sum-2.5;
        count8.innerHTML=c8;
        finalPrize.innerHTML = `Total price: ${sum} лв`;
    }

});
button16.addEventListener("click", function(){
  c8++;
  count8.innerHTML=c8;
  sum = sum + 2.5;
  finalPrize.innerHTML = `Total price: ${sum} лв`;
})
button17.addEventListener("click" ,function(){
    if(c9>0){
        c9--;
        sum = sum-3.5;
        count9.innerHTML=c9;
        finalPrize.innerHTML = `Total price: ${sum} лв`;
    }

});
button18.addEventListener("click", function(){
  c9++;
  count9.innerHTML=c9;
  sum = sum + 3.5;
  finalPrize.innerHTML = `Total price: ${sum} лв`;
})
button19.addEventListener("click" ,function(){
    if(c10>0){
        c10--;
        sum = sum-2.5;
        count10.innerHTML=c10;
        finalPrize.innerHTML = `Total price: ${sum} лв`;
    }

});
button20.addEventListener("click", function(){
  c10++;
  count10.innerHTML=c10;
  sum = sum + 2.5;
  finalPrize.innerHTML = `Total price: ${sum} лв`;
})

let final = document.getElementById("final");
final.addEventListener("click", function(){
    alert(`Thanks for your purchase. Обща сума:${sum}`);
    finalPrize.innerHTML = `Total price: 0 лв`;
    sum = 0;
    count1.innerHTML=0;
    count2.innerHTML=0;
    count3.innerHTML=0;
    count4.innerHTML=0;
    count5.innerHTML=0;
    count6.innerHTML=0;
    count7.innerHTML=0;
    count8.innerHTML=0;
    count9.innerHTML=0;
    count10.innerHTML=0;
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;
    let c5 = 0;
    let c6 = 0;
    let c7 = 0;
    let c8 = 0;
    let c9 = 0;
    let c10 = 0;

})