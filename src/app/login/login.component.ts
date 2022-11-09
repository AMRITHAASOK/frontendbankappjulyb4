import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd execute

  //properties
  aim="Your perfect banking partner";

  accounts="Enter ur acno here";

  acno="";//1000
  pswd="";//1000
  //user defined functions// 4th execute 

  acnoChange(event:any){
    this.acno=event.target.value;//1000
    console.log(this.acno);
    
  }
  pswdChange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
    
  }
  login(){
    // alert('login clicked');
    var acno=this.acno;
    var pswd=this.pswd;
  
    const result=this.ds.login(acno,pswd)
    if(result){
      alert("login successfully");
      this.router.navigateByUrl('dashboard');
    }
    else{
      alert("login failed");
    }
    
     
  }

  // login(a:any,p:any){
  //   // alert('login clicked');
  //   var acno=a.value;//1000
  //   var pswd=p.value;
  //   var userDetails=this.userDetails;

  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert("login successfull");
  //     }
  //     else{
  //       alert("invalid password");
  //     }
  //   }else{
  //     alert("invalid user details");
  //   }
  // }


  constructor(private router:Router,private ds:DataService) { }// 1st execute //depedancy injection
  //spl member function , automatically involks when an obj created

  ngOnInit(): void {//2nd execute - life cycle hooks of angular - 
    //initial process of component initialization
  }
 
}
