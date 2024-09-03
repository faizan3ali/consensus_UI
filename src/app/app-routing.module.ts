import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'search-result',
    loadChildren: () =>
      import('./search-result-page/search-result-page.module').then(
        (m) => m.SearchResultModule
      ),
  },
  {
    path: '',
    redirectTo: 'search-result',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'search-result', 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
