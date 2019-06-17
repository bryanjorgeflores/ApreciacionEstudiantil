import { Component, OnInit } from '@angular/core';



const ELEMENT_DATA: Array<any> = [
  { position: 1, name: 'Profesor 1', value: 'Bueno' },
  { position: 2, name: 'Profesor 2', value: 'Muy Bueno' },
  { position: 3, name: 'Profesor 3', value: 'Regular' },
  { position: 4, name: 'Profesor 4', value: 'Bueno' },
  { position: 5, name: 'Profesor 5', value: 'Bueno' },
  { position: 6, name: 'Profesor 6', value: 'Regular' },
  { position: 7, name: 'Profesor 7', value: 'Malo' },
  { position: 8, name: 'Profesor 8', value: 'Bueno' },
  { position: 9, name: 'Profesor 9', value: 'Regular' },
  { position: 10, name: 'Profesor 10', value: 'Muy Malo' },
];

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'value'];
  dataSource = ELEMENT_DATA;
  constructor(

  ) { }

  ngOnInit(): void {
  }

}
