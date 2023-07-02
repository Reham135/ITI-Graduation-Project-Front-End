import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/Authentication/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OrdersComponent } from './components/User Profile/orders/orders.component';
import { OrderDetailsComponent } from './components/User Profile/order-details/order-details.component';
import { ReviewComponent } from './components/User Profile/review/review.component';
import { AllAddressesComponent } from './components/User Profile/all-addresses/all-addresses.component';
import { EditAddressesComponent } from './components/User Profile/edit-addresses/edit-addresses.component';
import { AddAddressesComponent } from './components/User Profile/add-addresses/add-addresses.component';
import { ChangePasswordComponent } from './components/User Profile/change-password/change-password.component';
import { ProfileComponent } from './components/User Profile/profile/profile.component';
import { SidebarComponent } from './components/Dashboard/Ahmed/sidebar/sidebar.component';
import { ProductsComponent } from './components/Dashboard/Ahmed/products/products.component';
import { EditProductComponent } from './components/Dashboard/Ahmed/edit-product/edit-product.component';
import { AddProductComponent } from './components/Dashboard/Ahmed/add-product/add-product.component';
import { CategoriesComponent } from './components/Dashboard/Ahmed/categories/categories.component';
import { EditCategoryComponent } from './components/Dashboard/Ahmed/edit-category/edit-category.component';
import { AddCategoryComponent } from './components/Dashboard/Ahmed/add-category/add-category.component';
import { HeaderDashboardComponent } from './components/Dashboard/Ahmed/header-dashboard/header-dashboard.component';
import { UsersComponent } from './components/Dashboard/Adel/users/users.component';
import { UserDetailsComponent } from './components/Dashboard/Adel/user-details/user-details.component';
import { AddUserComponent } from './components/Dashboard/Adel/add-user/add-user.component';
import { OrdersDashboardComponent } from './components/Dashboard/Adel/orders-dashboard/orders-dashboard.component';
import { OrderDetailsDashboardComponent } from './components/Dashboard/Adel/order-details-dashboard/order-details-dashboard.component';
import { ReviewsDashboardComponent } from './components/Dashboard/Adel/reviews-dashboard/reviews-dashboard.component';
import { DashboardComponent } from './components/Dashboard/Adel/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationInterceptor } from './Interceptors/authentication.interceptor';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    AboutUsComponent,
    ContactUsComponent,
    OrdersComponent,
    OrderDetailsComponent,
    ReviewComponent,
    AllAddressesComponent,
    EditAddressesComponent,
    AddAddressesComponent,
    ChangePasswordComponent,
    ProfileComponent,
    SidebarComponent,
    ProductsComponent,
    EditProductComponent,
    AddProductComponent,
    CategoriesComponent,
    EditCategoryComponent,
    AddCategoryComponent,
    HeaderDashboardComponent,
    UsersComponent,
    UserDetailsComponent,
    AddUserComponent,
    OrdersDashboardComponent,
    OrderDetailsDashboardComponent,
    ReviewsDashboardComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor()
  {
    var token =
    "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjNhOTQxNGY0LWQ5ZTgtNGZlOC04NWNlLWVjMTE1M2NhMGVhNiIsIlJvbGUiOiJBZG1pbiIsImV4cCI6MTY4OTg5MzgwM30.XIvH0iZO5-Yn8D5rOhVfPQIYnvSEIjaj7x7j6Uzss2M";
    localStorage.setItem("token",token);
  }
}
