import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HomepageComponent } from './homepage/homepage.component';
import { FormuploadpageComponent } from './formuploadpage/formuploadpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

@Injectable()
export class RegisteruserService {
  public users = [];
/*public extractData:String;
  public handleErrorObservable:String;*/
  constructor(private http:Http) {
  }

  registers(regList) {
    console.log(regList);
    return this.http.post("http://192.168.0.113:3000/regApi/saveusers", regList).map((res:Response)=>res.json());
  }

  loginUsers(users){
    console.log(users);
   /* let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});*/
    return this.http.post("http://192.168.0.113:3000/regApi/loginusers", users).map((res:Response)=>res.json());
  }

  getUsers():Observable<any> {
    return this.http.get("http://192.168.0.113:3000/regApi/getUsers").map((res:Response) => res.json());
  }

  uploadDataForm(data) {
    console.log(data);
    return this.http.post("http://192.168.0.113:3000/wordApi/saveword", data).subscribe();
  }

  categoriesForm(catData) {
    console.log(catData);
    return this.http.post("http://192.168.0.113:3000/categoryApi/savecatgoryname", catData).subscribe();
  }

  getCatogories():Observable<any> {
    return this.http.get("http://192.168.0.113:3000/categoryApi/getcategories").map((res:Response) => res.json());
  }
  getcategoriNumber(inputData){
  return this.http.post("http://192.168.0.113:3000/categoryApi/getCategoriNumber",inputData).map((res:Response) => res.json());

}
}
