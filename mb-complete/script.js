let goals = []; // Array to store goals

// Functionality for adding goals
document.getElementById('goal-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form input values
  const goal = document.getElementById('goal').value;
  const deadline = document.getElementById('deadline').value;

  // Add goal to the goals array
  goals.push({ goal: goal, deadline: deadline, completed: false });

  // Update the goal list and progress bar
  updateGoals();
  updateProgress();

  // Clear form inputs
  document.getElementById('goal-form').reset();
});

// Update the list of goals
function updateGoals() {
  const goalOutput = document.getElementById('goal-output');
  goalOutput.innerHTML = ''; // Clear the current goal list

  goals.forEach((goal, index) => {
    

    // Add class to indicate if the goal is completed
    if (goal.completed) {
      goalItem.classList.add('crossed-off');
    }

    // Create a checkbox to mark the goal as completed
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = goal.completed;
    checkbox.addEventListener('change', function() {
      goals[index].completed = this.checked;
      updateGoals();
      updateProgress();
    });

    goalItem.prepend(checkbox);

    // Add delete button to remove goal
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      goals.splice(index, 1);
      updateGoals();
      updateProgress();
    });

    goalItem.appendChild(deleteButton);
    goalOutput.appendChild(goalItem);
  });
}

// Update the progress bar based on completed goals
function updateProgress() {
  const completedGoals = goals.filter(goal => goal.completed).length;
  const totalGoals = goals.length;
  const progressPercentage = totalGoals === 0 ? 0 : Math.round((completedGoals / totalGoals) * 100);

  // Update the progress bar width and percentage text
  document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
  document.getElementById('progress-percentage').textContent = `${progressPercentage}% Complete`;
}

// Functionality for submitting reflections
document.getElementById('reflection-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get reflection input
  const reflection = document.getElementById('reflection').value;

  // Display reflection
  const reflectionOutput = document.createElement('p');
  reflectionOutput.textContent = reflection;
  
  // Append to the reflection output
  document.getElementById('reflection-output').appendChild(reflectionOutput);

  // Clear reflection form
  document.getElementById('reflection-form').reset();
});
