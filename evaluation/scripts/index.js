//store the products array in localstorage as "data"
function person(n,b,p,i){
    this.name=n;
    this.brand=b;
    this.price=p;
    this.img=i;
}
let form = document.querySelector('#product_form');
form.addEventListener("submit",storedata)
let data=JSON.parse(localStorage.getItem("data")) || []
function storedata(e){
    e.preventDefault();
    let brand=form.product_brand.value;
    let name=form.product_name.value;
    let price=form.product_price.value;
    let img=form.product_image.value;
    let s1=new person(name,brand,price,img)
    data.push(s1);
    localStorage.setItem("data",JSON.stringify(data))
    
}