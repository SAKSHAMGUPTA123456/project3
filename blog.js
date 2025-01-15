let cart=[
    {
        id:1,
        url:"img/Ha_2ffad19b-f62c-41d8-8566-4366b19599ad.webp",
        information:"Trending Girl Clothes",
details:"Clothes at reasonable price",
size:"shop.html",
color:"red"
    },
    {
        id:2,
url:"img/ikraft-round-neck-t-shirts-ikraft-men-s-black-t-shirt-design-poker-cards-20869675090070-500x500.webp",
information:"Trending Boys Wear",
details:"Clothes at reasonable price",
size:"shop.html",
color:"red"
    }
]
let t=document.getElementById('tip')

t.innerHTML=cart.map((curr)=>
`<div class="flex" style="border:2px solid white; height:250px" >
    <img src="${curr.url}" style="width: 120px;">
    <div>
    <h2 style="color:blue">${curr.information}</h2>
    <h3 style="color:blue">${curr.details}</h3>
    <a href="${curr.size}"><h1 style="color:green">GO TO SHOP SECTION</h1></a>
    </div>
    </div>
`)
let ts=document.getElementById('tips')

ts.innerHTML=cart.map((curr)=>
`<div class="flex" style="border:2px solid white; height:250px" >
    <img src="${curr.url}" style="width: 120px;">
    <div>
    <h2 style="color:blue">${curr.information}</h2>
    <h3 style="color:blue">${curr.details}</h3>
    <a href="${curr.size}"><h1 style="color:green">GO TO SHOP SECTION</h1></a>
    </div>
    </div>
`)
t.onmouseenter = () => {
    t.style.transform = "scale(1.05)"; // Slightly enlarge on hover
    t.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  };
  t.onmouseleave = () => {
    t.style.transform = "scale(1)";
    t.style.boxShadow = "none";
  };