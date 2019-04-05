
function task31() {
          var x=2;
         while (x <= 100){
         	var j=2;
         while (j<x){
         	if (x%j==0){
         		break;
         	}
         	j++;
         }
         if (x==j){
         	document.write(x + " ");
         }
         x++;
        }
                
}

function task32() {
	var x=0;
	document.write(x + "  – это ноль <br>");
	x++;
	do {
		if (x%2==0){
			document.write(x + " – четное число <br>");
		}else {
			document.write(x + " – нечетное число <br>");
		}
		x++;
	}
	while (x<=10);
}

function task33() {
	for (var i = 0; i <=9; document.write(i++ +" ")) {
	}
}

function task34() {
	var n, m;
	n="♥";
	for (m=1; m<=20; m++){
	document.write(n+"<br>");
	n+="X";
}
}


function task41() {
    var x = parseInt(prompt('Введите число от 0 до 999 '));
	if (isNaN(x)){
     alert('Ошибка! Нужно число!');
     return task41();
	}
	else if(x<0||x>999){
      alert('Ошибка! Нужно число число от 0 до 999!');
      return task41();
	}else {
    	if (0<x&&x<10){
           alert('единицы: '+x+', десятки: 0, сотни: 0');
        }else if(10<x&&x<=99){
     	   var arr = x.toString();
           alert('единицы: '+arr[1]+', десятки: '+arr[0]+', сотни: 0');
        }else if (99<x&&x<999){
        	var arr = x.toString();
           alert('единицы: '+arr[2]+', десятки: '+arr[1]+', сотни: '+arr[0]);
        }
     }
}


function task41V2() {
    var x;
	while(isNaN(x = parseInt(prompt('Введите число от 0 до 999 ')))||x<0||x>999)
        alert('Ошибка! Нужно число число от 0 до 999!');
	var hundred=Math.floor(x/100);
    var decade= Math.floor((x-hundred*100)/10);
    var unit=x-decade*10-hundred*100;
    alert('единицы: '+unit+', десятки: '+decade+', сотни: '+hundred);
        
    }
