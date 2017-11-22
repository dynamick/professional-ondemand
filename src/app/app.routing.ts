import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {
        path: 'users',
        loadChildren: 'app/views/users/users.module#UsersModule'
      },
      {
        path: 'roles',
        loadChildren: 'app/views/roles/roles.module#RolesModule'
      },
      { path: '**', redirectTo: 'users' }
    ])
  ],
  providers: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
