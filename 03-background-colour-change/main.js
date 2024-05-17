let   currentColour  = document.getElementById('colour-display');
let  newColourBtn = document.getElementById('colourBtn');
let body = document.querySelector('body');

// 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F

const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
];




let getRandomHexValue = () => {
    let randomIndexPosition = Math.floor(Math.random() * hexValues.length);
    let randomHexValue = hexValues[randomIndexPosition];
    return randomHexValue;
}


 function getRandomHexString(colorLength) {
        let hexString = '';
        for (let i = 0; i < colorLength; i++) {
            hexString += getRandomHexValue();
        } 
        
        return hexString;
    }

    



newColourBtn.addEventListener('click', function () {
        const randomHexString = '#' + getRandomHexString(6);
    
       body.style.background = randomHexString;
    
        currentColour.innerHTML = randomHexString;
    });




