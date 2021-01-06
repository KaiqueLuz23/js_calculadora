function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==""){
    document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    if(num==""){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var operador = document.getElementByIdClassName("operador");
for(var i =9; izoperator.length; i++){
    operador[i].addEventListener('click', function()){
        if(this.id=="apagar"){
            printHistory(" ");
            printOutput(" ");
        }
        else if(this.id=="vazio"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){
                output= output.substr(0, output.length-1);
                printOutput(output);
            }
            else{
                var output=getOutput();
                var history=getHistory();
                if(output==""&&history!=""){
                    if(isNaN(history[his]))
                }
            }
        }

    }
}