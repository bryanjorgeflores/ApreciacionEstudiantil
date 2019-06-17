import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/http.service/post.service';
import { User } from 'src/interfaces/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private postService: PostService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  register(username: string, name: string, password: string, repassword: string, event: Event) {
    event.preventDefault();

    if (username.length < 8 || password.length < 8) {
      alert(`
      * Username: 8 caracteres mínimo.
      * Password: 8 caracteres mínimo.
      * No Cumple con los requitos.
      `);

      return;

    }

    if (password !== repassword) {
      alert('Corregir las contraseñas');
      return;
    }

    const userRegister: User = {
      name,
      username,
      password
    };

    this.postService.register(userRegister)
      .subscribe(
      (user: User) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('/dashboard');
      },
      err => {
        if (err.error.text === undefined) {
          alert('Fallo al Registro, Posiblemente ese nombre de usuario ya este Registrado');
          return;
        } else {
          alert(err.error.text);
          return;
        }
      });

  }

}
