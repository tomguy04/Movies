import { Component, OnInit } from '@angular/core';
import { Service } from '../object.service';
import { User } from '../user'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: User[]=[];

  constructor(private _Service: Service) { }

  ngOnInit() {
    console.log('in movie-list read')
    this._Service.getMovies().subscribe(
      movies => {
        this.movies = movies,
        console.log('the bikes in read comp ', this.movies)
      }
    );
  }

}
