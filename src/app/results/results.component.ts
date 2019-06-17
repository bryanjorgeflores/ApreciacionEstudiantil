import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/services/teacher.service';
import { GetService } from 'src/services/http.service/get.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  result: Array<number>;
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

}
