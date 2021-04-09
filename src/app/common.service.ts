import { Injectable } from '@angular/core';   
  import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';  
  import { Observable, throwError } from 'rxjs';
  import { catchError, map } from 'rxjs/operators';
  
@Injectable()  
export class CommonService {  
  
  constructor(private http: HttpClient) { }  
  
  saveUser(user){      
    return this.http.post('http://localhost:8080/api/SaveUser/', user)  
                          
  }  
  
  GetUser(){       
    return this.http.get('http://localhost:8080/api/getUser/')  
                          
  }  
 deleteUser(id){   
    return this.http.post('http://localhost:8080/api/deleteUser/',{'id': id})  
                         
  }  
  
}  
