  		var n;
  		var score;
  		var sumscore=0;
  		var myTimeout;
  		// disable button  true and false when start game
  		document.getElementById("truebutton").disabled=true;
  		document.getElementById("falsebutton").disabled=true;
  		// Random function
		function myFunction()
			{
				// set time for questions
			myTimeout=setTimeout(function(){alert("bạn đã thua vì hết thời gian");
				//Refresh the website
			document.documentElement.innerHTML =document.location.href="file:///G:/xampp/htdocs/Fm/Foundation/indexFM.html";},5000);
				//random number
			var x=document.getElementById("demox")
			x.innerHTML=Math.floor((Math.random()*10)+1);
			var y=document.getElementById("demoy")
			y.innerHTML=Math.floor((Math.random()*10)+1);
				//result		  			
			n= parseInt(x.innerHTML) + parseInt(y.innerHTML);
			var m;
			m=Math.floor((Math.random()*6)-3);
			var g;
			g=parseInt(n)+parseInt(m)			  	
			var myArray = [n,g];
			score =document.getElementById("demoscore")
			score.innerHTML = myArray[Math.floor(Math.random() * myArray.length)];
			//enable buttons			
			document.getElementById("actionbutton").disabled=true;
			document.getElementById("truebutton").disabled=false;
  			document.getElementById("falsebutton").disabled=false;
  			// timeline status
  			progressBarSim(0);	
			}
			//retrive result
			function tick()
			{
					alert("Bạn trả lời đúng");
					sumscore++;
					myFunction();
					var hhh =document.getElementById("totalScore");
					hhh.innerHTML=sumscore;	
			}
			function cross()
			{
					alert("bạn trả lời sai");
					myFunction();
					sumscore=0;
					var hhh =document.getElementById("totalScore");
					hhh.innerHTML=sumscore;	
			}


			//click events
			function btntick(){

				progressBarSim(0);
				// reset time for question	
				clearTimeout(myTimeout);			
				var kq = n;
				if (kq==score.innerHTML) {
					tick();									
				}else
				{
					cross();
				}

			}
			function btncross(){
				progressBarSim(0);	
				clearTimeout(myTimeout);
				var kq = n;
				if (kq != score.innerHTML) {
					tick();	
				}else
				{
					cross();
				}	
			}
			// local storage for textbox
		function login()
		{
			localStorage.xxx=document.getElementById("FirstName").value;
			document.getElementById("FirstName").innerHTML=localStorage.xxx;
		}
		// Function Progress bar
		function progressBarSim(al) {
			 var bar = document.getElementById('progressBar');			 
			 bar.value = al;
			 al++;
			    var sim = setTimeout("progressBarSim("+al+")",50);
			    if(al == 100){
			      bar.value = 100;
			      clearTimeout(sim);
		    }
		}