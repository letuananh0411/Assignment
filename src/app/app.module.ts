import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { GopyComponent } from './gopy/gopy.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { DoittComponent } from './doitt/doitt.component';
import { DanhmmhComponent } from './danhmmh/danhmmh.component';
import { TracnghiemComponent } from './tracnghiem/tracnghiem.component';


const appRoutes: Routes = [
  { path: 'trangchu', component:TrangchuComponent },
  { path: 'lienhe', component:LienheComponent },
  { path: 'gioithieu', component:GioithieuComponent },
  { path: 'hoidap', component:HoidapComponent },
  { path: 'gopy', component:GopyComponent },
  { path: 'dangnhap', component:DangnhapComponent},
  { path: 'dangky', component:DangkyComponent},
  { path: 'doimatkhau', component:DoimatkhauComponent},
  { path: 'doitt', component:DoittComponent},
  { path: 'danhmmh', component:DanhmmhComponent},
  { path: 'tracnghiem', component:TracnghiemComponent},
  // { path: 'heroes', component: HeroListComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    LienheComponent,
    GioithieuComponent,
    HoidapComponent,
    GopyComponent,
    DangnhapComponent,
    DangkyComponent,
    DoimatkhauComponent,
    DoittComponent,
    DanhmmhComponent,
    TracnghiemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
    
 
  //     RouterModule.forRoot([ 
  //       { path: '', 	component: HcnComponent }, 
  //       {path: 'hcn', component:HcnComponent},
        
  //   ]),
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
