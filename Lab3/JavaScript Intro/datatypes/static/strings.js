console.log("1:") 
function upper(s){
    console.log(s[0].toUpperCase() + s.slice(1));
}
upper("john")

console.log("2:") 
function check(s){
    let t = s.toLowerCase();
    console.log(t.includes("viagra") || t.includes("xxx"))
}

check('buy ViAgRA now');
check('free xxxxx');
check("innocent rabbit");

console.log("3:") 
function truncate(str, maxlength) {
    if (str.length > maxlength){
        console.log(str.slice(0, maxlength - 1) + '…' )
    } else {
        console.log(str);
    }
}

truncate("What I'd like to tell on this topic is:", 20)

console.log("4:") 

function extractCurrencyValue(str) {
    console.log(+str.slice(1));
}

extractCurrencyValue('$120');