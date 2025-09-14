import { Component } from '@angular/core';
import { FaqComponent, FaqItem } from '../../faq/faq.component';

@Component({
    selector: 'app-occasion-makeup',
    imports: [FaqComponent],
    templateUrl: './occasion-makeup.html',
    styleUrl: './occasion-makeup.scss',
})
export class OccasionMakeup {
    public faqItems: FaqItem[] = [
        {
            title: 'Makijaż dzienny',
            answer: 'Polega na ukryciu wad i zaakcentowaniu walorów urody. Polecany dla aktywnych pań, którym zależy na doskonałym i świeżym wyglądzie przez cały dzień. Może być wykonany w wersji lekkiej lub mocniejszej w zależności od upodobania klientki i typu urody.',
        },
        {
            title: 'Makijaż wieczorowy',
            answer: 'Wykonujemy go przy okazji różnego rodzaju spotkań towarzyskich, bankietów, przyjęć odbywających się w godzinach wieczorowych. W przypadku tego rodzaju makijażu operujemy ciemniejszymi i bardziej kontrastowymi kolorami po to, aby podkreślić urodę i nasze atuty w warunkach „sztucznego” światła – które jak wiemy „pochłania” kolor.',
        },
        {
            title: 'Makijaż ślubny',
            answer: 'Łączy on w sobie cechy makijażu dziennego i wieczorowego. Sprawia, że Panna Młoda świetnie wygląda w różnym typie oświetlenia: w świetle dziennym, oświetleniu kościoła oraz na sali weselnej w warunkach zmniejszonego światła. Decydują o tym specjalne kosmetyki i techniki ich nakładania. Makijaż ślubny cechuje duża trwałość i odporność na ścieranie, pot, wysoką temperaturę oraz wilgotność powietrza. Musi być on nienaganny, a zarazem bardzo precyzyjny.',
        },
        {
            title: 'Makijaż korekcyjny',
            answer: 'Jego głównym celem jest ukrycie defektów i wad urody takich jak naczynka, przebarwienia, znamiona płaskie, siniaki, trądzik itp. Stosowany jest nie tylko na twarzy ale również na innych widocznych częściach ciała np. szyi, dekolcie, plecach.',
        },
        {
            title: 'Makijaż fotograficzny',
            answer: 'Dostosowany głównie do błysku flesza towarzyszącego podczas zdjęć czy sesji zdjęciowej studyjnej bądź plenerowej. Charakteryzuje się mocnym podkreśleniem ramy – konturu oka i zdecydowaną rezygnacją z elementów odbijających światło tj. perły, brokatu na rzecz matów nadających głębię koloru.',
        },
    ];
}
