import "./styles/normalize.css"
import "./styles/home.css";

const nav = document.createElement('nav')
        , button1 = document.createElement('button')
        , button2 = document.createElement('button')
        , button3 = document.createElement('button');

button1.textContent = 'Home';
button2.textContent = 'Menu';
button3.textContent = 'About';

nav.append(button1, button2, button3);

const main = document.createElement('main')
       , imgDiv = document.createElement('div')
       , p = document.createElement('p')
       , span = document.createElement('span')
       , spanTwo = document.createElement('span');

span.textContent = 'Inaliana';
spanTwo.textContent = 'is a stylish, modern Italian eatery known for blending traditional recipes with contemporary flair and is the go-toestination for both casual diners and food connoisseurs seeking authentic Italian flavors.'

p.append(span, spanTwo);
main.append(imgDiv, p);

document.body.append(nav, main);