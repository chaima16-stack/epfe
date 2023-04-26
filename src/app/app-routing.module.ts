import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { UserComponent } from './etudiant/user/user.component';
import { LoginComponent } from './login/login.component';
import { ProjetComponent } from './project/projet/projet.component';
import { ProfileComponent } from './profile/profile.component';
import { DispoComponent } from './dispo/dispo.component';
import { BinomeComponent } from './binome/binome.component';
import { EncadrentComponent } from './encadrent/encadrent.component';
import { EnseignantComponent } from './admin/enseignant/enseignant.component';
import { AddenseignantComponent } from './admin/enseignant/addenseignant/addenseignant.component';
import { RegisterComponent } from './register/register.component';
import { ListbaseDonneesComponent } from './admin/base_donnees/listbase-donnees/listbase-donnees.component';
import { AddbaseDonneesComponent } from './admin/base_donnees/addbase-donnees/addbase-donnees.component';
import { FormationComponent } from './admin/formation/formation/formation.component';
import { AddformationComponent } from './admin/formation/addformation/addformation.component';
import { GroupeComponent } from './admin/groupe/groupe/groupe.component';
import { AddgroupeComponent } from './admin/groupe/addgroupe/addgroupe.component';
import { TechnologieComponent } from './admin/technologie/technologie/technologie.component';
import { AddtechnologieComponent } from './admin/technologie/addtechnologie/addtechnologie.component';
import { MethodeConceptionComponent } from './admin/MC/methode-conception/methode-conception.component';
import { AddmcComponent } from './admin/MC/addmc/addmc.component';
import { EtudiantComponent } from './admin/etudiant/etudiant.component';
import { SocieteComponent } from './admin/societe/societe.component';
import { ProjetadComponent } from './admin/projetad/projetad.component';
import { DepotComponent } from './depot/depot.component';




const routes: Routes = [
  {path:"accueil", component:HomeComponent},
  {path:"user", component:UserComponent},
  {path:"login", component:LoginComponent},
  {path:"profile", component:ProfileComponent},
  {path:"register", component:RegisterComponent},
  {path:"diposer", component:DispoComponent},
  {path:"binome", component:BinomeComponent},
  {path:"encadrant", component:EncadrentComponent},
  {path:"projet", component:ProjetComponent},
  {path:"depot", component:DepotComponent},
  {path:"admin",children:[
    {path:'enseignants',component:EnseignantComponent},
    {path:'addenseignant',component:AddenseignantComponent},
    {path:'bd',component:ListbaseDonneesComponent},
    {path:'addbd',component:AddbaseDonneesComponent},
    {path:'formation',component:FormationComponent},
    {path:'addformation',component:AddformationComponent},
    {path:'groupe',component:GroupeComponent},
    {path:'addgroupe',component:AddgroupeComponent},
    {path:'technologie',component:TechnologieComponent},
    {path:'addtech',component:AddtechnologieComponent},
    {path:'mc',component:MethodeConceptionComponent},
    {path:'addmc',component:AddmcComponent},
    {path:'etudiant',component:EtudiantComponent},
    {path:'societe',component:SocieteComponent},
    {path:'projet',component:ProjetadComponent},
  ]}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
