import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, Validators,FormBuilder, FormGroup } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule,MatInputModule} from '@angular/material';
import { FormuploadpageComponent } from "../formuploadpage/formuploadpage.component";
//import {MdDialog} from '@angular/material';
import { AlertdialogComponent } from '../alertdialog/alertdialog.component';
import { RegisteruserService } from '../registeruser.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const MObile_REGEX = /^[0-9]{10,10}$/;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  private myForm:FormGroup;


  constructor(private router:Router, private fb:FormBuilder,private regService:RegisteruserService) {

    this.myForm = fb.group({

      UserName: ['', Validators.compose([Validators.required])],
      MobileNumber: ['', Validators.compose([Validators.required, Validators.pattern(MObile_REGEX)])],
      Email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)])],
      PassWord: ['', Validators.compose([Validators.required])],

    });

  }
  save(value:any) {
    console.log(this.myForm.value);
    this.regService.registers(this.myForm.value).subscribe(data => {
      console.log(data);
      if (data.success == true) {

        this.router.navigate(['/categories',
        ]);
      } else {
        alert("please enter correct detailes");
      }
      // this.bookName = data;


    });

  }
  ngOnInit() {

};

}
