import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: 'app/views/welcome/welcome.module#WelcomeModule'
      },
      {
        path: 'users',
        loadChildren: 'app/views/users/users.module#UsersModule'
      },
      { path: '**', redirectTo: 'users' }
    ])
  ],
  providers: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
