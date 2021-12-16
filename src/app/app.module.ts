import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookService } from './service/book.service';
import { BookCategoryComponent } from './components/book-category/book-category.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { ViewbookComponent } from './components/viewbook/viewbook.component';
import { RegistrationService } from './service/registration.service';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { UpdateRegistrationComponent } from './components/update-registration/update-registration.component';
import { ShowRegistrationComponent } from './components/show-registration/show-registration.component';
import { UpdatebookComponent } from './components/updatebook/updatebook.component';
import { AddBookcategoryComponent } from './components/add-bookcategory/add-bookcategory.component';
import { ViewBookcategoryComponent } from './components/view-bookcategory/view-bookcategory.component';
import { ListBookcategoryComponent } from './components/list-bookcategory/list-bookcategory.component';
import { UpdateBookcategoryComponent } from './components/update-bookcategory/update-bookcategory.component';
import { BookCategory } from './entity/book-category';
import { ListOrderbookComponent } from './components/list-orderbook/list-orderbook.component';
import { ListAuthorComponent } from './components/list-author/list-author.component';
import { UpdateAuthorComponent } from './components/update-author/update-author.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';

const routes: Routes = [
  // {path: 'books/:id', component: BookDetailsComponent},
  { path: 'users', component: RegistrationComponent },
  { path: 'books', component: BookListComponent },
  { path: 'addBooks', component: AddbookComponent },
  { path: 'viewBooks/:bookId', component: ViewbookComponent },
  { path: 'search/:keyword', component: BookListComponent },
  { path: 'category/:id', component: BookListComponent },
  { path: 'view-registration', component: ViewRegistrationComponent },
  { path: 'update-registration/:registerId', component: UpdateRegistrationComponent },
  { path: 'show-registration/:registerId', component: ShowRegistrationComponent },
  { path: 'bookcategory', component: ListBookcategoryComponent },
  { path: 'createbook', component: BookCategory },
  { path: 'update/:id', component: UpdateBookcategoryComponent },
  { path: 'addbookcategory', component: BookCategoryComponent },
  { path: 'getby/:id', component: ViewBookcategoryComponent },
  { path: 'orders', component: ListOrderbookComponent },
  {path: 'home',component:ListAuthorComponent },
  { path: 'updateAuthor/:id', component: UpdateAuthorComponent },
  {path: 'addAuthor',component:AddAuthorComponent },

  { path: '', redirectTo: '/books', pathMatch: 'full' }
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    // PageNotFoundComponent,
    BookCategoryComponent,
    MenuComponent,
    RegistrationComponent,
    AddbookComponent,
    ViewbookComponent,
    ViewRegistrationComponent,
    UpdateRegistrationComponent,
    ShowRegistrationComponent,
    UpdatebookComponent,
    AddBookcategoryComponent,
    ViewBookcategoryComponent,
    ListBookcategoryComponent,
    UpdateBookcategoryComponent,
    ListOrderbookComponent,
    ListAuthorComponent,
    UpdateAuthorComponent,
    AddAuthorComponent
    // SearchComponent,
    // BookDetailsComponent,
    // CartDetailsComponent,
    // CartStatusComponent,
    // CheckoutComponent
    // JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BookService, RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
