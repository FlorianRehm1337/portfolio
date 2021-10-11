import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';






const routes: Routes = [
  {path: '', component: GreetingComponent},
  {path: '', component: SkillsComponent},
  {path: '', component: ProjectsComponent},
  {path: '', component: AboutMeComponent},
  {path: '', component: ContactComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'data-protection', component: DataProtectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
