
			

				var i;			
				for (var i = 1; i<=20; i++){
        switch(true){
           case (i%5===0 && i%3==0):
                document.getElementById("list").innerHTML += "FizzBuzz" + "<BR>";
                break; 
           case !(i%3):
                document.getElementById("list").innerHTML += "Fizz" + "<BR>";
                break;
            case !(i%5):
                document.getElementById("list").innerHTML += "Buzz" + "<BR>";
                break;
            default:
                document.getElementById("list").innerHTML += i + "<BR>";
                break;
        };


};