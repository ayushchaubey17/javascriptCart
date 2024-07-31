const products = {
    "Fruits & Vegetables": [
        {
            "product_id": 1,
            "product_name": "Carrot",
            "product_mrp": "45",
            "product_unit": "kg"
        },
        {
            "product_id": 2,
            "product_name": "Onion",
            "product_mrp": "35",
            "product_unit": "kg"
        },
        {
            "product_id": 3,
            "product_name": "Potato",
            "product_mrp": "25",
            "product_unit": "kg"
        },
        {
            "product_id": 4,
            "product_name": "Tomato",
            "product_mrp": "40",
            "product_unit": "kg"
        }
    ],
    "Meat": [
        {
            "product_id": 5,
            "product_name": "Chicken",
            "product_mrp": "150",
            "product_unit": "kg"
        },
        {
            "product_id": 6,
            "product_name": "Beef",
            "product_mrp": "200",
            "product_unit": "kg"
        },
        {
            "product_id": 7,
            "product_name": "Pork",
            "product_mrp": "180",
            "product_unit": "kg"
        }
    ],
    "Dairy": [
        {
            "product_id": 8,
            "product_name": "Milk",
            "product_mrp": "50",
            "product_unit": "litre"
        },
        {
            "product_id": 9,
            "product_name": "Cheese",
            "product_mrp": "250",
            "product_unit": "kg"
        },
        {
            "product_id": 10,
            "product_name": "Butter",
            "product_mrp": "120",
            "product_unit": "kg"
        }
    ],
    "Bakery": [
        {
            "product_id": 11,
            "product_name": "Bread",
            "product_mrp": "30",
            "product_unit": "piece"
        },
        {
            "product_id": 12,
            "product_name": "Cake",
            "product_mrp": "500",
            "product_unit": "kg"
        },
        {
            "product_id": 13,
            "product_name": "Croissant",
            "product_mrp": "60",
            "product_unit": "piece"
        }
    ]
};


let addProducts = (productData,parrent  )=>{

    let productCard = document.createElement("div");
    let tempDiv = document.createElement("div");

    tempDiv.classList.add('border-2')
    tempDiv.classList.add('border-sky-400')
    tempDiv.classList.add('bg-gray-600')
    tempDiv.classList.add('text-white')
    tempDiv.classList.add('p-2')
    tempDiv.classList.add('rounded-md')
    tempDiv.classList.add('w-5/12')
    // tempDiv.classList.add('sm:w-fit')
    
    tempDiv.classList.add('mx-auto')
    tempDiv.classList.add('text-center')
    
    


    let proName = document.createElement("div");
    proName.innerText = productData["product_name"];


    let proPrice = document.createElement("div");
    proName.classList.add("font-bold");
    proPrice.classList.add("font-emibold");
    proPrice.innerText = '₹'+ productData["product_mrp"]+'/'+productData["product_unit"];

    tempDiv.append(proName);
    tempDiv.append(proPrice);


    let buyPro = document.createElement("div");
    let buy = document.createElement("button");
    buy.innerHTML = "Buy";
    buy.classList.add("bg-blue-100");
    buy.classList.add("py-2");
    buy.classList.add("px-4");
    buy.classList.add("text-white");
    buy.classList.add("font-bold");
    buy.classList.add("rounded-md");
    buy.classList.add("my-2");
    buy.classList.add("bg-red-500");


    buyPro.append(buy);
    tempDiv.append(buyPro);
    parrent.append(tempDiv);


}

let creatingContainer = (cat,arr)=>{
    let eachCat = document.createElement("div");
    eachCat.classList.add("bg-neutral-200");
    eachCat.classList.add("my-4");
    eachCat.classList.add("p-2");

    let inner = document.createElement("div");
    inner.classList.add("grid");
    inner.classList.add("grid-cols-1");

    let textName = document.createElement("p");
    textName.classList.add('font-bold');
    textName.classList.add('text-3xl');
    // textName.classList.add('');

    textName.innerText = cat;
    inner.append(textName);
    arr.forEach(element => {
        
        addProducts(element,inner);
    });

    eachCat.appendChild(inner);
    document.querySelector(".product").appendChild(eachCat);

}

let categories = Object.keys(products);
console.log(categories);

for(let whichCategory of categories){
    creatingContainer(whichCategory,products[whichCategory]);
}



