let card = document.getElementById("card-past");


const currentDate = data.currentDate;
const arrayEvents = data.events;


function getData() {

  let pas = [];

  for (let i = 0; i < arrayEvents.length; i++) {
    let eventElement = arrayEvents[i];

    if (eventElement.date < currentDate) {
      pas.push(eventElement);
    }
  }

  let template

  for (let index = 0; index < pas.length; index++) {

    template += `

  <div class="card event__card p-2 m-5 rounded ">
  <div class="row no-gutters">
    <div class="col-sm-5">
      <img
        class="card-img shadow-sm p-3 mb-5 bg-white rounded"
        src=" ${pas[index].image} "
        alt=""
      />
    </div>
    <div class="col-sm-7">
      <div class="card-body">
        <h5 class="card-title">${pas[index].name} </h5>
        <p class="card-text">
        ${pas[index].description} 
        </p>
        <a href="./details.html?id=${ arrayEvents[index]._id}" class="btn btn-primary">Details</a>
      </div>
    </div>
  </div>
</div>
`}
  card.innerHTML = template
}

getData();