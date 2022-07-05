const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    exprArr = expr.split('')
    var numberOfSymbols = 0;
    var symbolArr = [];
    
    for(var i = 0; i< exprArr.length; i+=10){
      var str = ''
        for(let y = 0; y<10; y++){
          
           str += expr[i+y];
        }
      symbolArr[numberOfSymbols] = str;
      numberOfSymbols++;
    }

    for (let i = 0; i < symbolArr.length; i++) {
        xArr = symbolArr[i].split('')
        var morseArr = ''

        for (let i = 0; i < 10; i++) {
          xArr[0] == '0' ? xArr.splice(0,1) : null   
        }

        for (let y = 0; y < xArr.length; y+=2){
          xArr[y+1] === '1' ? morseArr+= '-' : xArr[y+1] === '0'? morseArr+= '.' : morseArr = ' ';
        }

        for (var s in MORSE_TABLE){
            if(s === morseArr){
              morseArr = MORSE_TABLE[s]
            }

        symbolArr[i] = morseArr;
      }
    }
    return symbolArr.join('')
}

module.exports = {
    decode
}