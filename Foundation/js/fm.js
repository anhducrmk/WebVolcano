  		var n;
  		var score;
  		var sumscore=0;
  		var myTimeout;

  		document.getElementById("truebutton").disabled=true;
  		document.getElementById("falsebutton").disabled=true;
		function myFunction()
			{
				myTimeout=setTimeout(function(){alert("bạn đã thua vì hết thời gian");
					document.documentElement.innerHTML =document.location.href="http://localhost:8888/Foundation/indexFM.html";},5000);
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
				document.getElementById("actionbutton").disabled=true;
				document.getElementById("truebutton").disabled=false;
  				document.getElementById("falsebutton").disabled=false;
  				
  				progressBarSim(0);				
  			
			}

			function dung()
			{
					sumscore++;
					alert("Bạn trả lời đúng");					
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
				progressBarSim(0);	
				clearTimeout(myTimeout);					
				var kq = n;
				if (kq==score.innerHTML) {
					dung();									
				}else
				{
					sai();
				}

			}
			function btnSai(){
				progressBarSim(0);	
				clearTimeout(myTimeout);
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

		function progressBarSim(al) {
		 var bar = document.getElementById('progressBar');
		 var status = document.getElementById('status');
		 //status.innerHTML = al+"%";
		 bar.value = al;
		 al++;
		    var sim = setTimeout("progressBarSim("+al+")",50);
		    if(al == 100){
		     // status.innerHTML = "100%";
		      bar.value = 100;
		      clearTimeout(sim);
		      // var finalMessage = document.getElementById('finalMessage');
		      // finalMessage.innerHTML = "Process is complete";
		    }
		}
		// var amountLoaded = 0;
		// progressBarSim(amountLoaded);


