"use strict";

import from './lib/react-floatvox.css';
import React from 'react';
import crel from 'crel';
import Floatvox from './';
import voxImage from './demo-vox-image';

document.body.style.background = 'indianred';

// Google font
window.WebFontConfig = {
  google: {
    families: [ 'Pacifico::latin' ]
  }
};
(() => {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

crel(document.body,
  crel('h1', {
    'style': 'font-family: Pacifico, cursive;font-size: 96px;color: WhiteSmoke;text-align: center;'
  }, 'Floatvox'),
  crel('div', {
    'id': 'react-floatvox'
  })
);


var el = <div><img src={voxImage} alt="" /></div>;
React.render(<Floatvox content={el} />, document.getElementById('react-floatvox'));

document.querySelector('.floatvox-emitter').style.cssText = 'position: absolute;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);transform: translate(-50%, -50%);';
