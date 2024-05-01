import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { MenuComponent } from './menu/menu.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { Page4Component } from './pages/page4/page4.component';

const routes: Routes = [
  { path: '', redirectTo: '/page1(menu:menu)', pathMatch: 'full' },
  { 
    path: 'page1', 
    component: Page1Component,
    children: [
      {
        path: 'menu',
        component: MenuComponent,
        outlet: 'nav'
      }
    ]
  },
  { 
    path: 'page2', 
    component: Page2Component,
    children: [
      {
        path: 'menu',
        component: MenuComponent,
      }
    ]
  },
  { path: 'page3', component: Page3Component },
  { path: 'page4', component: Page4Component }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

