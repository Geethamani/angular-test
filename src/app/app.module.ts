import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiplierPipe } from './multiplier.pipe';
import { ProductComponent } from './product/product.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiplierPipe,
    ProductComponent,
    InventoryComponent,
    BlogComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
