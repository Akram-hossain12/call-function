function FindLargest(num1, num2, num3){
    if( num1 > num2 && num1 > num3 ){
        console.log(num1);
    }
    else if(num2 > num1 && num2 > num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}
FindLargest(2,1,3);
FindLargest(5,8,1);

function largest_number(num4,num5,num6){
       if(num4>num5 && num4>num6){
        return (num4);
       }
       else if( num5>num4 && num5>num6){
        return(num5);
       }
       else{
        return(num6);
       }
}
console.log( 'larege number', largest_number(4,5,6));
console.log( 'larege number', largest_number(4.7,4.6,5.7));