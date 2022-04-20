const dragArea = document.querySelector('#tasksContainer');
 new Sortable(dragArea, {
    animation: 350
});


// add a new task
function addTask() {
    let text = document.getElementById('inputTask').value;
    // console.log(text.length);
    if(text.trim().length < 1) alert("You must write something");
    else {
        let textNode = document.createTextNode(text.trim());
        let li = document.createElement('LI');
        li.appendChild(textNode);
        let ul = document.getElementsByTagName('UL')[0];
        ul.appendChild(li);

        document.getElementById('inputTask').value = "";
        // alert(textNode);

        // add a close button
        ul = document.getElementById('tasksContainer');
        let children = ul.children;
        // console.log(children);

        for(let i=0; i<children.length; i++) {
            let span = document.createElement('SPAN');
            span.className = "close";
            let close = document.createTextNode('\u00d7');
            span.appendChild(close);
            children[i].append(span);
        }
    }
}

// add a checked sign on click
// hide the task when cliked on close button
let ul = document.getElementsByTagName('UL')[0];
ul.addEventListener('click', (ev)=> {
    // console.log(ev.target.tagName);
    if(ev.target.className ==='close') {
        let parent = ev.target.parentNode;
        parent.style.display="none";
    }
    else if(ev.target.tagName==='LI') {
        // alert('this is clicked');
        ev.target.classList.toggle("checked");
    }


},false);

// add a close button
ul = document.getElementById('tasksContainer');
let children = ul.children;
// console.log(children);

for(let i=0; i<children.length; i++) {
    let span = document.createElement('SPAN');
    span.className = "close";
    let close = document.createTextNode('\u00d7');
    span.appendChild(close);
    children[i].append(span);
}