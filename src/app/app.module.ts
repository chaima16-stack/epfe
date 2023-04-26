import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProjetComponent } from './project/projet/projet.component';
import { UserComponent } from './etudiant/user/user.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DispoComponent } from './dispo/dispo.component';
import { BinomeComponent } from './binome/binome.component';
import { EncadrentComponent } from './encadrent/encadrent.component';
import { FormsModule } from '@angular/forms';
import { EnseignantComponent } from './admin/enseignant/enseignant.component';
import { AddenseignantComponent } from './admin/enseignant/addenseignant/addenseignant.component';
import { HeaderComponent } from './admin/header/header.component';
import { RegisterComponent } from './register/register.component';
import { EtudiantComponent } from './admin/etudiant/etudiant.component';
import { SocieteComponent } from './admin/societe/societe.component';
import { AddbaseDonneesComponent } from './admin/base_donnees/addbase-donnees/addbase-donnees.component';
import { ListbaseDonneesComponent } from './admin/base_donnees/listbase-donnees/listbase-donnees.component';
import { FormationComponent } from './admin/formation/formation/formation.component';
import { AddformationComponent } from './admin/formation/addformation/addformation.component';
import { GroupeComponent } from './admin/groupe/groupe/groupe.component';
import { AddgroupeComponent } from './admin/groupe/addgroupe/addgroupe.component';
import { TechnologieComponent } from './admin/technologie/technologie/technologie.component';
import { AddtechnologieComponent } from './admin/technologie/addtechnologie/addtechnologie.component';
import { MethodeConceptionComponent } from './admin/MC/methode-conception/methode-conception.component';
import { AddmcComponent } from './admin/MC/addmc/addmc.component';
import { ProjetadComponent } from './admin/projetad/projetad.component';
import { DepotComponent } from './depot/depot.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    ProjetComponent,
    UserComponent,
    LoginComponent,
    ProfileComponent,
    DispoComponent,
    BinomeComponent,
    EncadrentComponent,
    EnseignantComponent,
    AddenseignantComponent,
    HeaderComponent,
    RegisterComponent,
    EtudiantComponent,
    SocieteComponent,
    AddbaseDonneesComponent,
    ListbaseDonneesComponent,
    FormationComponent,
    AddformationComponent,
    GroupeComponent,
    AddgroupeComponent,
    TechnologieComponent,
    AddtechnologieComponent,
    MethodeConceptionComponent,
    AddmcComponent,
    ProjetadComponent,
    DepotComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
