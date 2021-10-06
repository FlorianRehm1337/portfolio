import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';






const routes: Routes = [
  {path: '', component: GreetingComponent},
  {path: 'myskills', component: SkillsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'aboutme', component: AboutMeComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
