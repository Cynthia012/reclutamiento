import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServicesService } from './../services/services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  posts: any[] =[];
  user: any =[];
  id:string;
  band_conf: boolean=false;
  constructor(private rutaActiva: ActivatedRoute, protected service: ServicesService) {
    this.id=this.rutaActiva.snapshot.params.id;
    this.service.getUser(this.id)
    .subscribe(
      (data:any) => { 
        this.user=data;
        this.band_conf=true;
      },
      (error) => {
        console.error(error);
      }
    );

    this.service.getPosts()
    .subscribe(
      (data:any) => { 
        let j=0;
        for(let i=0;i<data.length;i++){
          if(data[i].userId==this.id){
            this.posts[j]=data[i];
            j++;
          }
        }
      },
      (error) => {
        console.error(error);
      }
    );
   }

  ngOnInit(): void {
  }

}
