import { Component } from '@angular/core';
import { FaqComponent, FaqItem } from '../../faq/faq.component';

@Component({
    selector: 'app-podiatry',
    imports: [FaqComponent],
    templateUrl: './podiatry.html',
    styleUrl: './podiatry.scss',
})
export class Podiatry {
    public faqItems: FaqItem[] = [
        {
            title: 'Pedicure klasyczny',
            answer: 'Jest to klasyczna pielęgnacja stóp. Rozpoczyna się od złuszczenie skórek, opiłowania i wypolerowania płytki paznokciowej, której nadajemy pożądany kształt. Następnie oczyszczamy podeszwę stopy i wmasowujemy odpowiedni krem – w zależności od potrzeb skóry. Oczywiście płytkę paznokciową malujemy dowolnie wybranym kolorem lakieru zabezpieczając go bazami tak, aby długo cieszyły nas nienagannym wyglądem.',
        },
        {
            title: 'Pedicure leczniczy',
            answer: 'Oprócz typowych dla pedicure zabiegów zostaje wykonany kompres zmiękczający, który ułatwia usunięcie zrogowaciałego naskórka. Następnie dodatkowa okluzja głęboko zmiękcza, nawilża i regeneruje skórę stóp pozostawiając je z długotrwałym uczuciem lekkości.',
        },
        {
            title: 'Pedicure SPA',
            answer:
                'Rozpoczyna się hydromasażem kąpieli stóp w solach zmiękczających co ułatwia późniejsze usunięcie nadmiaru zrogowaciałego naskórka. Płytce paznokciowej nadajemy pożądany kształt, złuszczamy skórki, polerujemy i lakierujemy. Wykonujemy też gruboziarnisty piling całej stopy.' +
                '<br/><br/>' +
                'Następnie przy pomocy naturalnych preparatów(na bazie mięty, kamfory i mocznika) wykonujemy odprężający masaż relaksacyjny. Pobudzi to krążenie likwidując jednocześnie uczucie ciężkości i opuchnięcia zapewniając długotrwałe uczucie świeżości i lekkości.',
        },
        {
            title: 'Pedicure podologiczny',
            answer:
                'Obejmuje kompleksowe zabiegi w zakresie specjalistycznego pedicure:' +
                '<br/><br/>' +
                '– fachowe i bezbolesne usuwanie modzeli i odcisków – profesjonalne zabiegi na pękających piętach i rozpadlinach skórnych' +
                '<br/>' +
                '– profesjonalne zabiegi na stopach potliwych' +
                '<br/>' +
                '– opatrunki obciążające, korygujące, rekonstrukcje płytki paznokciowej' +
                '<br/>' +
                '– dobór i sprzedaż odpowiednich środków pielęgnacyjnych' +
                '<br/>' +
                '– pomoc w doborze odpowiedniego obuwia' +
                '<br/>' +
                '<br/>' +
                '<b>Oferujemy bezpłatne konsultacje podologiczne.<b/>',
        },
        {
            title: 'Klamra Frasera na wrastające paznokcie',
            answer:
                'Natychmiastową ulgę przynoszą indywidualne klamry ortonyksyjne typu Frasera. Klamry są indywidualnie dopasowane długością i kształtem ramion do typu paznokcia. Zaktywowana posługuje się sprężynującą siłą drutu, który odciągając boki paznokcia bezboleśnie koryguje jego kształt.' +
                '<br/>' +
                '<br/>' +
                'Cele ortonyksji:' +
                '<br/>' +
                '<br/>' +
                '– korekcja paznokcia wrastającego, wkęcającego' +
                '<br/>' +
                '– regeneracja chorobowo zmienianego łożyska' +
                '<br/>' +
                '– profilaktyka nawrotów po operacyjnym usunięciu paznokcia' +
                '<br/>' +
                '– natychmiastowa ulga w stanach bolesności wywołanych wrastaniem' +
                '<br/>' +
                '<br/>' +
                'Wskazania do zastosowania klamry:' +
                '<br/>' +
                '<br/>' +
                '– wrastanie i deformacja płytki' +
                '<br/>' +
                '– alternatywa po operacji chirurgicznych' +
                '<br/>' +
                '– zaburzenie wzrostu paznokcia' +
                '<br/>' +
                '– hiperkeratoza łożyska',
        },
        {
            title: 'Klamra korygująca',
            answer: 'Klamrę korygującą stosuje się w przypadku wrastających paznokci. Jest to cienki pasek ze stali chirurgicznej, który przykleja się na płytkę paznokciową. Przez ścisłe przyłączenie klamry z paznokciem działa ona elastycznie odginając brzegi paznokcia ku górze, dzięki czemu zapobiega jego wrastaniu w tkankę miękką. Płaska forma nie powoduje ucisku w obuwiu, klamra jest wodoodporna, niewidoczna i można ją przykrywać lakierem. W zależności od wielkości paznokcia stosuje się klamry różnej wielkości. Przed jej założeniem należy wykonać pedicure, ale bez kąpieli wodnej, używając jedynie płynu zmiękczającego skórę. U osób młodych często wystarcza jednorazowy zabieg, u starszych klamry zakłada się do całkowitego wyleczenia – aby paznokieć odzyskał właściwy kształt.',
        },
        {
            title: 'Malowanie paznokci stóp',
            answer:
                '<b>Klasyczne</b>' +
                '<br/>' +
                'Obejmuje złuszczenie naskórka, opiłowanie i wypolerowanie płytki paznokciowej, której nadajemy pożądany kształt. Płytkę paznokciową malujemy dowolnie wybranym kolorem lakieru zabezpieczając go bazami tak, aby paznokcie długo cieszyły nas nienagannym wyglądem.' +
                '<br/>' +
                '<br/>' +
                '<b>Malowanie paznokci stóp Shellac/hybryda</b>' +
                '<br/>' +
                '<br/>' +
                'Shellac to połączenie najlepszych cech klasycznych lakierów do paznokci – czyli łatwości w nakładaniu i ściąganiu, braku konieczności piłowania płytki paznokciowej, a także szybkości wykonania manicure oraz żelu – czyli wytrzymałości i nieścieralności. Dzięki temu ponad 14 dni można cieszyć się idealnie trwałym kolorem bez względu na to, jak intensywnie używamy naszych paznokci.' +
                '<br/>' +
                'Shellac to produkt hipoalergiczny – nie powoduje żadnej szkody dla naturalnej płytki paznokcia.' +
                '<br/>' +
                'Koniec z odpryskiwaniem, smugami i długim czasem wysychania lakieru.',
        },
        {
            title: 'Stylizacja i rekonstrukcja paznokci',
            answer: 'Obejmuje wszystkie dostępne metody (akrylowa, żelowa) przedłużania i rekonstrukcji płytki paznokciowej (np. w przypadku bardzo małej lub zniekształconej, uszkodzonej powierzchni).',
        },
        {
            title: 'Kąpiel parafinowa',
            answer: 'Oddaj się chwili przyjemności oraz zatroszcz się o swoje stopy. Aromatyczny peeling stóp z przemasowaniem złuszczy i wygładzi naskórek. Następnie nałożenie mocno odżywczej maski i wykonanie kąpieli parafinowej silnie wygładzi, zregeneruje i natłuści skórę stóp, a przy tym wspaniale odpręża.',
        },
    ];
}
