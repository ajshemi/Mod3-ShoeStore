// Code your solution here
let shoeContainer=document.querySelector(".container")
let shoeList=document.querySelector("#shoe-list")
//console.log(shoeContainer)

fetch("http://localhost:3000/shoes")
.then(response=>response.json())
.then(arrayObj=>{arrayObj.forEach(eachObj=>convertJsonToHtml(eachObj))})


let convertJsonToHtml=function(eachObj){
    //console.log(eachObj.id)
    newLi=document.createElement('li')
    newLi.classList.add('list-group-item')
    newLi.dataset.id=eachObj.id
    newLi.textContent=eachObj.name
    shoeList.append(newLi)

    //<li class="list-group-item">Crocs Classic Clogs</li>

    /*
    <li class="list-group-item">Crocs Classic Clogs</li>
    */

    /* 
      {
    "id": 1,
    "name": "Crocs Classic Clogs",
    "company": "Crocs",
    "price": 39,
    "image": "https://media.journeys.com/images/products/1_547493_ZM.JPG",
    "description": "Most comfortable shoes!",
    "reviews": [
      {
        "id": 1,
        "content": "All my friends are jealous of me because of this shoe!"
      },
      {
        "id": 2,
        "content": "This shoe saved my love life."
      }
    ]
  }
    
    */


    /*
    <img class="card-img-top" id="shoe-image" src="https://media.journeys.com/images/products/1_547493_ZM.JPG">
    <div class="card-body">
     <h4 class="card-title" id="shoe-name">Crocs Classic Clogs</h4>
    <p class="card-text" id="shoe-description">Most Comfortable Shoes!</p>
    <p class="card-text"><small class="text-muted" id="shoe-price">39</small></p>
    <div class="container" id="form-container">
    <!-- FORM GOES HERE -->
    </div>

    </div>
    <h5 class="card-header">Reviews</h5>
    <ul class="list-group list-group-flush" id="reviews-list">
    <!-- REVIEWS GO HERE -->
    </ul>
    */
}
shoeList.addEventListener('click',function(event){
    //debugger
    //console.log(event.target)
    fetch(`http://localhost:3000/shoes/${event.target.dataset.id}`)
    .then(response=>response.json())
    .then(Obj=>{oneShoeJsonToHtml(Obj)})
})


let oneShoeJsonToHtml=function(element){
    // console.log(element)
    let mainShoe=document.querySelector("#main-shoe")
    mainShoe.innerHTML=`    <img class="card-img-top" id="shoe-image" src="${element.image}">
    <div class="card-body">
     <h4 data-id="${element.id}" class="card-title" id="shoe-name">${element.name}</h4>
    <p class="card-text" id="shoe-description">${element.description}</p>
    <p class="card-text"><small class="text-muted" id="shoe-price">${element.price}</small></p>
    <div class="container" id="form-container">
    <!-- FORM GOES HERE -->
    </div>

    </div>
    <h5 class="card-header">Reviews</h5>
    <ul class="list-group list-group-flush" id="reviews-list">
    <!-- REVIEWS GO HERE -->
    </ul>`
    // debugger
    let newFormContainer=document.querySelector("#form-container")
    let newForm=document.createElement('form')
    newForm.innerHTML=` <div class="form-group">
    <textarea class="form-control" id="review-content" rows="3"></textarea>
    <input type="submit" class="btn btn-primary"></input>
    </div>`
    newFormContainer.append(newForm)


    let reviewList=document.querySelector("#reviews-list")
    let newLi=document.createElement('li')
    newLi.classList.add("list-group-item")
    newLi.textContent=element.reviews[0].content
    reviewList.append(newLi)

//<li class="list-group-item">All my friends are jealous of me because of this shoe!</li>
    /*

```html
<form id="new-review">
  <div class="form-group">
    <textarea class="form-control" id="review-content" rows="3"></textarea>
    <input type="submit" class="btn btn-primary"></input>
  </div>
</form>
```
    */


}
