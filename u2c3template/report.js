document.querySelector("form").addEventListener("submit",myfunctiom);
function myfunctiom(event){
    event.preventDefault();
    let image=document.querySelector('#image').value;
    let name=document.querySelector('#name').value;
    let batch=document.querySelector('#batch').value;
    let DSA=document.querySelector('#dsa').value;
    let skill=document.querySelector('#cs').value;
    let coding=document.querySelector('#coding').value;
    
    let tr=document.createElement("tr")

    

    let td1=document.createElement("td")
    let pic=document.createElement("img")
    pic.setAttribute("src",image)
    td1.append(pic)
    
    let td2=document.createElement("td")
    td2.innerText=name
    let td3=document.createElement("td")
    td3.innerText=batch
    let td4=document.createElement("td")
    td4.innerText=DSA
    let td5=document.createElement("td")
    td5.innerText=skill
    let td6=document.createElement("td")
    td6.innerText=coding
    let td7=document.createElement("td")
    let total=(+DSA)+(+skill)+(+coding)
    let percentage=(total/30)*100
    td7.innerText=percentage.toFixed(2)
    let td8=document.createElement("td")
    if(percentage<50){
        td8.innerText="Ascyng"
        td8.style.color="red"
    }
    else{
        td8.innerText="REGULAR"
    }

    let td9=document.createElement("td")
    td9.innerText="DELETE"
    td9.style.backgroundColor="red"
    td9.addEventListener("click",removedata);
    function removedata(event){
        event.target.parentNode.remove("tr");
    }

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)
    let body=document.querySelector('tbody')
    body.append(tr)
    
}