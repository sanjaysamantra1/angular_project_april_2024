import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';
import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';
import { authGuard } from './guards/auth.guard';
import { hasChangesGuard } from './guards/has-changes.guard';
import { userdetailsResolver } from './userdetails.resolver';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, canDeactivate: [hasChangesGuard] },
    {
        path: 'aboutus',
        component: AboutusComponent,
        canDeactivate: [hasChangesGuard]
    },
    {
        path: 'careers',
        component: CareersComponent,
        canActivateChild: [authGuard],
        canDeactivate: [hasChangesGuard],
        children: [
            { path: "permanent", component: PermanentJobsComponent },
            { path: "contract", component: ContractJobsComponent }
        ]
    },
    { path: 'contactus', component: ContactusComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'productdetails', component: ProductDetailsComponent },
    {
        path: 'users',
        component: UserListComponent,
        canActivate: [authGuard]
    },
    {
        path: 'userdetails/:id',
        component: UserDetailsComponent,
        resolve: { userInfo: userdetailsResolver }
    },
    { path: '', component: HomeComponent },
    { path: '**', component: NotfoundComponent }
];
