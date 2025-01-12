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

const malecart=[
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
    id: 1,
    name: "Men's T-Shirt",
    category: "Male",
    price: 599,
    quantity: 1,
    size: "M",
    color: "Black",
    image: "img/ikraft-round-neck-t-shirts-ikraft-men-s-black-t-shirt-design-poker-cards-20869675090070-500x500.webp", // Replace with real image URL
  }
]
const femalecart=[
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
    id: 4,
    name: "Women's Dress",
    category: "Female",
    price: 1999,
    quantity: 1,
    size: "L",
    color: "Red",
    material: "Cotton",
    image: "img/pri_175_p-1709227110.avif", // Replace with real image URL
  }
]
  let q=document.getElementById('tip')
  cart.map((curr)=>{
    let qo=document.createElement('div')
    let names=document.createElement('h1')
    names.textContent=`${curr.name}`
    qo.style.display="flex" 
    qo.style="justify-center"
    qo.style.alignItems="center"
    qo.style.textAlign="center"
    qo.style.border = "2px solid white";
    qo.style.padding = "20px"; // Add some padding
    qo.style.margin = "10px";
    qo.style.border="2px solid white"
 let er=document.createElement('img')
 er.src=`${curr.image}`
 qo.onmouseenter = () => {
  qo.style.transform = "scale(1.05)"; // Slightly enlarge on hover
  qo.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
};
qo.onmouseleave = () => {
  qo.style.transform = "scale(1)";
  qo.style.boxShadow = "none";
};
qo.append(er)
qo.append(names)
let text3=document.createElement('h3');
text3.textContent=` price:${curr.price}`
let text4=document.createElement('button')
text4.id=`addtocart-${curr.id}`
text4.onclick=()=>{
let t=text4.parentElement
t=t.firstChild
let imageurl=t.src
t=t.nextElementSibling
let name=t.textContent
t=t.nextElementSibling
let price=t.textContent
t=t.nextElementSibling
let howmuch=t.textContent
let number=""
for(let i=0;i<howmuch.length;i++){
  if(howmuch[i]>='a'&& howmuch[i]<='z' || howmuch[i]==':'){
    continue
  }
  else{
number+=howmuch[i];
  }
}

addtocart(text4.id,imageurl,name,price,number)

}
let quan=document.createElement('h3')
quan.textContent=`quantity:${curr.quantity}`
text4.textContent="ADD TO CART"
text4.style.color="red"
text4.style.backgroundColor="yellow"
qo.append(text3)
qo.append(quan);
qo.append(text4)
 q.appendChild(qo)
  })

// sessionStorage.clear()


let malecategory=document.getElementById('malecheck')
let femalecategory=document.getElementById('femalecheck')
let score1=0
let score2=0
malecategory.onclick=()=>{
  score1++;



if(score2%2!=0 && score1%2==0){
  q.innerHTML=""
  q.innerHTML=""
  femalecart.map((curr)=>{
    let qo=document.createElement('div')
    let names=document.createElement('h1')
    names.textContent=`${curr.name}`
    qo.style.display="flex" 
    qo.style="justify-center"
    qo.style.alignItems="center"
    qo.style.textAlign="center"
    qo.style.border = "2px solid white";
    qo.style.padding = "20px"; // Add some padding
    qo.style.margin = "10px";
    qo.style.border="2px solid white"
 let er=document.createElement('img')
 er.src=`${curr.image}`
 qo.onmouseenter = () => {
  qo.style.transform = "scale(1.05)"; // Slightly enlarge on hover
  qo.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
};
qo.onmouseleave = () => {
  qo.style.transform = "scale(1)";
  qo.style.boxShadow = "none";
};
qo.append(er)
qo.append(names)
let text3=document.createElement('h3');
text3.textContent=` price:${curr.price}`
let text4=document.createElement('button')
text4.id=`addtocart-${curr.id}`
text4.onclick=()=>{
let t=text4.parentElement
t=t.firstChild
let imageurl=t.src
t=t.nextElementSibling
let name=t.textContent
t=t.nextElementSibling
let price=t.textContent
t=t.nextElementSibling
let howmuch=t.textContent
let number=""
for(let i=0;i<howmuch.length;i++){
  if(howmuch[i]>='a'&& howmuch[i]<='z' || howmuch[i]==':'){
    continue
  }
  else{
number+=howmuch[i];
  }
}

addtocart(text4.id,imageurl,name,price,number)

}
let quan=document.createElement('h3')
quan.textContent=`quantity:${curr.quantity}`
text4.textContent="ADD TO CART"
text4.style.color="red"
text4.style.backgroundColor="yellow"
qo.append(text3)
qo.append(quan);
qo.append(text4)
 q.appendChild(qo)
  })
}


  if(score1%2!=0  && score2%2!=0 || (score1%2==0 && score2%2==0)){
    q.innerHTML=""
    cart.map((curr)=>{
      let qo=document.createElement('div')
      let names=document.createElement('h1')
      names.textContent=`${curr.name}`
      qo.style.display="flex" 
      qo.style="justify-center"
      qo.style.alignItems="center"
      qo.style.textAlign="center"
      qo.style.padding = "20px"; // Add some padding
      qo.style.margin = "10px";
      qo.style.border="2px solid white"
   let er=document.createElement('img')
   er.src=`${curr.image}`
   qo.onmouseenter = () => {
    qo.style.transform = "scale(1.05)"; // Slightly enlarge on hover
    qo.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  };
  qo.onmouseleave = () => {
    qo.style.transform = "scale(1)";
    qo.style.boxShadow = "none";
  };
  qo.append(er)
  qo.append(names)
  let text3=document.createElement('h3');
  text3.textContent=` price:${curr.price}`
  let text4=document.createElement('button')
  text4.id=`addtocart-${curr.id}`
  text4.onclick=()=>{
  let t=text4.parentElement
  t=t.firstChild
  let imageurl=t.src
  t=t.nextElementSibling
  let name=t.textContent
  t=t.nextElementSibling
  let price=t.textContent
  t=t.nextElementSibling
  let howmuch=t.textContent
  let number=""
  for(let i=0;i<howmuch.length;i++){
    if(howmuch[i]>='a'&& howmuch[i]<='z' || howmuch[i]==':'){
      continue
    }
    else{
  number+=howmuch[i];
    }
  }
  
  addtocart(text4.id,imageurl,name,price,number)
  
  }
  let quan=document.createElement('h3')
  quan.textContent=`quantity:${curr.quantity}`
  text4.textContent="ADD TO CART"
  text4.style.color="red"
  text4.style.backgroundColor="yellow"
  qo.append(text3)
  qo.append(quan);
  qo.append(text4)
   q.appendChild(qo)
    })
  }




  if(score1%2!=0 && score2%2==0){
    q.innerHTML=""
    malecart.map((curr)=>{
      let qo=document.createElement('div')
      let names=document.createElement('h1')
      names.textContent=`${curr.name}`
      qo.style.display="flex" 
      qo.style="justify-center"
      qo.style.alignItems="center"
      qo.style.textAlign="center"
      qo.style.border = "2px solid white";
      qo.style.padding = "20px"; // Add some padding
      qo.style.margin = "10px";
      qo.style.border="2px solid white"
   let er=document.createElement('img')
   er.src=`${curr.image}`
   qo.onmouseenter = () => {
    qo.style.transform = "scale(1.05)"; // Slightly enlarge on hover
    qo.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  };
  qo.onmouseleave = () => {
    qo.style.transform = "scale(1)";
    qo.style.boxShadow = "none";
  };
  qo.append(er)
  qo.append(names)
  let text3=document.createElement('h3');
  text3.textContent=` price:${curr.price}`
  let text4=document.createElement('button')
  text4.id=`addtocart-${curr.id}`
  text4.onclick=()=>{
  let t=text4.parentElement
  t=t.firstChild
  let imageurl=t.src
  t=t.nextElementSibling
  let name=t.textContent
  t=t.nextElementSibling
  let price=t.textContent
  t=t.nextElementSibling
  let howmuch=t.textContent
  let number=""
  for(let i=0;i<howmuch.length;i++){
    if(howmuch[i]>='a'&& howmuch[i]<='z' || howmuch[i]==':'){
      continue
    }
    else{
  number+=howmuch[i];
    }
  }
  
  addtocart(text4.id,imageurl,name,price,number)
  
  }
  let quan=document.createElement('h3')
  quan.textContent=`quantity:${curr.quantity}`
  text4.textContent="ADD TO CART"
  text4.style.color="red"
  text4.style.backgroundColor="yellow"
  qo.append(text3)
  qo.append(quan);
  qo.append(text4)
   q.appendChild(qo)
    })
  
  }
}




femalecategory.onclick=()=>{
  score2++;
  
if(score1%2!=0 && score2%2==0){
    q.innerHTML=""
    malecart.map((curr)=>{
      let qo=document.createElement('div')
      let names=document.createElement('h1')
      names.textContent=`${curr.name}`
      qo.style.display="flex" 
      qo.style="justify-center"
      qo.style.alignItems="center"
      qo.style.textAlign="center"
      qo.style.border = "2px solid white";
      qo.style.padding = "20px"; // Add some padding
      qo.style.margin = "10px";
      qo.style.border="2px solid white"
   let er=document.createElement('img')
   er.src=`${curr.image}`
   qo.onmouseenter = () => {
    qo.style.transform = "scale(1.05)"; // Slightly enlarge on hover
    qo.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  };
  qo.onmouseleave = () => {
    qo.style.transform = "scale(1)";
    qo.style.boxShadow = "none";
  };
  qo.append(er)
  qo.append(names)
  let text3=document.createElement('h3');
  text3.textContent=` price:${curr.price}`
  let text4=document.createElement('button')
  text4.id=`addtocart-${curr.id}`
  text4.onclick=()=>{
  let t=text4.parentElement
  t=t.firstChild
  let imageurl=t.src
  t=t.nextElementSibling
  let name=t.textContent
  t=t.nextElementSibling
  let price=t.textContent
  t=t.nextElementSibling
  let howmuch=t.textContent
  let number=""
  for(let i=0;i<howmuch.length;i++){
    if(howmuch[i]>='a'&& howmuch[i]<='z' || howmuch[i]==':'){
      continue
    }
    else{
  number+=howmuch[i];
    }
  }
  
  addtocart(text4.id,imageurl,name,price,number)
  
  }
  let quan=document.createElement('h3')
  quan.textContent=`quantity:${curr.quantity}`
  text4.textContent="ADD TO CART"
  text4.style.color="red"
  text4.style.backgroundColor="yellow"
  qo.append(text3)
  qo.append(quan);
  qo.append(text4)
   q.appendChild(qo)
    })
  
  }




















  if(score2%2!=0 && score1%2==0){
    q.innerHTML=""
    femalecart.map((curr)=>{
      let qo=document.createElement('div')
      let names=document.createElement('h1')
      names.textContent=`${curr.name}`
      qo.style.display="flex" 
      qo.style="justify-center"
      qo.style.alignItems="center"
      qo.style.textAlign="center"
      qo.style.border = "2px solid white";
      qo.style.padding = "20px"; // Add some padding
      qo.style.margin = "10px";
      qo.style.border="2px solid white"
   let er=document.createElement('img')
   er.src=`${curr.image}`
   qo.onmouseenter = () => {
    qo.style.transform = "scale(1.05)"; // Slightly enlarge on hover
    qo.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  };
  qo.onmouseleave = () => {
    qo.style.transform = "scale(1)";
    qo.style.boxShadow = "none";
  };
  qo.append(er)
  qo.append(names)
  let text3=document.createElement('h3');
  text3.textContent=` price:${curr.price}`
  let text4=document.createElement('button')
  text4.id=`addtocart-${curr.id}`
  text4.onclick=()=>{
  let t=text4.parentElement
  t=t.firstChild
  let imageurl=t.src
  t=t.nextElementSibling
  let name=t.textContent
  t=t.nextElementSibling
  let price=t.textContent
  t=t.nextElementSibling
  let howmuch=t.textContent
  let number=""
  for(let i=0;i<howmuch.length;i++){
    if(howmuch[i]>='a'&& howmuch[i]<='z' || howmuch[i]==':'){
      continue
    }
    else{
  number+=howmuch[i];
    }
  }
  
  addtocart(text4.id,imageurl,name,price,number)
  
  }
  let quan=document.createElement('h3')
  quan.textContent=`quantity:${curr.quantity}`
  text4.textContent="ADD TO CART"
  text4.style.color="red"
  text4.style.backgroundColor="yellow"
  qo.append(text3)
  qo.append(quan);
  qo.append(text4)
   q.appendChild(qo)
    })
  
  }







  if(score1%2!=0 && score2%2!=0 || (score1%2==0 && score2%2==0)){
    q.innerHTML=""
    cart.map((curr)=>{
      let qo=document.createElement('div')
      let names=document.createElement('h1')
      names.textContent=`${curr.name}`
      qo.style.display="flex" 
      qo.style="justify-center"
      qo.style.alignItems="center"
      qo.style.textAlign="center"
      qo.style.border = "2px solid white";
      qo.style.padding = "20px"; // Add some padding
      qo.style.margin = "10px";
      qo.style.border="2px solid white"
   let er=document.createElement('img')
   er.src=`${curr.image}`
   qo.onmouseenter = () => {
    qo.style.transform = "scale(1.05)"; // Slightly enlarge on hover
    qo.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  };
  qo.onmouseleave = () => {
    qo.style.transform = "scale(1)";
    qo.style.boxShadow = "none";
  };
  qo.append(er)
  qo.append(names)
  let text3=document.createElement('h3');
  text3.textContent=` price:${curr.price}`
  let text4=document.createElement('button')
  text4.id=`addtocart-${curr.id}`
  text4.onclick=()=>{
  let t=text4.parentElement
  t=t.firstChild
  let imageurl=t.src
  t=t.nextElementSibling
  let name=t.textContent
  t=t.nextElementSibling
  let price=t.textContent
  t=t.nextElementSibling
  let howmuch=t.textContent
  let number=""
  for(let i=0;i<howmuch.length;i++){
    if(howmuch[i]>='a'&& howmuch[i]<='z' || howmuch[i]==':'){
      continue
    }
    else{
  number+=howmuch[i];
    }
  }
  
  addtocart(text4.id,imageurl,name,price,number)
  
  }
  let quan=document.createElement('h3')
  quan.textContent=`quantity:${curr.quantity}`
  text4.textContent="ADD TO CART"
  text4.style.color="red"
  text4.style.backgroundColor="yellow"
  qo.append(text3)
  qo.append(quan);
  qo.append(text4)
   q.appendChild(qo)
    })
  
  }
}




















const addtocart = (id, url, name, price, quantity) => {
  let cart = [];
  quantity=parseInt(quantity)
  takingprice=""
  for(let i=0;i<price.length;i++){
    if(price[i]>='a'&& price[i]<='z' ||(price[i]==":")){
      continue;
    }
    else{
      takingprice+=price[i]
    }
  }
  for (let i = 0; i < sessionStorage.length; i++) {
    let key = sessionStorage.key(i);
    let item = JSON.parse(sessionStorage.getItem(key)); 
    cart.push(item);
  }
  let existing = cart.find((curr) => curr.id == id);

  if (existing) {
    existing.quantity = existing.quantity +quantity;
    existing.price=existing.quantity*parseInt(takingprice);
    sessionStorage.setItem(id, JSON.stringify(existing)); 
    alert("item is already in cart")
  }
  else{
    const item = { id, url, name,
      price:parseInt(takingprice),quantity };
    sessionStorage.setItem(id, JSON.stringify(item)); 
    alert("new item added to cart")
  }
  
};

let m=document.getElementById("shops")
m.style.color="blue"
let mm=document.getElementById("shopss")
mm.style.color="blue"



