const cart = [
    {
      id: 1,
      name: "Men's T-Shirt",
      category: "Male",
      price: 599,
      quantity: 1,
      size: "M",
      color: "Black",
      image: "img/ikraft-round-neck-t-shirts-ikraft-men-s-black-t-shirt-design-poker-cards-20869675090070-500x500.webp", // Replace with real image URL
    },
    {
      id: 2,
      name: "Women's Handbag",
      category: "Female",
      price: 1299,
      quantity: 1,
      material: "Leather",
      color: "Brown",
      image: "img/Ha_2ffad19b-f62c-41d8-8566-4366b19599ad.webp", // Replace with real image URL
    },
    {
      id: 3,
      name: "Men's Sneakers",
      category: "Male",
      price: 2999,
      quantity: 1,
      size: 42,
      brand: "Nike",
      color: "White",
      image: "img/men-s-sneakers-sport-shoes-for-online-selling-on-amazon-flipkart-and-meesho-500x500.webp", // Replace with real image URL
    },
    {
      id: 4,
      name: "Women's Dress",
      category: "Female",
      price: 1999,
      quantity: 1,
      size: "L",
      color: "Red",
      material: "Cotton",
      image: "img/pri_175_p-1709227110.avif", // Replace with real image URL
    },
  ];
let curr=[]
for(let i=0;i<sessionStorage.length;i++){
    let key=sessionStorage.key(i)
    curr.push(JSON.parse(sessionStorage.getItem(key)))
}
let ting=document.getElementById('addingincart')
curr.map((curre)=>{
    let div1=document.createElement('div')
    div1.style.width="40px"
    let image=document.createElement('img')
    image.src=`${curre.url}`
    div1.append(image)
    ting.appendChild(div1)
    let div2=document.createElement("div")
    let text2=document.createElement('h1')
    text2.textContent=`${curre.name}`
    div2.append(text2)
    ting.appendChild(div2)
    let div3=document.createElement('div')
    let text3=document.createElement('h1')
    text3.textContent=`${curre.price}`
    div3.append(text3)
    ting.appendChild(div3)
    let div4=document.createElement('div')
    div4.style.display="flex"
    let text4=document.createElement('button')
    let text5=document.createElement('button')
    let text6=document.createElement('h1')
    text6.style.marginTop="10px"
    text6.innerText=`${curre.quantity}`
   text4.innerText="-"

   text4.onclick=()=>{
    if(parseInt(text4.nextSibling.innerText)>1){
   let name=curre.name
   let price=0;
   cart.map((curre)=>{
if(curre.name==name){
price=curre.price;
}
   })
text3.innerText=text3.innerText-price;
text6.innerText-=1
let updatedprice={
    id:`${curre.id}`,
    name:`${curre.name}`,
    price:parseInt(text3.innerText),
    quantity:parseInt(text6.innerText),
    url:`${curre.url}`
}
sessionStorage.setItem(curre.id,JSON.stringify(updatedprice))

   }
   else{
    sessionStorage.removeItem(curre.id)
    let t=text7.parentElement.previousElementSibling
    let r=t.previousElementSibling
    let y=r.previousElementSibling
  let u=y.previousElementSibling
  t.innerHTML=""
  r.innerHTML=""
  y.innerHTML=""
  u.innerHTML=""
text7.innerHTML=""
   }
}
   text5.onclick=()=>{
    let name=curre.name
    let price=0;
    cart.map((curre)=>{
 if(curre.name==name){
 price=curre.price;
 }
    })
 text3.innerText=parseInt(text3.innerText)+price;
 text6.innerText=parseInt(text6.innerText)+1
 let updatedprice={
    id:`${curre.id}`,
    name:`${curre.name}`,
    price:parseInt(text3.innerText),
    quantity:parseInt(text6.innerText),
    url:`${curre.url}`
}
sessionStorage.setItem(curre.id,JSON.stringify(updatedprice))
   }
   div4.append(text4)
   div4.append(text6)
   div4.append(text5)
   ting.append(div4)
   text5.innerText="+"
    let div7=document.createElement("div")
    let text7=document.createElement('button')
    text7.onclick=()=>{
      let t=text7.parentElement.previousElementSibling
      let r=t.previousElementSibling
      let y=r.previousElementSibling
      sessionupdatedelete(y.innerText)
    let u=y.previousElementSibling
    t.innerHTML=""
    r.innerHTML=""
    y.innerHTML=""
    u.innerHTML=""
  text7.innerHTML=""
        
    }
    text7.innerText="DELETE"
    text7.style.backgroundColor="red"
    div7.append(text7)
    ting.appendChild(div7)
})



const sessionupdatedelete=(name)=>{
for(let i=0;i<curr.length;i++){
    if(curr[i].name== name){
        sessionStorage.removeItem(`${curr[i].id}`)
    }
}
}

let m=document.getElementById("shops")
m.style.color="blue"
let mm=document.getElementById("shopss")
mm.style.color="blue"