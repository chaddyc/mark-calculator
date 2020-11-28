document.addEventListener("load",createEvents,false);

var assign1=document.getElementById("assign1");
var assign2=document.getElementById("assign2");
var assign3=document.getElementById("assign3");
var assign4=document.getElementById("assign4");
var examMark=document.getElementById("examMark");
var yearkMark=document.getElementById("yearMark");


var yMark=0;
var s1W=0.16;
var s2W=0.17;
var s3W=0.17;
var s4W=0.5;
var examW=0.7;
var yW=0.3;

function compute(){
    var s1=assign1.value==""?0:parseInt(assign1.value);
    var s2=assign2.value==""?0:parseInt(assign2.value);
    var s3=assign3.value==""?0:parseInt(assign3.value);;
    var s4=assign4.value==""?0:parseInt(assign4.value);

    var sum=0;

    var exam=examMark.value==""?0:parseInt(examMark.value);

    sum=s1*s1W+s2*s2W+s3*s3W+s4*s4W; //computer year mark

     var requiredExamToPass=checkPass(sum * yW);

    yearkMark.innerHTML="Your Year Mark : <em class='emphasis'>"+ sum.toFixed(0) +"%</em>"; //display final mark
    

    var finalMark=exam*examW + sum * yW; //computer final mark
     //your final mark
    //var finalRequiredToPass=finalPercentage(requiredExamToPass,sum*yW);
     //to pass you need to obtain 50% in the exam.
    document.getElementById("requiredMark").innerHTML= "Based on Year Mark to pass you need to obtain : <em class='emphasis'>"+requiredExamToPass.toFixed(0)+"%</em> in the final exam.";
    
    //check for distinction
    var distcheck=distinctionCheck(sum * yW);
     
     if(distcheck>100){
         document.getElementById("distinictionMark").innerHTML= "Sorry you can't get a distinction based on your year mark of <em class='emphasis'>"+sum.toFixed(0) +"%</em>";
     }
    else{
    //to pass you need a distinction you need x% in the exam.
    document.getElementById("distinictionMark").innerHTML= "To obtain a distinction aim for <em class='emphasis'>"+distinctionCheck(sum * yW).toFixed(0)+"% </em>in the final exam.";
    }

    //after final mark after actual exam mark is entered
     document.getElementById("finalMark").innerHTML= "["+sum.toFixed(0)+" * 0.3] + ["+exam.toFixed(0)+" * 0.7] = Final Mark is "+finalMark.toFixed(0)+"%";
     //after final mark after actual exam mark is entered
     document.getElementById("decision").innerHTML= checkDesision(finalMark,exam);

}
function checkPass(yearMark){

  var i=(50 - yearMark)

  var percentage=(i/70) *100;

    if(percentage<=40){
        return 40;
    }
  return percentage;
}
function distinctionCheck(yearMark){
  var i=75 - yearMark;
 var percentage=(i/70) *100;
    if(percentage>=45){
        return percentage;
    }
    else
        return 0;
}
function checkDesision(finalMark, examMark){
    var msg="";

    if(examMark<40){
        msg="Sorry you have failed the module because your exam mark is less than 40%. No supplementary";
    }
    else if(finalMark<40 && examMark>=40){
        msg="Sorry you have failed the module because your final mark is less than 50%. No supplementary";
    }
    else if(finalMark>=75){
      msg="Yes!!! You got a distinction!! "+finalMark.toFixed(0)+"%";     
    }
    else if(finalMark>=50 && examMark>40){ //pass only if the final mark is greater than 50 and exam mark is at least 40
      msg="Congratulations!!... It's a pass "+finalMark.toFixed(0)+"%";  
    }
    else if(finalMark<40 && examMark>40){

    }
    else if((finalMark<50 && finalMark>=40) && examMark>=40){
     msg="OH!! You got a SUPPLEMETARY "+finalMark.toFixed(0)+"%";  
    }
    else
        msg="";
return msg;

}
function createEvents(){
    assign1.addEventListener("change",compute,false);
    assign2.addEventListener("change",compute,false);
    assign3.addEventListener("change",compute,false);
    assign4.addEventListener("change",compute,false);
    examMark.addEventListener("change",compute,false);
}