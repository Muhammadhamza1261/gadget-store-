let selector = document.getElementById("select")
let container = document.querySelector(".cardsContainer")


let products = {
    airbuds:{
        audionic:{name:"airbuds ultre 1",price:1000,sold:33,rating:4.2,img:"products/airbudsultra1.jfif"},
        faster:{name:"airbuds pro 2",price:900,sold:43,rating:4.3,img:"products/airbudspro2.jfif"},
        zero:{name:"airbuds pro 3",price:150,sold:50,rating:4.5,img:"products/airbudspro3.jfif"}
    },
     watches:{
        ledwatches:{name:"smart 1",price:1200,sold:13,rating:4.0,img:"products/smart1.jfif"},
        androidwatches:{name:"smart 2",price:350,sold:20,rating:3.3,img:"products/smart2.jfif"},
        applewatches:{name:"smart 3",price:1500,sold:30,rating:5.0,img:"products/smart3.jfif"}
    },
    powerbanks:{
        zeropowerbank:{name:"zeropowerbank",price:90,sold:150,rating:4.1,img:"products/powerbank1.jfif"},
        fasterpowerbank:{name:"fasterpowerbank",price:350,sold:20,rating:5.0,img:"products/powerbank2.jfif"},
        localpowerbank:{name:"localpowerbank",price:50,sold:101,rating:3.7,img:"products/powerbank3.jfif"}
    },
   
}

function renderProducts(data) {
  container.innerHTML = "";

  for (let category in data) {
    for (let key in data[category]) {
      let product = data[category][key];

      container.innerHTML += `
        <div class="product">
          <div class="imgSec">
            <img src="${product.img}" alt="${product.name}">
          </div>

          <div class="Section">
            <div class="name">
              <span class="text">${product.name}</span>
            </div>

            <div class="amount">$ ${product.price}</div>

            <div class="ratingsec">
              <div class="sold">Sold: ${product.sold} items</div>
              <div class="rate">Rating: ${product.rating}</div>
            </div>
          </div>
        </div>
      `;
    }
  }
}

renderProducts(products);

selector.addEventListener("change",function () 
{
    let selectedValue = selector.value;

    if(selectedValue === "All")
    {
        renderProducts(products)
    }
    else
    {
        let selectCategory = 
        {
            [selectedValue]:products[selectedValue]
        }

        renderProducts(selectCategory)
    }
})


