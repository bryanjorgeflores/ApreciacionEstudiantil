import { Injectable } from '@angular/core';
import { Teacher } from 'src/interfaces/elemento';

@Injectable({
  providedIn: 'root'
})

export class TeacherService {
  public teachers: Array<Teacher> = [
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

  getTeachers(): Array<Teacher> {
    return this.teachers;
  }

}

