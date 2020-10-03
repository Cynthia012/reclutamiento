import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(protected http:HttpClient) { }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getComments(idPost:string){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`);
  }

  getUser(idUser:string){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${idUser}`);
  }

  getUsers(){
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }




  

}
