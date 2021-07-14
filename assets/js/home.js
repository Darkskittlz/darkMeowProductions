src='http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js';


const updateCount = (counter, v, timeout, inc) => {
	counter.innerText = numberWithCommas(v) + " Kittens";
	setTimeout(updateCount, timeout, counter, v + inc, timeout, inc);
};

document.getElementById("c1");

var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");

updateCount(c1,4304,30,70);



function numberWithCommas(x) {
    x = x.toString(); 
    const pattern1 = /\d{4}/;  
    const pattern2 = /(\d+)(\d{3})/;

    while (pattern1.test(x)) {
        console.log(x);
        x = x.replace(pattern2, "$1,$2");
    }
    console.log(x);
    return x;
}





