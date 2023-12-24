const div = document.getElementById("Animal-details");
let url = "http://localhost:3000/characters"  



function getAllAnimals() {
 fetch(url)  
    .then((res) => res.json()) 
    .then((data) => {
      console.log(data);
      
      data.forEach((characters) => {
        let span = document.createElement("span");
        span.textContent = characters.name;
        span.addEventListener("click", (e) => {
          let name = document.getElementById("name");
          name.textContent = characters.name;
          let img = document.getElementById("img");
          img.src = characters.image;
          let voteCounts = document.getElementById("count-vote");
          let votes = parseInt(characters.votes)
          voteCounts.textContent = votes
          let addVotes = document.getElementById("add-votes")
          addVotes.addEventListener("click",function(){
          voteCounts.textContent = votes++
          })
        });
        div.appendChild(span);
      });
    });
}
getAllAnimals();



let reset = document.getElementById("reset-button");
reset.addEventListener("click", (e) => {
  let totalVotes = document.getElementById("count-vote");
  totalVotes.innerHTML = 0;
});


