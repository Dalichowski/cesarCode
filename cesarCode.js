// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
// Caractère non-chiffré	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z
// Caractère chiffré	    N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M


var a = "SERR PBQR PNZC"; //FREE CODE CAMP
var b = "SERR CVMMN!"; //FREE PIZZA!
var c = "HELLO MARIE";
var d = "URYYB ZNEVR";

function rot13(str) {
    letters ={
        'A' : 'N',
        'B' : 'O',
        'C' : 'P',
        'D' : 'Q',
        'E' : 'R',
        'F' : 'S',
        'G' : 'T',
        'H' : 'U',
        'I' : 'V',
        'J' : 'W',
        'K' : 'X',
        'L' : 'Y',
        'M' : 'Z',
        'N' : 'A',
        'O' : 'B',
        'P' : 'C',
        'Q' : 'D',
        'R' : 'E',
        'S' : 'F',
        'T' : 'G',
        'U' : 'H',
        'V' : 'I',
        'W' : 'J',
        'X' : 'K',
        'Y' : 'L',
        'Z' : 'M',
        ' ' : ' ' ,
        '?' : '?',
        ',' : ',',
        ':' : ':',
        ';' : ';',
        '!' : '!',
        '.' : '.'
    }
    
    //SEPARATE VALUES
    var letterEntry = Object.keys(letters);
    var letterExit = Object.values(letters);
    var phraseEntry = str.split('')
    var phraseExit = [];

    //CONVERT LETTER
    function conversion(letter){
        for(let i=0; i<letterEntry.length; i++){
            if(letter === letterEntry[i]){
                phraseExit.push(letterExit[i])
            }
        }
    }
    //APPLY TO EVERY LETTERS & RETURN THE TRADUCED SENTENCE 
    phraseEntry.map(item => conversion(item))

    var traductedSentence = phraseExit.join('');

    //console.log(traductedSentence)
    return traductedSentence

}  
rot13('BLABLABLA');
