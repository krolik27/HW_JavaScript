 function task21() {
          var a = 1, b = 1, c, d;
          c = ++a; 
          alert('c = ++a = 1+1 = '+c); 
          d = b++; 
          alert('d = b++ = 1 ='+d); 
           c = (2+ ++a); 
          alert('c = (2+ ++a)= 2+1+2 ='+c); 
          d = (2+ b++); 
          alert('d = (2+ b++)= 2+2 ='+d); 
          alert('a=(1+(1+a))='+a); 
          alert('b=b=(1+1(+b))='+b); 
         
        }

function task22() {
          var a = 2;
          var x = 1 + (a *= 2);
          alert('1 + (a *= 2) =' + x);
        }

function task23() {
    var a = Math.round(+prompt('Введите число a: ')); 
    var b = Math.round(+prompt('Введите число b: ')); 
      if (isNaN(a)||isNaN(b)){
       alert('Вы не ввели число')
            }
      else if(a>=0&&b>=0){
       alert(a-b);
      }
      else if (a<0&&b<0){
       alert(a*b);
      }
      else {
       alert(a+b);
      }
    
    }

function task24() {
  var a = prompt('Введите число от 0 до 15: '); 
   if (a>=0&&a<=15){
     switch (a){
       case "1":
        alert (a++);
      case "2":
        alert (a++);        
      case "3":
        alert (a++);
      case "4":
        alert (a++);    
      case "5":
        alert (a++);
      case "6":
        alert (a++);
      case "7":
        alert (a++);
      case "8":
        alert (a++);
      case "9":
        alert (a++);
      case "10":
        alert (a++);
      case "11":
        alert (a++);
      case "12":
        alert (a++);
      case "13":
        alert (a++);
      case "14":
        alert (a++);        
      case "15":
        alert("Уфф, последняя 15");
        break;
  }
  
} else if (isNaN(a)){
     alert('Должно быть число!');
  } else {
  alert('Должно быть значение от 0 до 15!');
}
}

function task25() {
var a = parseInt(prompt("Введите a - число от 0 до 10")); 
  var b = parseInt(prompt("Введите b - число от 0 до 10"));
  if (isNaN(a)){
     alert('Должно быть число!');
   }else if (isNaN(b)){
     alert('Должно быть число!');
  } else{
  function sum(a,b){
    return a+b;
      }
  function subtr(a,b){
      return a-b;
      }
    function mult(a,b){
      return a*b;
      }
    function div(a,b){
      return a/b;
      }
    alert (sum(a,b));
    alert (subtr(a,b));
    alert (mult(a,b));
    alert (div(a,b).toFixed(2));
  }
}


 function mathOperation(){
    var arg1= parseInt(prompt("arg1: введите число")); 
    var arg2= parseInt(prompt("arg2: введите число"));
    var operation = prompt("Введите одну из трех операций: subtraction, multiplication или dividing");
    if (isNaN(arg1)){
     alert('arg1 должно быть число!');
   }else if (isNaN(arg2)){
     alert('arg2 должно быть число!');
  } else{
    switch (operation){
      case "subtraction":
          function subtr(arg1, arg2, operation){
            return arg1-arg2;
          }
          alert(subtr(arg1, arg2, operation));
        break;
            case "multiplication":
          function multip(arg1, arg2, operation){
            return arg1*arg2;
          }
          alert(multip(arg1, arg2, operation));
        break;
      case "dividing":
          function div(arg1, arg2, operation){
            return arg1/arg2;
          }
          alert(div(arg1, arg2, operation));
        break;
   }
 }
}


function task27() {
var val = parseInt(prompt("Введите число")); 
var pow = parseInt(prompt("Введите степень")); 
function power(val, pow){

if (pow>0&&pow!==1){
return (val*power(val,pow-1));
} else if (pow==0){
   return 1; 
} else if (pow<0){
  return (1/(val*power(val,Math.abs(pow)-1))); 
}else {
 return val;
}
}
alert (power(val, pow));
}