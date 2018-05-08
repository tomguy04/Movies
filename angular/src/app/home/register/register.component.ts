import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AuthService } from '../../auth.service';

import { User } from '../../user';
import { Bike } from '../../bike';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { Service } from '../../object.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();

  //bike = new Bike();

  registrationErrors: string[] = [];

  constructor(private _auth: AuthService, private _router: Router, private _service : Service) { }

  ngOnInit() {
  }

  onSubmit(formData:NgForm){
    event.preventDefault();
    const {value, valid} = formData;
    console.log('submitted', this.user);

    //create the review
    // this.bike.name = this.user.name;
    // this.bike.review = this.user.review;
    // this.bike.stars = this.user.stars;
    

    console.log('the movie ', this.user)
    //console.log('the review ', this.bike)
    this._service.createMovie(this.user).subscribe(movie=>{
      console.log('create movie in register', movie)
      
      //now create the review
      this._service.createReview(movie).subscribe(review=>{
        console.log('create review in register', review);
        formData.reset();
      })
      this.user = new User()
      this._router.navigateByUrl("/")
    })
  }

  onCancel(){
    this._router.navigateByUrl("/")
  }


}
