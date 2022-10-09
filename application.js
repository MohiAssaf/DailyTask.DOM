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

    }

    function resetFields(e){
        e.preventDefault();

        inputs.task.value = ''
        inputs.location.value = ''
        inputs.time.value = ''
        inputs.reminders.value = ''
    }
}

dailyTask()