import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

const Routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  //{path: 'about', loadChildren: './about-page/about-page.module#AboutPageModule' }//OLD
  {path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(Routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

