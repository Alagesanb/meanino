import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';  
import {CommonService} from '../app/common.service';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank';
  address: string;
  name: string;
  id: number;
  constructor(private newService :CommonService,) {   }  
   Repdata;  
   valbutton ="Save";  


   onSave = function(user) {    
    user.mode= this.valbutton;  
     this.newService.saveUser(user)  
     .subscribe(data =>  {  alert(data.data);  
          
        
     }   
     , error => this.errorMessage = error )  
       
   }      
   edit = function(kk) {  
   this.id = kk._id;  
   this.name= kk.name;  
   this.address= kk.address;  
   this.valbutton ="Update";  
   }  
     
   delete = function(id) {  
   this.newService.deleteUser(id)  
   .subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
   }  

   
}
