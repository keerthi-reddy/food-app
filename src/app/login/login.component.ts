import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private ls: LoginService) { }

  ngOnInit() {
    setTimeout(() => {
      this.ls.userLoginStatus = false;
      this.ls.doLogout();
    });
  }
  submitForm(dataObj) {

    this.ls.doLogin(dataObj).subscribe((result) => {
      if (result["message"] == "invalid username") {
        alert("invalid user name");
      }
      else if (result["message"] == "invalid password") {
        alert("Invalid password");
      }
      else {
        alert("login sucess");
        localStorage.setItem("token", result["message"]);
        this.ls.userLoginStatus = true;
        this.ls.username = result["username"];
        //redirect to admindashboard component
        if(result["role"] == "admin")
        this.router.navigate(['/admindashboard']);
         //redirect to userdashboard component
        else
        this.router.navigate(['/userdashboard']);
      }
    })
  }
}
