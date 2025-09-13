import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type OfferItem = {
    title: string;
    description: string;
    route: string;
    icon: string;
};

@Component({
    selector: 'app-offer',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './offer.component.html',
    styleUrls: ['./offer.component.scss'],
})
export class OfferComponent {
    public readonly offers: OfferItem[] = [
        {
            title: 'PIELĘGNACJA TWARZY',
            description: 'Bezpieczna i niezbędna, idealnie dobrana do potrzeb twojej skóry…',
            route: '/oferta/pielegnacja-twarzy',
            icon: '/assets/oferta-ikony/pielegnacja-twrzy.svg',
        },
        {
            title: 'KOSMETYKA Z APARATURĄ',
            description: 'Renomowana jakość, skuteczna biorewitalizacja…',
            route: '/oferta/kosmetyka-z-aparatura',
            icon: '/assets/oferta-ikony/kosmetyka-z-aparatura.svg',
        },
        {
            title: 'MEZOTERAPIA IGŁOWA',
            description: 'Niezwykle skuteczna terapia „healthy anti-aging”…',
            route: '/oferta/mezoterapia-iglowa',
            icon: '/assets/oferta-ikony/mizoteriapia-iglowa.svg',
        },
        {
            title: 'MAKIJAŻ OKOLICZNOŚCIOWY',
            description: 'Na każdą okazję możesz czuć się pięknie i wyjątkowo…',
            route: '/oferta/makijaz-okolicznosciowy',
            icon: '/assets/oferta-ikony/makijaz-okolicznosciowy.svg',
        },
        {
            title: 'MAKIJAŻ PERMANENTNY',
            description: 'Jeśli nie wyobrażasz sobie dnia bez idealnego makijażu…',
            route: '/oferta/makijaz-permanentny',
            icon: '/assets/oferta-ikony/makijaz-pernamentny.svg',
        },
        {
            title: 'STYLIZACJA PAZNOKCI',
            description: 'Nasze umiejętności i doświadczenie są do twojej dyspozycji…',
            route: '/oferta/stylizacja-paznokci',
            icon: '/assets/oferta-ikony/stylizacja-paznokci.svg',
        },
        {
            title: 'PODOLOGIA',
            description: 'Zajmiemy się pielęgnacją jak i terapią stóp problematycznych…',
            route: '/oferta/podologia',
            icon: '/assets/oferta-ikony/podologia.svg',
        },
        {
            title: 'KARBOKSYTERAPIA',
            description: 'Przełom medycyny estetycznej terapeutycznym gazem CO2…',
            route: '/oferta/karboksyterapia',
            icon: '/assets/oferta-ikony/karboksyterapia.svg',
        },
        {
            title: 'LASEROTERAPIA',
            description: 'Pozwala na efekty naprawcze, zwrotne i trwałe…',
            route: '/oferta/laseroterapia',
            icon: '/assets/oferta-ikony/laseroterapia.svg',
        },
        {
            title: 'BODY PIERCING',
            description: 'Sterylne kolczyki z antyuczuleniowej stali chirurgicznej…',
            route: '/oferta/body-piercing',
            icon: '/assets/oferta-ikony/body-piercing.svg',
        },
    ];
}
