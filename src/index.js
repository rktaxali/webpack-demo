import _ from 'lodash';

import './style.css';  
//import './css/style.css';  // moved style.css to src/scc/style.css
import $ from 'jquery';
window.$ = $;
import Icon from './icon.png';
import Data from './data.xml';
import address from './xml/xml.xml';



function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
     const myIcon = new Image();
   myIcon.src = Icon;
   element.appendChild(myIcon);

   console.log(Data);
   console.log(Data.note.heading);
  console.log(address);

  return element;
}


 document.body.appendChild(component());
 $('#spanid').text('span text updated');



 