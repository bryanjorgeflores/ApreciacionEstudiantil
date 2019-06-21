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
  status: any = [];

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


  onChange(mrChange: MatRadioChange, position: number): void {
    const mrButton: MatRadioButton = mrChange.source;
    this.status[position - 1] = mrButton;
    console.log(this.status);
    console.log(mrButton);
    this.resultService.results[this.indexQuestion][position - 1] = +mrChange.value;
  }

  next(): void {
    if (this.indexQuestion === this.questions.length - 1) {
      this.indexQuestion = 0;
      return;
    }
    for (let i = 0; i <= 9; i++) {
      this.resultService.resultsUser[i] += this.resultService.results[this.indexQuestion][i];
      this.status[i].checked = false;
    }
    this.indexQuestion++;

    console.log(this.resultService.resultsUser);

  }

  postAnswers(): void {
    for (let i = 0; i <= 9; i++) {
      this.resultService.resultsUser[i] += this.resultService.results[this.indexQuestion][i];
    }

    const resultsUser = {
      _id: JSON.parse(localStorage.getItem('user'))._id,
      result: this.resultService.resultsUser
    };

    console.log(resultsUser);

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
