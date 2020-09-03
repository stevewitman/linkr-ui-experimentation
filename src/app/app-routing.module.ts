import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'links',
    loadChildren: () => import('./features/links/links.module').then(m => m.LinksModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./features/notes/notes.module').then(m => m.NotesModule)
  },
  {
    path: 'lists',
    loadChildren: () => import('./features/lists/lists.module').then(m => m.ListsModule)
  },
  {
    path: 'reminders',
    loadChildren: () => import('./features/reminders/reminders.module').then(m => m.RemindersModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
