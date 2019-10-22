/* Imports */
import React from 'react';

//import am4core from '../assets/js/Consumption/Core';
//import { am4core, am4charts } from '../assets/js/Consumption/Charts';

class Consumptionchart extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://www.amcharts.com/lib/4/core.js';
    script.src = 'https://www.amcharts.com/lib/4/charts.js';
    script.src = 'https://www.amcharts.com/lib/4/themes/material.js';
    script.src = 'https://www.amcharts.com/lib/4/lang/de_DE.js';
    script.src = 'https://www.amcharts.com/lib/4/geodata/germanyLow.js';
    script.async = true;

    document.body.appendChild(script);
  }
}
export default Consumptionchart;
