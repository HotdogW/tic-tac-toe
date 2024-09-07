let turn = 'x';
let s1, s2, s3, s4, s5, s6, s7, s8, s9;

function gameTime() {
    
        document.getElementById('winMessage').innerHTML = ''

    if (turn === 'x') {

        if (document.getElementById('1').value === "") {
            document.getElementById('1').onclick = function () {
                document.getElementById('1').value = 'x';
                s1 = 'x';
                turn = 'o';
                winCon();
            };
        }

        if (document.getElementById('2').value === "") {
            document.getElementById('2').onclick = function () {
                document.getElementById('2').value = 'x';
                s2 = 'x';
                turn = 'o';
                winCon();
            };
        }

        if (document.getElementById('3').value === "") {
            document.getElementById('3').onclick = function () {
                document.getElementById('3').value = 'x';
                s3 = 'x';
                turn = 'o';
                winCon();
            };
        }

        if (document.getElementById('4').value === "") {
            document.getElementById('4').onclick = function () {
                document.getElementById('4').value = 'x';
                s4 = 'x';
                turn = 'o';
                winCon();
            };
        }

        if (document.getElementById('5').value === "") {
            document.getElementById('5').onclick = function () {
                document.getElementById('5').value = 'x';
                s5 = 'x';
                turn = 'o';
                winCon();
            };
        }

        if (document.getElementById('6').value === "") {
            document.getElementById('6').onclick = function () {
                document.getElementById('6').value = 'x';
                s6 = 'x';
                turn = 'o';
                winCon();
            };
        }

        if (document.getElementById('7').value === "") {
            document.getElementById('7').onclick = function () {
                document.getElementById('7').value = 'x';
                s7 = 'x';
                turn = 'o';
                winCon();
            };
        }
        if (document.getElementById('8').value === "") {
            document.getElementById('8').onclick = function () {
                document.getElementById('8').value = 'x';
                s8 = 'x';
                turn = 'o';
                winCon();
            };
        }

        if (document.getElementById('9').value === "") {
            document.getElementById('9').onclick = function () {
                document.getElementById('9').value = 'x';
                s9 = 'x';
                turn = 'o';
                winCon();
            };
        }

    }

    if (turn === 'o') {

        if (document.getElementById('1').value === "") {
            document.getElementById('1').onclick = function () {
                document.getElementById('1').value = 'o';
                s1 = 'o';
                turn = 'x';
                winCon();
            };
        }

        if (document.getElementById('2').value === "") {
            document.getElementById('2').onclick = function () {
                document.getElementById('2').value = 'o';
                s2 = 'o';
                turn = 'x';
                winCon();
            };
        }

        if (document.getElementById('3').value === "") {
            document.getElementById('3').onclick = function () {
                document.getElementById('3').value = 'o';
                s3 = 'o';
                turn = 'x';
                winCon();
            };
        }

        if (document.getElementById('4').value === "") {
            document.getElementById('4').onclick = function () {
                document.getElementById('4').value = 'o';
                s4 = 'o';
                turn = 'x';
                winCon();
            };
        }

        if (document.getElementById('5').value === "") {
            document.getElementById('5').onclick = function () {
                document.getElementById('5').value = 'o';
                s5 = 'o';
                turn = 'x';
                winCon();
            };
        }

        if (document.getElementById('6').value === "") {
            document.getElementById('6').onclick = function () {
                document.getElementById('6').value = 'o';
                s6 = 'o';
                turn = 'x';
                winCon();
            };
        }

        if (document.getElementById('7').value === "") {
            document.getElementById('7').onclick = function () {
                document.getElementById('7').value = 'o';
                s7 = 'o';
                turn = 'x';
                winCon();
            };
        }

        if (document.getElementById('8').value === "") {
            document.getElementById('8').onclick = function () {
                document.getElementById('8').value = 'o';
                s8 = 'o';
                turn = 'x';
                winCon();
            };
        }

        if (document.getElementById('9').value === "") {
            document.getElementById('9').onclick = function () {
                document.getElementById('9').value = 'o';
                s9 = 'o';
                turn = 'x';
                winCon();
            };
        }

    }

}

function winCon() {

    if (s1 && s1 === s2 && s2 === s3) {
        if (turn === 'o') {
            document.getElementById('winMessage').innerHTML = 'X wins!'
        }
        else {
            document.getElementById('winMessage').innerHTML = 'O wins!'
        }
        reset();
    }
    else if (s4 && s4 === s5 && s5 === s6) {
        if (turn === 'o') {
            document.getElementById('winMessage').innerHTML = 'X wins!'
        }
        else {
            document.getElementById('winMessage').innerHTML = 'O wins!'
        }
        reset();
    }
    else if (s7 && s7 === s8 && s8 === s9) {
        if (turn === 'o') {
            document.getElementById('winMessage').innerHTML = 'X wins!'
        }
        else {
            document.getElementById('winMessage').innerHTML = 'O wins!'
        }
        reset();
    }
    else if (s1 && s1 === s4 && s4 === s7) {
        if (turn === 'o') {
            document.getElementById('winMessage').innerHTML = 'X wins!'
        }
        else {
            document.getElementById('winMessage').innerHTML = 'O wins!'
        }
        reset();
    }
    else if (s2 && s2 === s5 && s5 === s8) {
        if (turn === 'o') {
            document.getElementById('winMessage').innerHTML = 'X wins!'
        }
        else {
            document.getElementById('winMessage').innerHTML = 'O wins!'
        }
        reset();
    }
    else if (s3 && s3 === s6 && s6 === s9) {
        if (turn === 'o') {
            document.getElementById('winMessage').innerHTML = 'X wins!'
        }
        else {
            document.getElementById('winMessage').innerHTML = 'O wins!'
        }
        reset();
    }
    else if (s3 && s3 === s5 && s5 === s7) {
        if (turn === 'o') {
            document.getElementById('winMessage').innerHTML = 'X wins!'
        }
        else {
            document.getElementById('winMessage').innerHTML = 'O wins!'
        }
        reset();
    }
    else if (s1 && s1 === s5 && s5 === s9) {
        if (turn === 'o') {
            document.getElementById('winMessage').innerHTML = 'X wins!'
        }
        else {
            document.getElementById('winMessage').innerHTML = 'O wins!'
        }
        reset();
    }
    else if (s1 && s2 && s3 && s4 && s5 && s6 && s7 && s8 && s9) {
            document.getElementById('winMessage').innerHTML = 'Draw.'
        reset();
    }
    else {
        gameTime();
    }
}

function reset() {

    document.getElementById('1').onclick = function () {
        document.getElementById('1').value = '';
        document.getElementById('2').value = '';
        document.getElementById('3').value = '';
        document.getElementById('4').value = '';
        document.getElementById('5').value = '';
        document.getElementById('6').value = '';
        document.getElementById('7').value = '';
        document.getElementById('8').value = '';
        document.getElementById('9').value = '';
        s1 = '';
        s2 = '';
        s3 = '';
        s4 = '';
        s5 = '';
        s6 = '';
        s7 = ''; 
        s8 = '';
        s9 = '';
        gameTime();
    }

    document.getElementById('2').onclick = function () {
        document.getElementById('1').value = '';
        document.getElementById('2').value = '';
        document.getElementById('3').value = '';
        document.getElementById('4').value = '';
        document.getElementById('5').value = '';
        document.getElementById('6').value = '';
        document.getElementById('7').value = '';
        document.getElementById('8').value = '';
        document.getElementById('9').value = '';
        s1 = '';
        s2 = '';
        s3 = '';
        s4 = '';
        s5 = '';
        s6 = '';
        s7 = ''; 
        s8 = '';
        s9 = '';
        gameTime();
    }

    document.getElementById('3').onclick = function () {
        document.getElementById('1').value = '';
        document.getElementById('2').value = '';
        document.getElementById('3').value = '';
        document.getElementById('4').value = '';
        document.getElementById('5').value = '';
        document.getElementById('6').value = '';
        document.getElementById('7').value = '';
        document.getElementById('8').value = '';
        document.getElementById('9').value = '';
        s1 = '';
        s2 = '';
        s3 = '';
        s4 = '';
        s5 = '';
        s6 = '';
        s7 = ''; 
        s8 = '';
        s9 = '';
        gameTime();
    }

    document.getElementById('4').onclick = function () {
        document.getElementById('1').value = '';
        document.getElementById('2').value = '';
        document.getElementById('3').value = '';
        document.getElementById('4').value = '';
        document.getElementById('5').value = '';
        document.getElementById('6').value = '';
        document.getElementById('7').value = '';
        document.getElementById('8').value = '';
        document.getElementById('9').value = '';
        s1 = '';
        s2 = '';
        s3 = '';
        s4 = '';
        s5 = '';
        s6 = '';
        s7 = ''; 
        s8 = '';
        s9 = '';
        gameTime();
    }

    document.getElementById('5').onclick = function () {
        document.getElementById('1').value = '';
        document.getElementById('2').value = '';
        document.getElementById('3').value = '';
        document.getElementById('4').value = '';
        document.getElementById('5').value = '';
        document.getElementById('6').value = '';
        document.getElementById('7').value = '';
        document.getElementById('8').value = '';
        document.getElementById('9').value = '';
        s1 = '';
        s2 = '';
        s3 = '';
        s4 = '';
        s5 = '';
        s6 = '';
        s7 = ''; 
        s8 = '';
        s9 = '';
        gameTime();
    }

    document.getElementById('6').onclick = function () {
        document.getElementById('1').value = '';
        document.getElementById('2').value = '';
        document.getElementById('3').value = '';
        document.getElementById('4').value = '';
        document.getElementById('5').value = '';
        document.getElementById('6').value = '';
        document.getElementById('7').value = '';
        document.getElementById('8').value = '';
        document.getElementById('9').value = '';
        s1 = '';
        s2 = '';
        s3 = '';
        s4 = '';
        s5 = '';
        s6 = '';
        s7 = ''; 
        s8 = '';
        s9 = '';
        gameTime();
    }

    document.getElementById('7').onclick = function () {
        document.getElementById('1').value = '';
        document.getElementById('2').value = '';
        document.getElementById('3').value = '';
        document.getElementById('4').value = '';
        document.getElementById('5').value = '';
        document.getElementById('6').value = '';
        document.getElementById('7').value = '';
        document.getElementById('8').value = '';
        document.getElementById('9').value = '';
        s1 = '';
        s2 = '';
        s3 = '';
        s4 = '';
        s5 = '';
        s6 = '';
        s7 = ''; 
        s8 = '';
        s9 = '';
        gameTime();
    }

    document.getElementById('8').onclick = function () {
        document.getElementById('1').value = '';
        document.getElementById('2').value = '';
        document.getElementById('3').value = '';
        document.getElementById('4').value = '';
        document.getElementById('5').value = '';
        document.getElementById('6').value = '';
        document.getElementById('7').value = '';
        document.getElementById('8').value = '';
        document.getElementById('9').value = '';
        s1 = '';
        s2 = '';
        s3 = '';
        s4 = '';
        s5 = '';
        s6 = '';
        s7 = ''; 
        s8 = '';
        s9 = '';
        gameTime();
    }

    document.getElementById('9').onclick = function () {
        document.getElementById('1').value = '';
        document.getElementById('2').value = '';
        document.getElementById('3').value = '';
        document.getElementById('4').value = '';
        document.getElementById('5').value = '';
        document.getElementById('6').value = '';
        document.getElementById('7').value = '';
        document.getElementById('8').value = '';
        document.getElementById('9').value = '';
        s1 = '';
        s2 = '';
        s3 = '';
        s4 = '';
        s5 = '';
        s6 = '';
        s7 = ''; 
        s8 = '';
        s9 = '';
        gameTime();
    }
}
 
gameTime();

