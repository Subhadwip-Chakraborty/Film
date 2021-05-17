import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent implements OnInit {
  directors:any
  constructor(private fb:FormBuilder,private details:DetailsService) { }

  ngOnInit(): void {
    this.showDirectors();
  }

  register:any=this.fb.group({
    name:['',Validators.required],
    age:['',Validators.required],
    gender:['',Validators.required],
    award:[null,Validators.required]
  })

  get name(){
    return this.register.get('name')
  }

  get age(){
    return this.register.get('age')
  }

  get gender(){
    return this.register.get('gender')
  }
  get award(){
    return this.register.get('award')
  }

  showDirectors(){
    this.details.getDirectors().subscribe((data: any)=>{
      this.directors=data
      console.log(this.directors)
    })
  }
  onSubmit(register:any) {
    console.log(register.value);
    this.details. postDirectors(this.register.value).
    subscribe(res=>{
      this.showDirectors();
      console.log(res)})
  }

}
