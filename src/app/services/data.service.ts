import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //login name display
  currentUser: any;

  //login acno hold
  currentAcno:any;

  userDetails: any = {//object of objects
    1000: { acno: 1000, username: 'Jees', password: 1000, balance: 1000,transaction:[] },
    1001: { acno: 1000, username: 'Amal', password: 1001, balance: 1000,transaction:[]  },
    1002: { acno: 1000, username: 'Sarath', password: 1002, balance: 1000 ,transaction:[] }
  }

  constructor() { }

  register(acno: any, username: any, password: any) {
    var userDetails = this.userDetails;
    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = {
        acno,
        username,
        password,
        balance: 0,
        transaction:[] 
      }
      console.log(userDetails);

      return true
    }
  }
  login(acno: any, password: any) {

    var userDetails = this.userDetails;
    if (acno in userDetails) {
      if (password == userDetails[acno].password) {
        this.currentUser = userDetails[acno]['username']
        this.currentAcno=acno;
        return true
      }
      else {
        alert("password invalid");
        return false
      }

    }
    else {
      alert("invalid user details");
      return false
    }

  }

  deposit(acno: any, pswd: any, amt: any) {
    var userDetails = this.userDetails;
    var amount = parseInt(amt)
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        userDetails[acno]['balance'] += amount
        userDetails[acno]['transaction'].push({
          type:'Credit',
          amount
        })
        console.log(userDetails);
        return userDetails[acno]['balance']
      }
      else {
        alert("password invalid");
        return false
      }

    }
    else {
      alert("invalid user details");
      return false
    }

  }

  withdraw(acno: any, pswd: any, amt: any) {
    var userDetails = this.userDetails;
    var amount = parseInt(amt)
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        if (userDetails[acno]['balance'] > amount) {
          userDetails[acno]['balance'] -= amount
          userDetails[acno]['transaction'].push({
            type:'Debit',
            amount
          })
          console.log(userDetails);
          return userDetails[acno]['balance']
        }
      
        else{
          alert('insufficient balance');
          return false
        }
      }
      else {
        alert("password invalid");
        return false
      }   
  } 
    else {
      alert("invalid user details");
      return false
    }

  }
  getTransaction(acno:any){
    return this.userDetails[acno]['transaction']
  }
}

