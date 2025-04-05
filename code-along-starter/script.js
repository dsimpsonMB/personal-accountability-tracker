const goals = [] //where we'll store our goals

//First we need to get the data the user inputted into the form
const goalForm = document.getElementById('goal-form')

goalForm.addEventListener('submit', addGoal);

function addGoal(e){
  e.preventDefault()
}

//Next we need to add that goal to the page
const goalOutput = document.getElementById('goal-output') //"My Goals" area

function addGoalToPage(goal,index){
  //create HTML element for goal
  //add it to the page in the "My Goals Area"
}

function createGoalItem(goal,index){
  //create HTML list item element with all the child elements shown in the example
}

function updateGoalsOnPage(){
  //clear goal list
  
  //loop through goals array and add each goal to the page
  goals.forEach(addGoalToPage)
}

//create checkbox to add to goal list item
function createCheckbox(goal, index){
}

//create delete button to add to goal list item
function createDeleteButton(goal, index){

}




