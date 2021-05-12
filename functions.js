            function addTask () {
                var input = document.getElementById("input");
                // get current text from input field
                var newTask = input.value;
                // only add new item to list if some text was entered
                if (newTask != "") {
                // create new HTML list item
                    var item = document.createElement("li");
                    // add HTML for buttons and new task text
                    // Note, need to use '' because of "" in HTML
                    item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + '<input type="button" class="important" onclick="important(this.parentNode)" value="!" />' + newTask;

                    // add new item as part of existing list
                    document.getElementById("tasks").appendChild(item);

                    /* Step 4 below here */
                    input.value = "";
                    input.placeholder="enter task...";
                }
            }

            // change styling used for given item
            function markDone (item) {
                item.className = 'finished';
            }

            /* Step 7 below here */
            function remove (item) {
            // remove item completely from document
                if (item.className == 'finished') {
                    item.remove();
                }

            }

            /* Step 11 below here */
            function doAbout() {

                divabout.innerHTML = 'Below the add botton, write down the tasks you need to do, and click the add botton, you have created a new task waiting to finish. After completing these tasks, click the tick button, then click the cross button, now you have canceled the task. Notice: you need to firstly click the tick button, then the cross button, otherwise, you cannot clear the task. You can click the exclamation button, so that the task gets blue, which will mention you that this task is very important';
            }

            /* Step 14 below here */
            function clearAbout() {
                divabout.innerHTML = '';

            }


            function important(item) {
                item.className = 'important';
            }
