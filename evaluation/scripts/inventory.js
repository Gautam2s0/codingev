let data=JSON.parse(localStorage.getItem("data")) || []
displayprod()
function displayprod(){
    for(let i=0;i<data.length;i++){
        let div=document.createElement("div");
        let img=document.createElement("img")
        img.src=data[i].img;
        let name=document.createElement("p")
        name.innerText=data[i].name;
        let brand=document.createElement("p")
        brand.innerText=data[i].brand;
        let price=document.createElement("p")
        price.innerText=`Price: ${data[i].price}`;
        let btn=document.createElement("button")
        btn.innerText="Remove Product";
        btn.addEventListener("click",function(){
            removedata(i)
        })
        div.append(img,name,brand,price,btn)
        let m = document.querySelector('#products_data');
        m.append(div)
    }
}
function removedata(i){
    let newdata=data.filter(function(elem,index){
        return index!==i
    })
    displayprod(newdata)
    localStorage.setItem("data",JSON.stringify(newdata))
}
