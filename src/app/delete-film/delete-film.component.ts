import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-delete-film',
  templateUrl: './delete-film.component.html',
  styleUrls: ['./delete-film.component.css']
})
export class DeleteFilmComponent implements OnInit {
  name:any
  films:any
  constructor(private details:DetailsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.showFilms();

  
  }

  filmObj:any=new FormGroup({
    name:new FormControl('')

  })

  // showFilm(){
  //   this.details.getFilm().subscribe((data: any)=>{
  //     this.directors=data
  //     console.log(this.directors)
  //   })
  // }
  showFilms(){
    this.details.getFilms().subscribe((data: any)=>{
      this.films=data
      console.log(this.films)
    })
  }

  onSubmit(){
   this.details.deleteFilm(this.filmObj.value.name).subscribe(res=>{
    this.films=res; 
    console.log(res)
   })
  }

}
