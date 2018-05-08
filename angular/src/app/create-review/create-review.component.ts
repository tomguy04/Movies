import { Component, OnInit } from '@angular/core';
import { Bike } from '../bike';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Service } from '../object.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../user';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {
  //bike = new Bike()
  user = new User();
  movieId : string;
  myMovie: User;
  sub: Subscription;
  //user: User;
  
  constructor(private _service:Service, private _activatedRoute:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.movieId = (params['id']);
      console.log('create review component recd movieId ', this.movieId);
      })
      //to get the movie name to display
      this._service.getMovie(this.movieId).subscribe(movie => {
        console.log('movie came back to review-list', movie);
        this.myMovie = movie;
      })
  }
  onSubmit(formData:NgForm){
    event.preventDefault();
    const {value, valid} = formData;
    console.log('submitted', this.user);
    this.user._id = this.movieId
    console.log('the movie with id and review data attached ', this.user._id)
    //now create the review
    this._service.createReview(this.user).subscribe(review=>{
      console.log('create review in register', review);
      formData.reset();
      this._router.navigateByUrl(`/movies/${this.movieId}`)

    })

;

      formData.reset();

    }
  onCancel(){
    this._router.navigateByUrl(`/`)
  }    

}
