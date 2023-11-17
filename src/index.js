document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // Adding a task to the list:
  const form = document.querySelector("#create-task-form");

  // Get the taskList UL:
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", function onSubmit(event) {
    
    // Prevent default behavior by submit event:
    event.preventDefault();

    // Get the value from the input field:
    const taskInput = document.querySelector("#new-task-description");
    const taskDescription = taskInput.value;

    // Get priority from the Priority field:
    const taskPriority = form.priority.value;

    if (taskDescription === '' || taskPriority === '') {
      alert("Please fill out task description and priority!");
    } else {
          // Create new list item element as newTask:
          const newTask = document.createElement("li");

          // Set newTask's innerText to equal the TaskDescription (inputted value):
          newTask.innerText = taskDescription;

          // Set text color based on priority: red, deep-yellow, green or black. Note: not using default "yellow" due to contrast:
          if (taskPriority === "P1") {
            newTask.style.color = "red";
          } else if (taskPriority === "P2") {
            newTask.style.color = "#F6BE00";
          } else if (taskPriority === "P3") {
            newTask.style.color = "green";
          } else {
            newTask.style.color = "black";
          };

          // Get the taskList UL:
          const taskList = document.querySelector("#tasks");

          // Append new list item to the UL:
          taskList.append(newTask);

          // Reset input fields to blank:
          taskInput.value = '';
          taskPriority.value = 'Priority';

          // Remove items from list:

          // Create new span for "Delete" button

          const removeButtonSpan = document.createElement("span");

              removeButtonSpan.innerText = "Remove";
              removeButtonSpan.class = "delete-button";

          // Append delete Button Span to the list items:
          newTask.append(removeButtonSpan);

          removeButtonSpan.addEventListener("click", function(event) {
          
            const getClosestLi = event.target.closest("li");
            getClosestLi.remove();
    });
    }

  })

  });
