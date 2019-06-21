import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from 'src/services/result.service';
import { DeleteService } from 'src/services/http.service/delete.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private router: Router,
    private resultService: ResultService,
    private deleteService: DeleteService

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

  deleteUser(): void {
    const idUser = JSON.parse(localStorage.getItem('user'))._id;
    if (confirm('Desea Eliminar este Usuario?')) {
      this.deleteService.deleteUser(idUser)
        .subscribe(
          (response) => {
            localStorage.clear();
            this.resultService.resetValues();
            this.resultService.userStatus = false;
            this.router.navigateByUrl('/login');
          },
          err => alert(err.error.text));

    } else {
      return;
    }
  }
}
