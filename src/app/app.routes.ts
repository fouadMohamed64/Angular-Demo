import { Routes } from '@angular/router';
import { OrderComponent } from './Components/order/order.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'home', component: OrderComponent, title: 'Home' },
    // { path: 'aboutUs', component: AboutUsComponent, title: 'About Us' },
    // { path: 'contactUs', component: ContactUsComponent, title: 'Contact Us' },


    {
        path: '', component: MainLayoutComponent , children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: OrderComponent, title: 'Home' },
            { path: 'aboutUs', component: AboutUsComponent, title: 'About Us' },
            { path: 'contactUs', component: ContactUsComponent, title: 'Contact Us' },
            {path: 'productDetails/:id' , component: ProductDetailsComponent , title: 'Product Details'}
        ]
    },
    { path: 'login', component: LoginComponent , title:'Login' },

    // wild card component
    { path: '**', component: NotFoundComponent, title: '404' }
];
