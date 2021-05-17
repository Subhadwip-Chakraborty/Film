import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-upadte-details',
  templateUrl: './upadte-details.component.html',
  styleUrls: ['./upadte-details.component.css']
})
export class UpadteDetailsComponent implements OnInit {
  result:any
  constructor(private details:DetailsService) { }

  ngOnInit(): void {
   
  }
  


  register:any=new FormGroup({
    name:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    award:new FormControl('',Validators.required)
  })
  get name(){
    return this.register.get('name')
  }
  get age(){
    return this.register.get('age')
  }
  get award(){
    return this.register.get('award')
  }

 

  onSubmit(){
    this.details.updateDirector(this.register.value).subscribe(res=>{
      this.result=res
      console.log(this.result)
      // alert(this.result);
    })
  }
  // onSubmit(){
  //   this.details.deleteFilm(this.filmObj.value.name).subscribe(res=>{
  //    this.films=res; 
  //    console.log(res)
  //   })

}
