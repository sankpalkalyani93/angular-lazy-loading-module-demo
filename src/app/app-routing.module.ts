import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModule } from './feature/feature.module';

const routes: Routes = [
  { path:'feature', loadChildren: () => import('./feature/feature.module').then(m => FeatureModule)},
  { path: '', redirectTo: '/feature', pathMatch: 'full'} // default route to feature module
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
