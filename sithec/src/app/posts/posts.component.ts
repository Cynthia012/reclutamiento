import { UsersComponent } from './../users/users.component';
import { ServicesService } from './../services/services.service';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] =[];
  users: any[] =[];
  comentarios: any[]=[];

  index:any;
  band_comment: boolean[]=[];

  constructor(protected service: ServicesService) {
    this.service.getPosts()
    .subscribe(
      (data:any) => { 
         this.posts=data;
      },
      (error) => {
        console.error(error);
      }
    );
    this.service.getUsers()
    .subscribe(
      (data:any) => { 
         this.users=data;
      },
      (error) => {
        console.error(error);
      }
    );
    }


    mostrarComentarios(idPost:string, i){
      if(this.band_comment[i]){
        this.band_comment[i]=false;
      }
      else{
      this.service.getComments(idPost)
    .subscribe(
      (data:any) => { 
         this.comentarios=data;
      },
      (error) => {
        console.error(error);
      }
    );
    this.band_comment[i]=true;
      }

  }
    

  ngOnInit(): void {
  }

}
