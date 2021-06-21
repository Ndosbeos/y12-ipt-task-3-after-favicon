import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';



// COMPONENTS
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { MultimediahomeComponent } from './multimediahome/multimediahome.component';
import { TpshomeComponent } from './tpshome/tpshome.component';
import { HscmainComponent } from './hscmain/hscmain.component';
import { HscpaperComponent } from './hscpaper/hscpaper.component';
import { TrialmainComponent } from './trialmain/trialmain.component';
import { TrialpaperComponent } from './trialpaper/trialpaper.component';
import { QuizletComponent } from './quizlet/quizlet.component';
import { QuizlettpsComponent } from './quizlettps/quizlettps.component';
import { MultimediapageComponent } from './multimediapage/multimediapage.component';
import { TquizmatchComponent } from './tpsquizlet/tquizmatch/tquizmatch.component';
import { TquizflashcardsComponent } from './tpsquizlet/tquizflashcards/tquizflashcards.component';
import { TquizlearnComponent } from './tpsquizlet/tquizlearn/tquizlearn.component';
import { TquiztestComponent } from './tpsquizlet/tquiztest/tquiztest.component';
import { DataService } from './data.service';
import { SafePipe } from './safe.pipe';
import { HscchoiceComponent } from './hscchoice/hscchoice.component';
import { HscanswersComponent } from './hscanswers/hscanswers.component';
import { HscguideComponent } from './hscguide/hscguide.component';
import { MquizflashcardsComponent } from './multimediaquizlet/mquizflashcards/mquizflashcards.component';
import { MquizlearnComponent } from './multimediaquizlet/mquizlearn/mquizlearn.component';
import { MquizmatchComponent } from './multimediaquizlet/mquizmatch/mquizmatch.component';
import { MquiztestComponent } from './multimediaquizlet/mquiztest/mquiztest.component';


// ROUTING
const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'tpshome', component: TpshomeComponent},
    {path: 'multimediahome', component: MultimediahomeComponent},
    {path: 'hschome', component: HscmainComponent},
    {path: 'trialhome', component: TrialmainComponent},
    {path: 'multimediapage', component: MultimediapageComponent},
    {path: 'quizmulti', component: QuizletComponent},
    {path: 'quiztps', component: QuizlettpsComponent},
    {path: 'hscpaper/:id', component: HscpaperComponent},
    {path: 'hscchoice/:id', component: HscchoiceComponent},
    {path: 'hscsample/:id', component: HscanswersComponent},
    {path: 'hscguide/:id', component: HscguideComponent},
    {path: 'mqflash', component: MquizflashcardsComponent},
    {path: 'mqlearn', component: MquizlearnComponent},
    {path: 'mqtest', component: MquiztestComponent},
    {path: 'mqmatch', component: MquizmatchComponent},
    {path: '**', component: HomeComponent}
];


// MODULES
@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        PdfViewerModule,
        
        // ROUTING
        RouterModule.forRoot(
            appRoutes,
            //  { enableTracing: true } // <-- debugging purposes only
        )
    ],  // end imports
    declarations: [AppComponent, HomeComponent, MultimediahomeComponent, TpshomeComponent, HscmainComponent, HscpaperComponent, TrialmainComponent, TrialpaperComponent, QuizletComponent, QuizlettpsComponent, MultimediapageComponent, TquizmatchComponent, TquizflashcardsComponent, TquizlearnComponent, TquiztestComponent, SafePipe, HscchoiceComponent, HscanswersComponent, HscguideComponent, MquizflashcardsComponent, MquizlearnComponent, MquizmatchComponent, MquiztestComponent],
    bootstrap: [AppComponent],
    providers: [DataService],


})
export class AppModule {
}

