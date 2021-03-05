let main = document.getElementsByTagName("body")
main = main[0]
console.log(main);





let ev1 = function(){
    alert("Try again")
}

blue.addEventListener("click", ev1)

let nixon = function(){
    location.href = "goodjob.html"
}

red.addEventListener("click", nixon)


var counts = {},
    track  = document.getElementsByClassName('click-tracking');

for (var i = 0, max = track.length; i < max; i++) {
    track[i].addEventListener('click', function() {
        var name = this.name,
            ele  = document.getElementById(name + '-count') || false;
        if (typeof counts[name] === 'undefined') {
            counts[name] = 0;
        }
        console.log(counts[name])
        ele.innerHTML = counts[name]++;

        if(counts[name] == 2){
            let badDay = function(){
                location.href = "badDay.html"
            }
            blue.addEventListener("click", badDay)
        }
    });
    }

    