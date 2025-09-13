import { SaleComponent } from './../components/sale/sale.component';
import { AboutUsComponent } from './../components/about-us/about-us.component';
import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home-page/home.component';
import { ContactComponent } from '../components/contact-page/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'sprzedaz', component: SaleComponent },
    { path: 'kontakt', component: ContactComponent },
    { path: 'o-nas', component: AboutUsComponent },
    {
        path: 'oferta',
        children: [
            {
                path: '',
                loadComponent: () => import('../components/offer/offer.component').then((m) => m.OfferComponent),
            },
            {
                path: 'pielegnacja-twarzy',
                loadComponent: () => import('../components/offer/face-care/face-care').then((m) => m.FaceCare),
            },
            {
                path: 'kosmetyka-z-aparatura',
                loadComponent: () =>
                    import('../components/offer/apparatus-cosmetology/apparatus-cosmetology').then(
                        (m) => m.ApparatusCosmetology
                    ),
            },
            {
                path: 'mezoterapia-iglowa',
                loadComponent: () =>
                    import('../components/offer/needle-mesotherapy/needle-mesotherapy').then(
                        (m) => m.NeedleMesotherapy
                    ),
            },
            {
                path: 'makijaz-okolicznosciowy',
                loadComponent: () =>
                    import('../components/offer/occasion-makeup/occasion-makeup').then((m) => m.OccasionMakeup),
            },
            {
                path: 'makijaz-permanentny',
                loadComponent: () =>
                    import('../components/offer/permanent-makeup/permanent-makeup').then((m) => m.PermanentMakeup),
            },
            {
                path: 'stylizacja-paznokci',
                loadComponent: () => import('../components/offer/nail-styling/nail-styling').then((m) => m.NailStyling),
            },
            {
                path: 'podologia',
                loadComponent: () => import('../components/offer/podiatry/podiatry').then((m) => m.Podiatry),
            },
            {
                path: 'karboksyterapia',
                loadComponent: () =>
                    import('../components/offer/carboxytherapy/carboxytherapy').then((m) => m.Carboxytherapy),
            },
            {
                path: 'laseroterapia',
                loadComponent: () =>
                    import('../components/offer/laser-therapy/laser-therapy').then((m) => m.LaserTherapy),
            },
            {
                path: 'body-piercing',
                loadComponent: () =>
                    import('../components/offer/body-piercing/body-piercing').then((m) => m.BodyPiercing),
            },
        ],
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
