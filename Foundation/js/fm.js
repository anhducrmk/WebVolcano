  		var n;
  		var score;
  		var sumscore=0;
		function myFunction()
			{
			var x=document.getElementById("demox")
			x.innerHTML=Math.floor((Math.random()*10)+1);
			var y=document.getElementById("demoy")
			y.innerHTML=Math.floor((Math.random()*10)+1);
			  
			
			n= parseInt(x.innerHTML) + parseInt(y.innerHTML);

			var m;
			m=Math.floor((Math.random()*6)-3);
			var g;
			g=parseInt(n)+parseInt(m)
			  	
			var myArray = [n,g];
			score =document.getElementById("demoscore")
			score.innerHTML = myArray[Math.floor(Math.random() * myArray.length)];			

			}
			function dung()
			{
					alert("Bạn trả lời đúng");
					sumscore++;
					myFunction();
					var hhh =document.getElementById("tongdiem");
					hhh.innerHTML=sumscore;	
			}
			function sai()
			{
					alert("bạn trả lời sai");
					myFunction();
					sumscore=0;
					var hhh =document.getElementById("tongdiem");
					hhh.innerHTML=sumscore;	
			}
			function btnDung(){				
				var kq = n;
				if (kq==score.innerHTML) {
					dung();									
				}else
				{
					sai();
				}

			}
			function btnSai(){
				var kq = n;
				if (kq != score.innerHTML) {
					dung();	
				}else
				{
					sai();
				}	
			}
		function login()
		{
			var a=document.getElementById("FirstName").value;
			var b=document.getElementById("LastName").value;
			var keyname='xxx';
			localStorage.setItem(keyname,a);
			document.getElementById("FirstName").innerHTML=localStorage.getItem(keyname);

			// var name = 'FirstName';  
			// var value = localStorage.getItem(name) || $.cookie(name);  
			// var func = function() {  
			//         if (Modernizr.localstorage) {  
			//             localStorage.setItem(name, a)  
			//         } else {  
			//             $.cookie(name, a, {  
			//                 expires: 365  
			//             });  
			//         }  
			//     };  
			// if(value == null) {  
			//     introJs().start().oncomplete(func).onexit(func);  
			// };

		}