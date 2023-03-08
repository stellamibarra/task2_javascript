console.log(data);
let card = document.getElementById("card");
const currentDate = data.currentDate;
const arrayEvents = data.events;
function getData() {

  let template

  for (let index = 0; index < arrayEvents.length; index++) {

    template += `
    <div class="row p-4 justify-content-center">
      <div class="card text-center" style="width: 18rem">
        <img
          src="${ arrayEvents[index].image }"
          class="card-img-top mt-2"
          alt="..."
        />
          <div class="card-body">
            <h5 class="">${ arrayEvents[index].name }</h5>
            <p class="card-text">${ arrayEvents[index].description }</p>
            
            <div class="price d-flex justify-content-between">
              <p class="card-text">${ arrayEvents[index].price }</p>
              <a href="./details.html?id=${ arrayEvents[index]._id}" class="btn btn-primary">Details</a>
            </div>
          </div>
      </div>
    </div>

`}
  card.innerHTML = template;
}

getData();