//First we need to get the data the user inputted into the form
const goalForm = document.getElementById('goal-form')
goalForm.addEventListener('submit', addGoal); //listen for when the form is submitted

const goals = [] //where we'll store our goals

function addGoal(e){
  e.preventDefault() // forms by default will refresh the page

  //get values from input elements
  const goalElement = document.getElementById('goal')
  const goalValue = goalElement.value

  const goalObject = {
    goal: goalValue,
    completed: false
  }

  goals.push(goalObject); //add those values (as a new goal object) to our array

  updateGoalsOnPage() //update our ui to show all the goals in the array
}

//next create our function to update our ui
function updateGoalsOnPage(){
  const goalOutput = document.getElementById('goal-output') ////Select the area on the page that will hold our goals - "My Goals"
  goalOutput.innerHTML = '' //clear goal list
  goals.forEach(addGoalToPage) //loop through goals array and add each goal to the page
}

function addGoalToPage(goal,index){
  const goalOutput = document.getElementById('goal-output') //Select the "My Goals" section of the page

  const goalItem = createGoalItem(goal,index) //create the HTML element for the goal

  goalOutput.appendChild(goalItem) //add that HTML element to the "My Goals" section
}

//create HTML list item element with all the child elements shown in the example
function createGoalItem(goal, index){

  const goalItem = document.createElement('li');
  goalItem.innerHTML = `<strong>Goal:</strong> ${goal.goal}`

  if(goal.completed){
    goalItem.classList.add('crossed-off')
  }
  
  const checkbox = createCheckbox(goal, index)
  goalItem.prepend(checkbox)

  const deleteButton = createDeleteButton(index)
  goalItem.append(deleteButton)

  return goalItem
}

//create checkbox to add to goal list item
function createCheckbox(goal, index){
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox';
  checkbox.checked = goal.completed;

  //create function to run when checkbox is checked
  function checkOffGoal(){
    const goalToCheckOff = goals[index]
    goalToCheckOff.completed = this.checked
    updateGoalsOnPage()
  }

  checkbox.addEventListener('change', checkOffGoal)

  return checkbox
}

//create delete button to add to goal list item
function createDeleteButton(index){
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete'

  //create function to run when delete button is pressed
  function deleteSelectedGoal(){
    goals.splice(index, 1);
    updateGoalsOnPage();
  }

  //add delete function to the delete button 
  deleteButton.addEventListener('click', deleteSelectedGoal)

  return deleteButton
}






