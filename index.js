// let tasks=[];
// function submitfunc() {
//     console.log('the button was clicked');
//     document.getElementById("submit").style.border="2px solid blue";
//     var a, b;
//     a = document.getElementById("task").value;
//     b = document.getElementById("date").value;
//     tasks.push([a,b]);
//     ten=document.getElementsByTagName('div');
//     console.log(ten);
  
   
//     let taskdisplay=document.getElementById("task_display");
//     taskdisplay.innerHTML = '';
//     for(let i=0;i<tasks.length;i++)
//       {
//           let task=document.createElement("div");
//           let name=document.createElement("h3");
//           let date=document.createElement("h3");
//           name.textContent="Your task: "+tasks[i][0];
//           date.textContent="Date: "+tasks[i][1];
//           task.appendChild(name);
//           task.appendChild(date);
//           taskdisplay.append(task);;
          
  
//       }
//   }
//  window.onload =function()
//  {
//      console.log('the document was loaded');

//  }
var list1=[];
var list2=[];
var list3=[];
var list4=[];
var list5=[];
var n=1;
var x=0;

function Addrow()
{
	document.getElementById('submit').style.backgroundColor='blue';
    var AddRown = document.getElementById('show');
   
			var NewRow = AddRown.insertRow(n);
            // document.getElementById("myNumber").stepUp(1);
         
			list2[x] = document.getElementById("task").value;
			list3[x] = document.getElementById("task_des").value;
			list4[x] = document.getElementById("task_time").value;
            list5[x]=document.getElementById("date").value;
			

			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
            var cel4 = NewRow.insertCell(3);
			var cel5=  NewRow.insertCell(4);
          
		
            cel1.innerHTML=  list1[n]=n;
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
			cel4.innerHTML = list4[x];
			cel5.innerHTML=  list5[x];
		
          
			n++;
			x++;
    
   
}