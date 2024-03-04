function check(num){
    let a=false;
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
        {
            a=false;
            break;
        }
        else{
            a=true;
        }
        
    }
    return a;
}
function Prime()
{
    var x=document.getElementById("number").value;
    var n=x
    document.getElementById("demo").innerHTML="Hello"
    if(x==0||x==1){document.getElementById("demo").innerHTML="Largest Prime less than or equal to "+n+" is 0";}
    else if(x==2){document.getElementById("demo").innerHTML="Largest Prime less than or equal to "+n+" is 2";}
    else if(x<0){document.getElementById("demo").innerHTML="Largest Prime less than or equal to "+n+" is 0";}
    else{
    for(let i=x;i>=2;i--){
       let y=check(i)
        if(y){
            document.getElementById("demo").innerHTML="Largest Prime less than or equal to "+n+" is "+i;
            break;
        }
    }}
    
}