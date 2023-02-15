'use strict';
            let value = prompt('What is the "official" name of JavaScript?', '');

            if (value == 'ECMAScript') {
            alert('Right!');
            } else {
            alert("You don't know? ECMAScript!");
            }
            let value2 = prompt('Type a number', 0);

            if (value2 > 0) {
                alert( 1 );
            } else if (value2 < 0) {
                alert( -1 );
            } else {
                alert( 0 );
            }

            let result;
            if (a + b < 4) {
                result = 'Below';
            } else {
                result = 'Over';
            }

            let result2 = (a + b < 4) ? 'Below' : 'Over';

            let message;
            if (login == 'Employee') {
                message = 'Hello';
            } else if (login == 'Director') {
                message = 'Greetings';
            } else if (login == '') {
                message = 'No login';
            } else {
                message = '';
            }
