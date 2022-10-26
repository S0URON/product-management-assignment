import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: 'liste-produit', component: ListeProduitComponent },
  { path: 'ajouter-produit', component: AjouterProduitComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: 'liste-produit', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
