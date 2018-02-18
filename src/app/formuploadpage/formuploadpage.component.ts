import { Component, OnInit,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { Router,ActivatedRoute  } from '@angular/router';
import { FormControl, Validators,FormBuilder, FormGroup } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
//import { UPLOAD_DIRECTIVES } from 'ng2-file-uploader/ng2-file-uploader';
import { RegisteruserService } from '../registeruser.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-formuploadpage',
  templateUrl: './formuploadpage.component.html',
  styleUrls: ['./formuploadpage.component.css'],

})
export class FormuploadpageComponent implements OnInit {
  public users = [];
  public catogoriesNames=[];
  public tiles = [];
  uploadFile:any;
  image:any;
  private uploadForm:FormGroup;
  id:number;
  private sub: any;
  public categoriesData=[];
  public dropDownCount={};
  catData:any = {};

  constructor(private router:Router, private route: ActivatedRoute,private fb:FormBuilder, private regService:RegisteruserService) {

    this.uploadForm = fb.group({
      Word: ['', Validators.compose([Validators.required])],
      ImageUrl: ['', Validators.compose([Validators.required])],
      WordFamily: ['', Validators.compose([Validators.required])],
      Description: ['', Validators.compose([Validators.required])],

    })
    this.tiles = [
      {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];
  }

  public dropDownnumbers = [1,2,3,4,5,6,7,8,9,10];
  handleUpload(event):void {
    console.log(event);
    this.readThis(event.target);
  }

  readThis(inputValue:any):void {
    var file:File = inputValue.files[0];

    var myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.image = myReader.result;
     // console.log(this.image);
    }
    myReader.readAsDataURL(file);
  }
  uploadData(value:any){
    //console.log(this.uploadForm.value);
    this.uploadForm.value.imageData = this.image;
    this.uploadForm.value.categoryData = this.catData;
    console.log(this.uploadForm.value);
    this.regService.uploadDataForm(this.uploadForm.value);
  }


  ngOnInit() {
    this.regService.getUsers().subscribe((data)=> {
      console.log(data);
      this.users = data.data;
     // console.log(this.users);

      this.regService.getCatogories().subscribe((data)=>{
        console.log(data.data);
        this.categoriesData = data.data;
      });

      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number

        // In a real app: dispatch action to load the details here.
      });
    });

  }
public dropDowns;
  public countDrops = [];
  Count(num){
    console.log(typeof num);
   this.dropDowns = new Array(parseInt(num));
    for(var i = 0;i<this.dropDowns.length; i++){
      this.countDrops[i] = i;
    }
    return this.countDrops;


  }
  public changeDropDown(){
    console.log(this.catData);

  }



}
