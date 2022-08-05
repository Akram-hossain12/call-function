function foo(){
    console.log('foo')
    bar()
}

foo();

function bar(){
    console.log('bar')
}
 bar();

 function make_avg(num1, num2, num3){
    console.log(num1,num2,num3)
    var sum= num1+num2+num3;
    var avg = sum/3;
    return avg;
  
 }
 var totle = make_avg(1,2,3);
 console.log(totle)

 function singaraAnn(money){
      var singaraPrice = 10;
       var quntity = money/singaraPrice
       return (quntity)
 }
 var mytaka = 200;
 var singaras = singaraAnn(mytaka);
 console.log('eating singara',(singaras))


 function bringSingara (quntity){
    var sigaraPrice = 10;
    var maony = sigaraPrice*quntity;
    return (maony)
  
 }


 var myQuitity= 30;
 var singaradaan = bringSingara (myQuitity);

 console.log(singaradaan)

