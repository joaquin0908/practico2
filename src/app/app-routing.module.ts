import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'platos/:category',
    loadChildren: () => import('./platos/platos.module').then( m => m.PlatosPageModule)
  },
  {
    path: '**', // cualquier otra ruta que no sea las anteriores
    redirectTo: '' // redireccione a la ruta principal
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
