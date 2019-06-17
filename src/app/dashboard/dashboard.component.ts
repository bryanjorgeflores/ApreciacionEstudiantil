import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/services/teacher.service';
import { ResultService } from 'src/services/result.service';
import { MatRadioChange, MatRadioButton } from '@angular/material';
import { PutService } from 'src/services/http.service/put.service';
import { Router } from '@angular/router';

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
  status: Array<boolean> = [ false, false, false ];

  constructor(
    public teacherService: TeacherService,
    public resultService: ResultService,
    private putService: PutService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user === null || user === undefined) {
      this.router.navigateByUrl('/login');
      return;
    }
    if (JSON.parse(user).status === true || localStorage.getItem('status') === 'true') {
      this.router.navigateByUrl('/results');
      return;
    }
    console.log(this.resultService.results);
  }

  onChange(mrChange: MatRadioChange): void {
    console.log('mrChage.value', mrChange.value);
    const mrButton: MatRadioButton = mrChange.source;

    const mrName = +mrButton.name.split('-')[3];
    const select = mrName / 6;
    console.log(select);

    this.resultService.results[this.indexQuestion][select] = +mrChange.value;
    console.log(this.resultService.results);
    console.log(this.status);
  }

  next(): void {

    if (this.indexQuestion === this.questions.length - 1) {
      this.indexQuestion = 0;
      return;
    }
    for (let i = 0; i <= 9; i++) {
      this.resultService.resultsUser[i] += this.resultService.results[this.indexQuestion][i];

    }

    this.indexQuestion++;

    console.log(this.resultService.resultsUser);

  }

  postAnswers(): void {
    for (let i = 0; i <= 9; i++) {
      this.resultService.resultsUser[i] += this.resultService.results[this.indexQuestion][i];
    }

    let resultsUser = {
      _id: JSON.parse(localStorage.getItem('user'))._id,
      result: this.resultService.resultsUser
    }

    console.log(resultsUser)

    this.putService.putResults(resultsUser)
      .subscribe(
        (results: any) => {
          localStorage.setItem('results', JSON.stringify(results));
          this.resultService.userStatus = true;
          localStorage.setItem('status', 'true');
          this.router.navigateByUrl('/results');
        },
      );

  }


}
