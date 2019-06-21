import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/services/teacher.service';
import { GetService } from 'src/services/http.service/get.service';
import { Score } from 'src/classes/score.class';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  result: Array<number>;
  score: Score;
  quantity: number;
  displayedColumns: string[] = ['position', 'name', 'value'];
  constructor(
    private router: Router,
    public teacherService: TeacherService,
    private getService: GetService

  ) { }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user === null || user === undefined) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.getService.getResult()
      .subscribe(result => {
        this.result = result.result;
        this.quantity = result.quantity;
        console.log(this.result);
      },
      err => console.error(err.error.text));
  }

  setResult(score: number): Score {
    if (score <= 1.5) {
      return new Score('Muy Malo', '#d9534f');
    } else if (score <= 2.5) {
      return new Score('Malo', '#2E2E2E');
    } else if (score <= 3.5) {
      return new Score('Regular', '#5bc0de');
    } else if (score <= 4.5) {
      return new Score('Bueno', '#428bca');
    } else {
      return new Score('Muy Bueno', '#5cb85c');
    }
  }

}
