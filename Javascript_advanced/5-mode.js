

function changeMode (size, weight, transform, background, color) {
    
    return function () {
        const change_style = document.body.style;

        change_style.fontSize = size + 'px';
        change_style.fontWeight = weight;
        change_style.textTransform = transform;
        change_style.backgroundColor = background;
        change_style.color = color;
    };

}

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
    
    const body = document.body;
    
    const division = document.createElement('div');
    
    const para = document.createElement('p');
    
    para.innerText = 'Welcome Holberton!';
    
    division.appendChild(para);
    
    body.appendChild(division);

    
    const spooky_button = document.createElement('button');
     
    const spooky_button_text = document.createTextNode('Spooky');
    spooky_button.append(spooky_button_text); 
    
    document.body.appendChild(spooky_button);

    
    const dark_button = document.createElement('button');
     
    const dark_button_text = document.createTextNode('Dark mode');
    dark_button.append(dark_button_text); 
    
    document.body.appendChild(dark_button);

    
    const scream_button = document.createElement('button');
     
    const scream_button_text = document.createTextNode('Scream mode');
    scream_button.append(scream_button_text); 
    
    document.body.appendChild(scream_button);

    

    spooky_button.addEventListener('click', function () {
        spooky()
    });

    

    dark_button.addEventListener('click', function (){
        darkMode()
    });
    /
    scream_button.addEventListener('click', function(){
        screamMode()
    });
}

main()
