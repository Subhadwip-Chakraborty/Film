import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  films:any;
  constructor(private fb:FormBuilder,private details:DetailsService) { }


  register:any=this.fb.group({
    // _id:[null,Validators.required],
    name:['',Validators.required],
    boxOfficeCollection:['',Validators.required],
    rating:[null,Validators.required],
    director:['',Validators.required]
  })
  ngOnInit(): void {
    this.showMovies();
  }

  // get _id(){
  //   return this.register.get('_id')
  // }

  get name(){
    return this.register.get('name')
  }

  get boxOfficeCollection(){
    return this.register.get('boxOfficeCollection')
  }

  get rating(){
    return this.register.get('rating')
  }

  get director(){
    return this.register.get('director')
  }

  showMovies(){
     this.details.getFilms().subscribe(data=>{
      this.films=data
     })
  }

  onSubmit(register:any) {
    console.log(this.register.value);
    this.details.postFilms(this.register.value).
    subscribe(res=>{
      this.showMovies();
      console.log(res)})
  }
}

