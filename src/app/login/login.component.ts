import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    fullname: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private userService: UserService, private route: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('id')) this.route.navigate(['/liste-produit']);
  }

  onSubmit() {
    this.userService.login(this.profileForm.value).then((res) => {
      if (res.success) {
        localStorage.setItem('id', res.id.toString());
        this.route.navigate(['/liste-produit']);
      } else localStorage.removeItem('id');
    });
  }
}
