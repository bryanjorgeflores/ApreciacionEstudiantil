import { Component, OnInit } from '@angular/core';

import { TableElement } from '../../interfaces/elemento';
import { TableQuestion } from '../../interfaces/pregunta';

const ELEMENT_DATA: Array<TableElement> = [
  { position: 1, name: 'Profesor 1', value: '' },
  { position: 2, name: 'Profesor 2', value: '' },
  { position: 3, name: 'Profesor 3', value: '' },
  { position: 4, name: 'Profesor 4', value: '' },
  { position: 5, name: 'Profesor 5', value: '' },
  { position: 6, name: 'Profesor 6', value: '' },
  { position: 7, name: 'Profesor 7', value: '' },
  { position: 8, name: 'Profesor 8', value: '' },
  { position: 9, name: 'Profesor 9', value: '' },
  { position: 10, name: 'Profesor 10', value: '' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'value'];
  dataSource = ELEMENT_DATA;
  questions: Array<TableQuestion> = [
    { position: 1, question: '¿Hace el docente un uso correcto del material didáctico?' },
    { position: 2, question: '¿Es justo en sus calificaciones?' },
  ];

  constructor(

  ) { }

  ngOnInit(): void {

  }
  aumentar() {

  }


}
