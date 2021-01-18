var x = 'global x';

function outer(x) {
    var y = 'outer local y';
    console.log(x);
    console.log(y);

    function inner() {
        var z = 'inner local z';
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();
}
outer('outer local x');