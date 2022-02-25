import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PoemDetailComponent } from './components/poem-detail/poem-detail.component';
import { PoemListComponent } from './components/poem-list/poem-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: PoemListComponent },
  { path: 'detail', component: PoemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
