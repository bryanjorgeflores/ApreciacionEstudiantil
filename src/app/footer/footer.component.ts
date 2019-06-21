import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from 'src/services/result.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private router: Router,
    private resultService: ResultService

  ) { }

  ngOnInit() {
  }

  logOut(): void {
    localStorage.clear();
    this.resultService.results = [ [ ], [ ], [ ], ];
    this.resultService.resetValues();
    this.resultService.userStatus = false;
    console.log(this.resultService.results);
    console.log(this.resultService.resultsUser);
    console.log(this.resultService.userStatus);

    this.router.navigateByUrl('/login');
  }
}
