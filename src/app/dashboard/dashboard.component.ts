import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/services/teacher.service';
import { ResultService } from 'src/services/result.service';
import { MatRadioChange, MatRadioButton } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  displayedColumns: Array<string> = ['position', 'name', 'value'];
  questions: Array<string> = [
    '¿Hace el docente un uso correcto del material didáctico?',
    '¿Es justo en sus calificaciones?',
    '¿El Docente cumple con los Horarios de Clases?',
  ];
  indexQuestion = 0;


  constructor(
    public teacherService: TeacherService,
    private resultService: ResultService,

  ) { }

  ngOnInit(): void {
    console.log(this.resultService.results);
  }

  onChange(mrChange: MatRadioChange): void {
    console.log('mrChage.value', mrChange.value);
    const mrButton: MatRadioButton = mrChange.source;
    const mrName = +mrButton.name.split('-')[3];
    const mrId = +mrButton.id.split('-')[2];
    const select = mrName / 6;

    this.resultService.results[this.indexQuestion][select][mrId - (mrName + 2)] = +mrChange.value;
  }

  next(): void {

    if (this.indexQuestion === this.questions.length - 1) {
      this.indexQuestion = 0;
      return;
    }
    this.indexQuestion++;
  }
  back(): void {

    if (this.indexQuestion === 0) {
      this.indexQuestion = this.questions.length - 1;
      return;
    }
    this.indexQuestion--;
  }

  postAnswers(): void {

  }


}
