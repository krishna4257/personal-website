import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path:'homepage', component: HomepageComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'resume', component:ResumeComponent},
  {path:'about', component:AboutComponent},
  {path:'', redirectTo: 'about', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent, GalleryComponent, ResumeComponent, AboutComponent];