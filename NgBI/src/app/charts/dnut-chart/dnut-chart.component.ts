import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnut-chart',
  templateUrl: './dnut-chart.component.html',
  styleUrls: ['./dnut-chart.component.css']
})
export class DnutChartComponent implements OnInit {

  constructor() { }

  dnutChartData: number[] = [350, 450, 120];
  dnutChartLabels: string[] = ['Champlain Inc.', 'Pete Mfg.', 'LoveJoy Creative'];
  colors: any[] = [
    {
      backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
      borderColor: '#111'
    }
  ];

  dnutChartType = 'doughnut';

  ngOnInit(): void {
  }

}
