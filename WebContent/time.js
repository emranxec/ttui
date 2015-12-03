var n=0;
var radio1,radio2,textnode1,textnode2,input,input1,foo,br;

webshim.setOptions('forms-ext', {
    //replaceUI: 'auto',
    types: 'date'
});
webshim.polyfill('forms forms-ext');

$(function () {
	
    $("#btnAdd").bind("click", function () {
        var div = $("<div />");
        div.html(GetDynamicTextBox(""));
        $("#fooBar").append(div);
    });
    $("#btnGet").bind("click", function () {
        var values = "";
       
        $("input[id=time]").each(function () {
            values += $(this).val() + "\n";
        });
        alert(values);
    });
    $("body").on("click", ".remove", function () {
        $(this).closest("div").remove();
    });
});
function GetDynamicTextBox(value) {
	n+=1;
    return  'task'+'<input type="radio" value="task"  name="job' + n +' "/>'+ 
            'issue'+'<input type="radio" value="issue" name="job' + n +' "/>' + 
            '<input id="time" name = "time' + n +' " type="number" style="width:15%" placeholder="time" value = "' + value + '" />&nbsp;' +
            '<input name = "comment' + n +' " type="text" style="width:45%" placeholder="Task" value = "' + value + '" />&nbsp;' +
            '<input type="button" value="X" style="width:7%"  class="remove" />'
}

	
	function configureDropDownLists(ddl1,ddl2) {
	    var oncall = ['Weekend support', 'Public Holiday Support -on-call'];
	    var project = ['Weekend support', 'Public Holiday Support -on-call'];
	    var compoff = ['Comp-off availed'];

	    switch (ddl1.value) {
	        case 'oncall':
	            ddl2.options.length = 0;
	            for (i = 0; i < oncall.length; i++) {
	                createOption(ddl2,  oncall[i],  oncall[i]);
	            }
	            break;
	        case 'project':
	            ddl2.options.length = 0; 
	        for (i = 0; i < project.length; i++) {
	            createOption(ddl2, project[i], project[i]);
	            }
	            break;
	        case 'compoff':
	            ddl2.options.length = 0;
	            for (i = 0; i < compoff.length; i++) {
	                createOption(ddl2, compoff[i], compoff[i]);
	            }
	            break;
	            default:
	                ddl2.options.length = 0;
	            break;
	    }
	    changetextbox();
	}

	    function createOption(ddl, text, value) {
	        var opt = document.createElement('option');
	        opt.value = value;
	        opt.text = text;
	        ddl.options.add(opt);
	    }
	    
	    
	    

	    function changetextbox(){
	    	
	    		if(document.support.plan.value == 'oncall'){
	    			
	    			document.support.work.disabled=0;
	    			
	    			document.support.compoff.disabled=1;
	    			document.getElementById("btnAdd").disabled=0;
	    			
	    			
	    		}
	    		
	    		else if(document.support.plan.value == 'project'){
	    			
	    			document.support.work.disabled=0;
	    			
	    			document.support.compoff.disabled=1;
	    			document.getElementById("btnAdd").disabled=0;
	    			
	    		}
	    		
	    		else if(document.support.plan.value == 'compoff' ){
	    			
	    			document.support.compoff.disabled=0;
	    			
	    		document.support.work.disabled=1;
	    		document.getElementById("btnAdd").disabled=1;
	    		
	    		 while(fooBar.lastChild) {
		    		 
	    		        fooBar.removeChild(fooBar.lastChild)
	    		        
	    		    }


	    		 n=0;
	    		
	    		
	    		}
	    		
	    		else{
	    			document.support.work.disabled=1;
	    		document.support.compoff.disabled=1;
	    		document.getElementById("btnAdd").disabled=1;
	    		
	    	}
	    	
	    }


	    function add() {
	    	
	    	n+=1;
	    	
	    	 radio1 = document.createElement("input");
	    	    
	    	    //Assign different attributes to the element.
	    	    radio1.setAttribute("type", 'radio');
	    	    radio1.setAttribute("value", 'task');
	    	    radio1.setAttribute("name", "job" + n);
	    	    
	    	    

	    	 
	    	     foo = document.getElementById("fooBar");
	    	   ;
	    	 
	    	    //Append the element in page (in span).
	    	    foo.appendChild(radio1);
	    	     textnode1 = document.createTextNode("task");  
	    		foo.appendChild(textnode1);
	    	 

	    	 radio2 = document.createElement("input");

	    	//Assign different attributes to the element.
	    	radio2.setAttribute("type", 'radio');
	    	radio2.setAttribute("value", 'issue');
	    	radio2.setAttribute("name", "job" + n);


	    	//Append the element in page (in span).
	    	foo.appendChild(radio2);
	    	 textnode2 = document.createTextNode("issue");  
	    	foo.appendChild(textnode2);
	    	

	    	
	    	 input1 = document.createElement("input");
	    	input1.setAttribute("type", 'number');
	    	input1.setAttribute("value", '0');
	    	input1.setAttribute("name", "time" + n);
	    	input1.setAttribute("id", "time" + n);
	    	input1.setAttribute("style", 'width:6%;');
	    	input1.placeholder="hours"
	    	foo.appendChild(input1);
	    	
	    	
	    	
	    	input = document.createElement("input");
	    	input.setAttribute("type", 'text');
	    	input.setAttribute("name", "comment" + n);
	    	input.setAttribute("style", 'width:16.5%;');
	    	input.placeholder="comments"
	    	
	    	foo.appendChild(input); 

	    	
	    	 br = document.createElement("br");
	    	foo.appendChild(br);
	    	
	    	 job="job";
	    	 time="time";
	    	 comment="comment";


	    	
	    	}
	    	
	    	function remov(){

	    	 while(foo.lastChild) {
	    		 
	    		        foo.removeChild(foo.lastChild)
	    		        
	    		    }


	    		 n=0;
	    		
	    		
	    		
	    		
	    	}
	    	
// 	function time(){
		
		
// 		 time1=document.getElementById("time1").value;
// 		 time2=document.getElementById("time2").value;
// 		 time3=document.getElementById("time3").value;
// 		 time4=document.getElementById("time4").value;
// 		 time5=document.getElementById("time5").value;
// 		 time6=document.getElementById("time6").value;
// 		alert(result);
// 		var result = Number(time1) + Number(time2) +Number(time3) + Number(time4) + Number(time5) +Number(time6);
// 		document.support.work.value=result;
		
// 	}