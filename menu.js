
var menu = [
    {
        id:1,
        title:"buttermilk",
        category:"BreackFast",
        price:15.90,
        img:"menu-item.jpg",
        desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle , hamkock freegan copper"
        
    },

    {
        id:2,
        title:"dinner duble",
        category:"Lunch",
        price:13.90,
        img:"dinner.jpg",
        desc:"vaporware iphone numblecore svage raw denie slow-carb leggings gochujang helvetica"
        
    },
    {
        id:3,
        title:"country delight",
        category:"Shakes",
        price:20.90,
        img:"country.jpg",
        desc:"Our Management and Personnel endeavor to offer you the finest in food with prompt and courteous service in a cheerful atmosphere and pleasant surroundings. Sometimes in the rush of business life, we fail to say THANKS loud enough"
        
    },
    {
        id:4,
        title:"Godzila Milkshake",
        category:"Shakes",
        price:6.99,
        img:"godzila-milk.jpg",
        desc:"moon street both in food with prompt and courteous service in a cheerful atmosphere and pleasant surroundings. Sometimes in the rush of business life, we fail to say THANKS loud enough"
        
    },
    {
        id:5,
        title:"bacon-OverFlow",
        category:"BreackFast",
        price:8.99,
        img:"bacon.jpg",
        desc:"moon street both in food with prompt and courteous service in a cheerful atmosphere and pleasant surroundings. Sometimes in the rush of business life, we fail to say THANKS loud enough"
        
    },
  
    {
        id:6,
        title:"tost",
        category:"BreackFast",
        price:10.99,
        img:"toast.jpg",
        desc:"Toast is bread that has been browned by exposure to radiant heat. The browning is the result of a Maillard reaction, altering the flavor of the bread and making it firmer so that it is easier to spread toppings on it. Toasting is a common method of making atmosphere and pleasant surroundings. Sometimes in the rush of business life, we fail to say THANKS loud enough"
        
    },
    {
        id:7,
        title:"steak",
        category:"Lunch",
        price:10.99,
        img:"steak.jpg",
        desc:" things to know about steak before you get started grilling, searing or ordering one."
        
    },
]

const sectionCenter = document.querySelector(".section-center");
const FilterBtns = document.querySelectorAll(".filter-btn")

window.addEventListener("DOMContentLoaded", function(){
    dusplayMenuItems(menu)
   
})

FilterBtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem){
        // console.log(menuItem.category);
        if(menuItem.category === category){
            return menuItem
        }
        
    })
    // console.log(menuCategory);
    if(category === 'all'){
        dusplayMenuItems(menu)
    }
    else{
        dusplayMenuItems(menuCategory)
    }
    })
})



function dusplayMenuItems(menuItems){
    let AddMenu = menuItems.map(function(item){
        return `
        <article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}"> 
        <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </header>
       <p class="item-text">${item.desc}</p>
    </div>
    </article>
        `
    })

    AddMenu = AddMenu.join("")
    sectionCenter.innerHTML = AddMenu

}
 