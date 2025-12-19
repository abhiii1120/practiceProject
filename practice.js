let AllElements = document.querySelectorAll('.Elements');
let FullElemetns = document.querySelectorAll('.FullElements');
AllElements.forEach(function(elements){
    elements.addEventListener('click',function(){
        FullElemetns[elements.id].style.display = "Block";
    })
})