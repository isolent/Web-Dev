"use strict"
    let a = 1, b = 1;
    alert(++a);
    alert(b++);

    let c = 2;
    alert(1 + (c *= 2));

    /* "" + 1 + 0 = "10" // (1)
    "" - 1 + 0 = -1 // (2)
    true + false = 1
    6 / "3" = 2
    "2" * "3" = 6
    4 + 5 + "px" = "9px"
    "$" + 4 + 5 = "$45"
    "4" - 2 = 2
    "4px" - 2 = NaN
    "  -9  " + 5 = "  -9  5" // (3)
    "  -9  " - 5 = -14 // (4)
    null + 1 = 1 // (5)
    undefined + 1 = NaN // (6)
    " \t \n" - 2 = -2 // (7)  */

    let d = prompt("First number?", 1);
    let e = prompt("Second number?", 2);

    alert(Number(d) + Number(e)); // 12
