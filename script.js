const goals = []

const goalOutput = document.getElementById('goal-output')

function updateGoal(goal,index){
  const goalItem = document.createElement('li');
  goalItem.innerHTML = `<strong>Goal:</strong> ${goal.goal} <br> <strong>Deadline:</strong> ${goal.deadline}`;

  if(goal.completed){
    goalItem.classList.add('crossed-off')
  }
  
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox';
  checkbox.checked = goal.completed;

  function checkOffGoal(){
    goals[index].completed = this.checked
    updateGoalsOnPage()
  }

  checkbox.addEventListener('change', checkOffGoal)

  goalItem.prepend(checkbox)

  function deleteSelectedGoal(){
    console.log("deleteSelectedGoal")
    goals.splice(index, 1);
    console.log("goals", goals)
    updateGoalsOnPage();
  }

  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete'
  deleteButton.addEventListener('click', deleteSelectedGoal)

  goalItem.append(deleteButton)
  console.log(goalItem)
  goalOutput.appendChild(goalItem)
}

function updateGoalsOnPage(){
  goalOutput.innerHTML = '' //clear goal list
  goals.forEach(updateGoal)
}

function addGoal(e){
  e.preventDefault()

  const goal = document.getElementById('goal').value
  const deadline = document.getElementById('deadline').value

  const goalObject = {
    goal: goal,
    deadline: deadline,
    completed: false
  }

  goals.push(goalObject);
  console.log("goals after addGoal: ", goals)
  updateGoalsOnPage()
}

document.getElementById('goal-form').addEventListener('submit', addGoal);
