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
    this.resultService.results = [ [ ], [ ], [ ],
    ];
    this.resultService.resultsUser = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    this.resultService.userStatus = false;

    this.router.navigateByUrl('/login');
  }
}
