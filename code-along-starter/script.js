//First we need to get the data the user inputted into the form
const goalForm = document.getElementById('goal-form')

goalForm.addEventListener('submit', addGoal);

const goals = [] //where we'll store our goals

//Next we want to add that goal to our goals array
function addGoalToGoals(e){
  e.preventDefault()
  //get values from input elements
  
  //add those values (as a new goal object) to our array
  //update our ui to show all the goals in the array
  updateGoalsOnPage();
}

//next create our function to update our ui
function updateGoalsOnPage(){
  //clear goal list
  
  //loop through goals array and add each goal to the page
  goals.forEach(addGoalToPage)
}

//Adding each goal to the page as a ui element
function addGoalToPage(goal,index){
  //Select the area on the page that will hold our goals
  const goalOutput = document.getElementById('goal-output') //"My Goals" area'

  //create HTML element for goal
  //add it to the page in the "My Goals Area"
}

function createGoalItem(goal,index){
  //create HTML list item element with all the child elements shown in the example
}

//create checkbox to add to goal list item
function createCheckbox(goal, index){
}

//create delete button to add to goal list item
function createDeleteButton(index){

}








