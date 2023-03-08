const currentDate = data.currentDate;
const arrayEvents = data.events;
function getData() {

    let upcoming = [];

    for (let i = 0; i < arrayEvents.length; i++) {
        let eventElement = arrayEvents[i];

        if (eventElement.date > currentDate) {
            upcoming.push(eventElement);
        }
    }

    let card = document.getElementById("card-upcoming");
    let template
    
    for (let index = 0; index < upcoming.length; index++) {
        template += `
    <div class="row p-4 justify-content-center">
        <div class="card text-center" style="width: 18rem">
            <img src="${ upcoming[index].image }">
            <div class="card-body">
                    <h5 class="">${ upcoming[index].date }</h5>
                    <p class="card-text">${ upcoming[index].category }</p>
                <div class="price d-flex justify-content-between">
                    <p class="card-text">${ upcoming[index].price }</p>
                    <a href="./details.html?id=${ arrayEvents[index]._id}" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>
    </div>
   
  `}
  card.innerHTML = template;
}

getData();