import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: 'Posts', component: PostsComponent},
  {path: 'User/:id', component: UsersComponent},
  {path: '', pathMatch:'full', redirectTo:'Posts'},
  {path: '**', pathMatch:'full', redirectTo:'Posts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
