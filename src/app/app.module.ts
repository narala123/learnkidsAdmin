import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatFormFieldModule,MatInputModule,MatMenuModule,MatTableModule} from '@angular/material';
import {MATERIAL_COMPATIBILITY_MODE,MAT_PLACEHOLDER_GLOBAL_OPTIONS} from '@angular/material';

//import { MaterialModule } from '@angular/material';
import { FormsModule,FormGroup, FormControl, FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule,Http,Response } from '@angular/http';
//import { MaterialModule } from '@angular/material';

//import { UPLOAD_DIRECTIVES } from 'ng2-file-uploader/ng2-file-uploader';

//import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import {FlexLayoutModule} from "@angular/flex-layout";
//import { routes } from './router/router.module';

import { RouterModule, Routes } from '@angular/router';
import { RegisteruserService } from './registeruser.service';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormuploadpageComponent } from './formuploadpage/formuploadpage.component';
import { CategoriespageComponent } from './categoriespage/categoriespage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AlertdialogComponent } from './alertdialog/alertdialog.component';
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';
import { CategoryDataTableComponent } from './category-data-table/category-data-table.component';
//import { CustomMaterial } from './custom-material';



const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollY: false
};


const appRoutes: Routes = [

  { path: 'registration',component: HomepageComponent },
  { path: 'formdata',component: FormuploadpageComponent },
  { path: 'categories',component: CategoriespageComponent },
  { path: 'login',component: LoginpageComponent },
  { path: 'CategoryDataTable',component:CategoryDataTableComponent }
  /*{ path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },*/
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FormuploadpageComponent,
    CategoriespageComponent,
    LoginpageComponent,
    AlertdialogComponent,
    CategoryDataTableComponent,



  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
     // { enableTracing: true }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)

    //RouterModule,
    // FlexLayoutModule,
   // routes,

    //MaterialModule.forRoot()

  ],
  entryComponents: [
    AlertdialogComponent,

  ],
  providers: [RegisteruserService,{provide:MATERIAL_COMPATIBILITY_MODE, useValue: true},
    {provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'always'}}],
  bootstrap: [AppComponent],

})
export class AppModule { }
