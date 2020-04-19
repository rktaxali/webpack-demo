import _ from 'lodash';

import './style.css';  
//import './css/style.css';  // moved style.css to src/scc/style.css
import $ from 'jquery';
window.$ = $;
import Icon from './icon.png';
import Data from './data.xml';
import address from './xml/xml.xml';

// path is a node.js module https://nodejs.org/api/path.html
import * as path from 'path';
window.path = path;   // path is not available inside '<script> tags of index.html
                      // window.path will make 'path' available on all pages 
var filename = path.basename('/Users/Refsnes/demo_path.js');
console.log(filename);


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



 