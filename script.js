let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for(list of lists){
    list.addEventListner("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover",function(e){
            e.peventDefault();
        });
        rightBox.addEventListener("drop",function(e){
            rightBox.appendChild(selected);
            selected = null;
        })
    })
}
