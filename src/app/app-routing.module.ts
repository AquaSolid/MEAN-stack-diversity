import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from "./dashboard/dashboard.component";
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './user-detail/user-detail.component';


const routes: Routes = [
    {
        path: 'users',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: UserDetailComponent
            },
            {
                path: ':userId',
                component: UserDetailComponent
            }
        ]
    },
    {path: '**', redirectTo: '/users', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/