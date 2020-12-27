
import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  login = {email:'',password:''};
  token : string ;
    constructor(private  ls :LoginserviceService,private router : Router) {
     }

  ngOnInit() {}
  logForm(){
  this.ls.logincall().subscribe(
    (res: Response)=>{
     this.token =  res['authToken'];
     localStorage.setItem('authToken',this.token);
     this.router.navigateByUrl('/home');
    },
    (err) =>{
      console.log(err,'dsfd;f')
    }
    
  );
  }

}
