import { Component, OnInit } from '@angular/core';
import { RegisteruserService } from '../registeruser.service';
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoriespage',
  templateUrl: './categoriespage.component.html',
  styleUrls: ['./categoriespage.component.css']
})
export class CategoriespageComponent implements OnInit {
  public categorieNames = {};
  public categoriesData=[]
  public errorMessage:any;

  constructor(private router:Router,private regService:RegisteruserService) {
  }

  categories() {
    console.log(this.categorieNames);
    this.regService.categoriesForm(this.categorieNames);
    this.router.navigate(['/formdata']);
  }
  /*catSubmit(id){
    console.log(id);
    this.router.navigate(['/formdata', id]);
  }*/
 public isDisable = true;

  inputChange(inputData){
    console.log(inputData);
    this.regService.getcategoriNumber({categoryNo:inputData}).subscribe((data)=>{
      console.log(data);
      if(data.success == true){
        alert(data.message);
      }else{
this.isDisable = false;
      }
    })
  }
  ngOnInit() {
    this.regService.getCatogories().subscribe((data)=>{
      console.log(data.data);
      this.categoriesData = data.data;
    })
  }

}
