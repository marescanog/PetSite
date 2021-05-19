var resfilters = document.getElementById("res__all_filters");
var resFilterSpan = document.getElementById("res__filter-span");
console.log(resFilterSpan);
function resToggleFilter(e){
    e.preventDefault();
    resfilters.classList.toggle("res__hidden");

    if(resfilters.classList.contains("res__hidden") == true){
        resFilterSpan.innerText = '+';
    }else{
        resFilterSpan.innerText = '-';
    }
}