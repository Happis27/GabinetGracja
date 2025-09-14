import { Component } from '@angular/core';
import { FaqComponent, FaqItem } from '../../faq/faq.component';

@Component({
    selector: 'app-carboxytherapy',
    imports: [FaqComponent],
    templateUrl: './carboxytherapy.html',
    styleUrl: './carboxytherapy.scss',
})
export class Carboxytherapy {
    public faqItems: FaqItem[] = [
        {
            title: 'Karboksyterapia',
            answer: 'Terapia dwutlenkiem węgla (nazwana także terapią z „cudownym gazem”), czyli inaczej karboksyterapia, została ogłoszona największym przełomem medycyny estetycznej od czasu zastosowania botoksu. Nic dziwnego – ilość zastosowań i skuteczność tej metody jest imponująca. Karboksyterapia na całym świecie stała się szybko bardzo ważnym narzędziem w walce z podstawowymi problemami pacjentów zgłaszających się do gabinetów medycyny estetycznej. Jest to bezpieczna, bardzo mało inwazyjna i klinicznie sprawdzona metoda doskonale radząca sobie z odmładzaniem skóry, walką z cellulitem, lokalnymi nadmiarami tkanki tłuszczowej, rozstępami, zwiotczeniami skóry, łysieniem, a nawet ogniskami łuszczycy, zaburzeniami krążenia obwodowego, czy owrzodzeniami i opóźnionym gojeniem ran. Zabieg polega na śródskórnym lub podskórnym precyzyjnym wstrzykiwaniu kontrolowanych dawek dwutlenku węgla (CO2), przy użyciu specjalnego urządzenia.',
        },
        {
            title: 'Główne obszary zastosowań:',
            answer:
                '– redukcja intensywnego cellulitu' +
                '<br/>' +
                '– alternatywa do liposukcji' +
                '<br/>' +
                '– minimalizowanie rozstępów' +
                '<br/>' +
                '– usuwanie zmarszczek' +
                '<br/>' +
                '– przywrócenie jędrności i elastyczności skóry twarzy oraz całego ciała' +
                '<br/>' +
                '– minimalizacja worków i cieni pod oczami' +
                '<br/>' +
                '– redukcja podwójnego podbródka' +
                '<br/>' +
                '– wzmocnienie i regeneracja cebulek włosowych oraz zapobieganie dalszej utracie włosów',
        },
    ];
}
