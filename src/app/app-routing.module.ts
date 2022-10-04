import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }
  ,{
    path: 'inicio',
    loadChildren: () => import('./folder/inicio/inicio.module').then( m => m.InicioPageModule)
  }
  ,{
    path: 'login',
    loadChildren: () => import('./folder/login/login.module').then( m => m.LoginPageModule)
  }
  ,{
    path: 'inicio-usuario',
    loadChildren: () => import('./folder/inicio-usuario/inicio-usuario.module').then( m => m.InicioUsuarioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
