const milestonesData = JSON.parse(data).data;

// load course milestones data
function loadMilestones() {
  const milestones = document.querySelector(".milestones");
   milestones.innerHTML = `${milestonesData.map(function(milestone){
      return `
      <div class="milestones">
          <div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div onclick = "openMilestone(this , ${milestone._id})">
                <p>
                 ${milestone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              ${milestone.modules.map(function(module){
              return ` <div class="module border-b">
                <p>${module.name}</p>
              </div>`
              }).join("")}
            </div>
          </div>
        </div>`
   }).join("")}`
   

}
function openMilestone(milestoneElement , id){
   const currentElement = milestoneElement.parentNode.nextElementSibling;
   const shownPanel = document.querySelector(".show");
   const active = document.querySelector(".active");
  //  first remove active class if there are any previous clicked milestone 
   if(active && !milestoneElement.classList.contains("active")){
    active.classList.remove("active")
   }
  //  active the clicked one
   milestoneElement.classList.toggle("active");
  //  hide the previous clicked one

   if(!currentElement.classList.contains("show") && shownPanel)
    
   shownPanel.classList.remove("show");
  //  show the clicked one
   currentElement.classList.toggle("show");
   showMilestone(id);
}
function showMilestone(id){
const milestoneImage = document.querySelector(".milestoneImage");
const name = document.querySelector(".title");
const details = document.querySelector(".details");
milestoneImage.style.opacity = "0";
milestoneImage.src = milestonesData[id].image;
name.innerText = milestonesData[id].name;
details.innerText = milestonesData[id].description;
}
// image load 
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function(){
  this.style.opacity = "1";
}
loadMilestones()