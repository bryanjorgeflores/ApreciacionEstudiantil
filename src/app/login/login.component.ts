import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/http.service/post.service';
import { Router } from '@angular/router';
import { User } from 'src/interfaces/models/user.model';
import { ResultService } from 'src/services/result.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(
    private postService: PostService,
    private router: Router,
    private resultService: ResultService,

  ) { }

  ngOnInit(): void {
  }

  login(username: string, password: string, event: Event): void {
    event.preventDefault();

    if (username.length < 8 || password.length < 8) {
      alert(`
      * Username: 8 caracteres mínimo.
      * Password: 8 caracteres mínimo.
      * No Cumple con los requitos.
      `);

      return;

    }

    const userLogin: User = {
      username,
      password
    };

    this.postService.login(userLogin)
      .subscribe(
        (user: User) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.resultService.resultsUser = user.result;
          this.resultService.userStatus = user.status;
          console.log(this.resultService.resultsUser);
          this.router.navigateByUrl('/dashboard');
        },
        err => {
          if (err.error.text === undefined) {
            alert('Fallo al Ingreso, Verificar Username o Contraseña');
            return;
          } else if (err.error.text === `Cannot read property 'password' of null`) {
            alert('Fallo al Ingreso, El Usuario no Existe');
          } else {
            alert(err.error.text);
            return;
          }
        });
  }

}
