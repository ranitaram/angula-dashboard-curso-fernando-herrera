import { Component, Input } from '@angular/core';

import { ChartData, ChartEvent, ChartType } from 'chart.js';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {

  
  //grafica1.component  
 
doughnutChartLabels: string[] = [ 'Pan', 'Refresco', 'Tacos' ];
public data1:ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels,
  datasets: [ {  data: [ 40, 10, 100 ],
                 backgroundColor: ['#00821C','#09DB36','#024D0F'],
                 hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
                 hoverBorderColor:['#000000','#000000','#00000003']
              },
            ]



          }

  
  //grafica2.component  
 
doughnutChartLabels2: string[] = [ 'Pan', 'Refresco', 'Tacos' ];
public data2:ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels,
  datasets: [ {  data: [ 10, 10, 50 ],
                 backgroundColor: ['#00821C','#09DB36','#024D0F'],
                 hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
                 hoverBorderColor:['#000000','#000000','#00000003']
              },
            ]



          }        
}
