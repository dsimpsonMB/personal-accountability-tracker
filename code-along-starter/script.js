const goals = []

const goalOutput = document.getElementById('goal-output')

function createCheckbox(goal, index){
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox';
  checkbox.checked = goal.completed;

  function checkOffGoal(){
    const goalToCheckOff = goals[index]
    goalToCheckOff.completed = this.checked
    updateGoalsOnPage()
  }

  checkbox.addEventListener('change', checkOffGoal)

  return checkbox
}

function createDeleteButton(goal, index){
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete'

  function deleteSelectedGoal(){
    goals.splice(index, 1);
    updateGoalsOnPage();
  }

  deleteButton.addEventListener('click', deleteSelectedGoal)

  return deleteButton
}

function updateGoal(goal,index){
  const goalItem = document.createElement('li');
  goalItem.innerHTML = `<strong>Goal:</strong> ${goal.goal} <br> <strong>Deadline:</strong> ${goal.deadline}`;

  if(goal.completed){
    goalItem.classList.add('crossed-off')
  }
  
  const checkbox = createGoalCheckbox(goal, index)
  goalItem.prepend(checkbox)

  const deleteButton = createDeleteButton(goal, index)
  goalItem.append(deleteButton)

  goalOutput.appendChild(goalItem)
}

function updateGoalsOnPage(){
  goalOutput.innerHTML = '' //clear goal list
  goals.forEach(updateGoal)
}

function addGoal(e){
  e.preventDefault()

  const goalElement = document.getElementById('goal')
  const goalValue = goalElement.value
  
  const deadlineElement = document.getElementById('deadline').value
  const deadlineValue = deadlineElement.value

  const goalObject = {
    goal: goalValue,
    deadline: deadlineValue,
    completed: false
  }

  goals.push(goalObject);
  updateGoalsOnPage()
}

document.getElementById('goal-form').addEventListener('submit', addGoal);
