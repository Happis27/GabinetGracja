import { Component } from '@angular/core';
import { FaqComponent, FaqItem } from '../../faq/faq.component';

@Component({
    selector: 'app-needle-mesotherapy',
    imports: [FaqComponent],
    templateUrl: './needle-mesotherapy.html',
    styleUrl: './needle-mesotherapy.scss',
})
export class NeedleMesotherapy {
    public faqItems: FaqItem[] = [
        {
            title: 'Mezoterapia igłowa',
            answer: 'Zabieg mezoterapii mikroigłowej polega na bezpośrednim wprowadzeniu do skóry sub stancji aktywnych przy pomocy specjalnego rollera. Urządzenie bazuje na opatentowanej technologii DTS – gwarantującej maksymalną efektywność zabiegową. Mikronakłucia pobudzają proces namnażania włókien kolagenowych – dzięki czemu skóra w naturalny sposób się odmładza. W widoczny i efektywny sposób liftingujemy zmarszczki okolic oczu, ust, szyji i dekoltu. Gwarantujemy poprawę jędrności skóry – eliminujemy cellulit i rozstępy. Efekty osiągane są w dużej mierze od zastosowanych preparatów – dlatego pracujemy tylko na profesjonalnych i wyselekcjonowanych produktach.',
        },
        {
            title: 'Działanie',
            answer:
                '– mikronakłucia poprawiają transport składników aktywnych w głąb skóry' +
                '<br/>' +
                '– silna stymulacja procesów naprawczych skóry' +
                '<br/>' +
                '– poprawa mikrokrążenia',
        },
        {
            title: 'Efekty zabiegu',
            answer:
                '– redukcja zmarszczek mimicznych i statycznych' +
                '<br/>' +
                '– poprawa konturów twarzy' +
                '<br/>' +
                '– poprawa jędrności i elastyczności skóry' +
                '<br/>' +
                '– stymulacja produkcji kolagenu i elastyny' +
                '<br/>' +
                '– poprawa kolorytu cery',
        },
        {
            title: 'Przeciwwskazania do zabiegu',
            answer:
                'Są nimi ciąża, aktywny zapalny trądzik, trądzik różowaty, stany zapalne skóry np. opryszczka.' +
                '<br/><br/>' +
                'Zabieg rekomendujemy w serii 4-8 zabiegów, 1-2 razy w tygodniu.' +
                '<br/><br/>' +
                'Jako uzupełnienie zabiegów polecamy dermo kosmetyki do pielęgnacji domowej.',
        },
    ];
}
