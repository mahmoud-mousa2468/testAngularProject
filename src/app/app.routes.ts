import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';
import { logedGuard } from './core/guard/loged.guard';
export const routes: Routes = [
    {
        path: "", loadComponent: () => import('./layouts/blank-layout/blank-layout.component').then(m => m.BlankLayoutComponent),
        canActivate: [authGuard],
        children: [
            { path: "", redirectTo: "home", pathMatch: 'full' },
            { path: "home", loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
            { path: "brands", loadComponent: () => import("./components/brands/brands.component").then(m => m.BrandsComponent) },
            { path: "branddetail", loadComponent: () => import("./components/branddetail/branddetail.component").then(m => m.BranddetailComponent) },
            { path: "cart", loadComponent: () => import("./components/cart/cart.component").then(m => m.CartComponent) },
            { path: "categories", loadComponent: () => import("./components/categories/categories.component").then(m => m.CategoriesComponent) },
            { path: "categorydetail/:id", loadComponent: () => import("./components/categorydetail/categorydetail.component").then(m => m.CategorydetailComponent) },
            { path: "products", loadComponent: () => import("./components/products/products.component").then(m => m.ProductsComponent) },
            { path: "productdetail/:id", loadComponent: () => import("./components/productdetail/productdetail.component").then(m => m.ProductdetailComponent) },
            { path: "wishlist", loadComponent: () => import("./components/wishlist/wishlist.component").then(m => m.WishlistComponent) },
            { path: "allorders", loadComponent: () => import("./components/allorders/allorders.component").then(m => m.AllordersComponent) },
            { path: "payment/:id", loadComponent: () => import("./components/payment/payment.component").then(m => m.PaymentComponent) },
        ]
    }, {
        path: "", loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
        canActivate: [logedGuard],
        children: [
            { path: "", redirectTo: "login", pathMatch: "full" },
            { path: "login", loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },
            { path: "register", loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent) },
            { path: "forgetpassword", loadComponent: () => import('./components/forgetpassword/forgetpassword.component').then(m => m.ForgetpasswordComponent) },
        ]
    }, {
        path: "**", loadComponent: () => import('./components/notfound/notfound.component').then(m => m.NotfoundComponent)
    }
];
