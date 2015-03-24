"use strict";

import from './lib/react-floatvox.css';
import React from 'react';
import Floatvox from './';

document.body.style.background = 'indianred';

var el = <div><img src="http://placehold.it/350x150" alt="" /></div>;
React.render(<Floatvox content={el} />, document.body);
