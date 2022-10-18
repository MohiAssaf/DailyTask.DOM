function dailyTask() {
    const inputs = {
        task : document.getElementById("taskName"),
        location: document.getElementById('locationName'),
        time: document.getElementById('timeNeeded'),
        reminders: document.getElementById("message")
    }

    const forms = {
        taskList: document.querySelector('ul#task'),
        completedList: document.querySelector("ul#completed-tasks"),
        uncompletedList: document.querySelector("ul#uncompleted-tasks"),
    }

    addButton = document.querySelector("button#add")
    resetButton = document.getElementById("reset")

    addButton.addEventListener("click", addToList)
    addButton.addEventListener("click", resetFields)
    

    function addToList(e){
        e.preventDefault();

        let task = inputs.task.value;
        let location = inputs.location.value;
        let time = inputs.time.value;
        let reminders = inputs.reminders.value;

        inputs.task.value = ''
        inputs.location.value = ''
        inputs.time.value = ''
        inputs.reminders.value = '' /// after adding the task clear all fields

        
        if(task == '' || location == '' || time == '' || reminders == ''){
            return; /// if any of the fields is empty the program won't do anything
        }

        let li = document.createElement('li');

        /// innerHtml is not a good practice Ik :)
        li.innerHTML = `
        <h3>Task: <span>${task}</span></h3>
        <h4>Location: <span>${location}</span></h4>    
        <p class="timeN">Until: <span>${time}</span></p>
        <p class="reminders">Reminders: <span>${reminders}</span></p>
        <div id="list-action">
            <button type="submit" id="finished">Fininshed</button>
            <button type="submit" id="unfinished">Unfininshed</button>
        </div>`

        forms.taskList.appendChild(li)

        li.querySelector('#finished').addEventListener('click', finishedTasks)
        li.querySelector('#unfinished').addEventListener('click', unfinishedTasks)


        function finishedTasks(e){
            e.preventDefault();

            li.remove()
            let li2 = document.createElement('li')

            li2.innerHTML = 
            `
            <h2>Completed Task : <span>${task}</span></h2>
            <p class="time">Time spent: ${time} - ${new Date().toLocaleTimeString()}</p>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>
            `


            forms.completedList.appendChild(li2)
            li2.querySelectorAll('button')[0].addEventListener('click', () => {
                li2.remove()
            })

        }

        function unfinishedTasks(e){
            e.preventDefault();

            
            li.remove()

            let li3 = document.createElement('li')

            li.innerHTML = 
            `            
            <h2>Uncompleted Task : <span>${task}</span></h2>
            <p class="time">Time spent: ${time} - ${new Date().toLocaleTimeString()}</p>`
        }



    }

    function resetFields(e){
        e.preventDefault();

        inputs.task.value = ''
        inputs.location.value = ''
        inputs.time.value = ''
        inputs.reminders.value = '' /// reseting all fields button

    }
}

dailyTask()