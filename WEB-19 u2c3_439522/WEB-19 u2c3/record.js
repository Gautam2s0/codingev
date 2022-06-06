let p=document.querySelector('form').addEventListener("submit",myfunction);
function myfunction(event){
    event.preventDefault()
    let tr=document.createElement("tr")
    
    let td1=document.createElement("td")
    let name = document.querySelector('#name').value;
    td1.innerText=name;
    let td2=document.createElement("td")
    let empId=document.querySelector('#employeeID').value;
    td2.innerText=empId
    let td3=document.createElement("td")
    let dep=document.querySelector('#department').value;
    td3.innerText=dep
    let td4=document.createElement("td")
    let exp = document.querySelector('#exp').value;
    td4.innerText=exp
    let td5=document.createElement("td")
    let email = document.querySelector('#email').value;
    td5.innerText=email
    let td6=document.createElement("td")
    let mob = document.querySelector('#mbl').value;
    td6.innerText=mob
    let td7=document.createElement("td")
    let Nexp=Number(exp)
    if(Nexp>5){
        td7.innerText="Senior"
    }
    else if(Nexp>=2 && Nexp<=5){
        td7.innerText="Junior"
    }if(exp==""){
        td7.innerText=""
    }
    else if(Nexp<2){
        td7.innerText="Fresher"
    }
    let td8=document.createElement("td")
    td8.innerText="DELETE"
    let td9=document.createElement("td")
    td8.addEventListener("click",derow);
    function derow(event){
        event.target.parentNode.remove("tr")
    }

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    let body=document.querySelector('tbody');
    body.append(tr)
}
