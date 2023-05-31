const title = document.getElementById('title');
const description = document.getElementById('description'); 
const container = document.querySelector('.container');
const form = document.querySelector('form');

const tasks = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem('tasks')):[];

showAllTasks();




function showAllTasks (){
    tasks.forEach((value,index)=>{
        const div = document.createElement('div');
        div.setAttribute('class','task');

        const innerDiv = document.createElement('div');
        div.append(innerDiv);

        const para = document.createElement('p');
        para.innerText = value.title;
        innerDiv.append(para);

        const span = document.createElement('span');
        span.innerText = value.description;
        innerDiv.append(span);

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute("class","deleteBtn");
        deleteButton.innerText = '-';
        deleteButton.addEventListener("click",()=>{
            removeTask();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showAllTasks();

        })

        div.append(deleteButton);


        container.append(div);


    })
}


function removeTask(){
    tasks.forEach(()=>{
        const taskDiv = document.querySelector('.task');
        taskDiv.remove();

    });
}



form.addEventListener("submit",(e) => {
    removeTask();
    e.preventDefault();
    tasks.push({title:title.value,description:description.value});
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllTasks();
});
