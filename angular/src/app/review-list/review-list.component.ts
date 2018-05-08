import { Component, OnInit } from '@angular/core';
import { Service } from '../object.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  movieId : String;
  myMovie : User;
  movies : User[]=[];
  constructor(private _service:Service, private _activatedRoute:ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.movieId = (params['id']);
      console.log('reviewlist component recd movieId ', this.movieId);
      })

    this._service.getMovie(this.movieId).subscribe(movie => {
      console.log('movie came back to review-list', movie);
      this.myMovie = movie;
    })
    this._service.getMovies().subscribe(
      movies => {
        this.movies = movies,
        console.log('the bikes in read comp ', this.movies)
      }
    );
  }

  onDelete(id: string) {
    console.log('delete movie', id);
    this._service.deleteMovie(id)
    .subscribe( returnedMovie=> {
      console.log('Returned Bike to delete ', returnedMovie)
       this.movies = this.movies.filter(p => p._id !== returnedMovie._id);
       console.log(this.movies);
       this._router.navigateByUrl("/")
       
    });
  }

}
