import { Component } from '@angular/core';
import { FaqComponent, FaqItem } from '../../faq/faq.component';

@Component({
    selector: 'app-body-piercing',
    imports: [FaqComponent],
    templateUrl: './body-piercing.html',
    styleUrl: './body-piercing.scss',
})
export class BodyPiercing {
    public faqItems: FaqItem[] = [
        {
            title: 'Jakie materiały są wykorzystywane podczas zabiegu?',
            answer: 'Do wykonywania piercingu używamy wyłącznie sterylnych, jednorazowych narzędzi oraz kolczyków wykonanych z najwyższej jakości stali chirurgicznej (nierdzewnej), która jest antyalergiczna i bezpieczna dla skóry. Biżuteria dostępna w naszym salonie spełnia rygorystyczne normy bezpieczeństwa i estetyki.',
        },
        {
            title: 'Czy dzieci mogą wykonać zabieg przekłuwania uszu?',
            answer: 'Tak, wykonujemy przekłuwanie uszu również u dzieci – zawsze w obecności rodzica lub opiekuna prawnego. Nasz personel posiada doświadczenie w pracy z młodszymi klientami, zapewniając im komfort, poczucie bezpieczeństwa oraz przyjazną atmosferę.',
        },
        {
            title: 'Czy osoby niepełnoletnie mogą wykonać piercing?',
            answer: 'Tak, ale osoby poniżej 18. roku życia muszą posiadać pisemną zgodę rodzica lub opiekuna prawnego oraz jego obecność w trakcie zabiegu. Bez spełnienia tego warunku zabieg nie zostanie przeprowadzony.',
        },
        {
            title: 'Jakie miejsca można u Was przekłuć?',
            answer:
                'W naszym salonie wykonujemy piercing w następujących miejscach: ' +
                '<br/>' +
                '<br/>' +
                '- łuk brwiowy.' +
                '<br/>' +
                '- małżowina uszna.' +
                '<br/>' +
                '- skrzydełko nosa.' +
                '<br/>' +
                '- oraz pępek.' +
                '<br/>' +
                '<br/>' +
                'Zabiegi są przeprowadzane w sposób sterylny i bezpieczny, z uwzględnieniem indywidualnych preferencji klienta.',
        },
        {
            title: 'Jakie metody piercingu stosujecie?',
            answer:
                '<b>1. Metoda chirurgiczna – igłowa (typu wenflon):</b> wykorzystywana do przekłuć w mniej standardowych miejscach, takich jak pępek czy łuk brwiowy. Używamy jednorazowych, sterylnych igieł typu wenflon, co minimalizuje ryzyko infekcji i skraca czas gojenia.' +
                '<br/><br/>' +
                '<b>2. Metoda pistoletowa – STUDEX:</b> stosowana głównie do przekłuć uszu (małżowina). Pistolet marki Studex to nowoczesne i bezpieczne narzędzie, które jednocześnie przekłuwa i umieszcza kolczyk w uchu. System STUDEX jest zaprojektowany tak, by zminimalizować ból, zapewnić maksymalną sterylność i komfort zabiegu. Każdy kolczyk umieszczany jest w sterylnej kasecie, która otwierana jest bezpośrednio przed zabiegiem.',
        },
        {
            title: 'Czy zabieg piercingu jest bezpieczny?',
            answer: 'Tak – przestrzegamy najwyższych standardów higieny i bezpieczeństwa. Wszystkie narzędzia są jednorazowe lub sterylizowane zgodnie z normami medycznymi. Zabieg wykonuje przeszkolony i doświadczony personel, który również doradza w zakresie pielęgnacji i doboru biżuterii.',
        },
        {
            title: 'Jak wygląda pielęgnacja po zabiegu?',
            answer: 'Po zabiegu klient otrzymuje szczegółowe zalecenia dotyczące pielęgnacji miejsca przekłucia. Ważne jest regularne przemywanie środkiem antyseptycznym, unikanie dotykania brudnymi rękoma oraz noszenie luźnej odzieży (np. w przypadku pępka), by zapobiec podrażnieniom. Pełny czas gojenia zależy od miejsca przekłucia, ale zwykle trwa od kilku tygodni do kilku miesięcy.',
        },
    ];
}
