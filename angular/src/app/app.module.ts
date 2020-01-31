import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { ChildComponent } from './child/child.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUserComponent } from './user/update-user/update-user.component';
// import { PipeComponent } from './pipes/pipe/pipe.component';
import { CustompipePipe } from './custompipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    // ChildComponent,
    UsersComponent,
    UpdateUserComponent,
    // PipeComponent,
    CustompipePipe,
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
