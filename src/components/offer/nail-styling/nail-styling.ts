import { Component } from '@angular/core';
import { FaqComponent, FaqItem } from '../../faq/faq.component';

@Component({
    selector: 'app-nail-styling',
    imports: [FaqComponent],
    templateUrl: './nail-styling.html',
    styleUrl: './nail-styling.scss',
})
export class NailStyling {
    public faqItems: FaqItem[] = [
        {
            title: 'Manicure klasyczny',
            answer: 'Obejmuje złuszczenie naskórka, opiłowanie i wypolerowanie płytki paznokciowej, której nadajemy pożądany kształt. Płytkę paznokciową malujemy dowolnie wybranym kolorem lakieru zabezpieczając go bazami tak, aby paznokcie długo cieszyły nas nienagannym wyglądem. Po zakończonym zabiegu nawilżamy skórki profesjonalnym olejkiem, aby zapobiec nadmiernemu wysuszaniu a na dłonie aplikujemy krem odżywczy.',
        },
        {
            title: 'Manicure Shellac',
            answer:
                'Shellac to połączenie najlepszych cech klasycznych lakierów do paznokci – czyli łatwości w nakładaniu i ściąganiu, braku konieczności piłowania płytki paznokciowej, a także szybkości wykonania manicure oraz żelu – czyli wytrzymałości i nieścieralności. Dzięki temu ponad 14 dni można cieszyć się idealnie trwałym kolorem bez względu na to, jak intensywnie używamy naszych paznokci.' +
                '<br/><br/>' +
                'Wykonanie manicure hybrydowego Shellac jest podobne do wykonania klasycznego manicure. Shellac to produkt hipoalergiczny – nie powoduje żadnej szkody dla naturalnej płytki paznokcia.',
        },
        {
            title: 'Manicure hybrydowy',
            answer: 'Manicure hybrydowy likwiduje problem nieestetycznego odpryskiwania lakieru na paznokciach dłoni i stóp. Zapewniamy gładki i nieskazitelny efekt utrzymując się przez dwa tygodnie. Lakiery do paznokci są utwardzane światłem UV. Oferujemy bardzo szeroką gamę kolorystyczną (ok. 50 kolorów).',
        },
        {
            title: 'Manicure japoński odżywczy - P shaine',
            answer: 'Metoda zalecana na kruche paznokcie, łamliwe i rozdwajające się. Zabieg wzmacnia naturalne paznokcie nadając im połysk różowej perły. Ten unikatowy manicure nadaje paznokciom blask i zasila je w witaminy, keratynę, pyłek pszczeli oraz krzemionkę z morza japońskiego. Nie jest wskazane malowanie paznokci przez 4-5 dni.',
        },
        {
            title: 'Klasyczne malowanie i zdobienie paznokci',
            answer: 'Obejmuje klasyczne malowanie i zdobienie dowolną techniką. Naturalne paznokcie zabezpieczamy bazą odżywczą a na lakier nakładamy TOP – aby kolor utrzymywał się stosunkowo długo. Olejek i krem pielęgnacyjny w standardzie. Oferujemy bardzo szeroką gamę kolorystyczną profesjonalnych lakierów (ok. 100 kolorów) – najnowszych kolekcji.',
        },
        {
            title: 'Kąpiel parafinowa - zabieg pielęgnacyjny',
            answer: 'Wygładza i regeneruje suchą i szorstką skórę, uelastycznia ją. Wspomaga wchłanianie innych preparatów pielęgnacyjnych. Poprawia krążenie, rozluźnia mięśnie, koi bolące stawy. Zabieg silnie wzmacniający i nawilżający dla naszych dłoni i paznokci.',
        },
        {
            title: 'Odnawiająca pielęgnacja dłoni',
            answer: 'Zalecamy w pierwszym etapie zabiegu peeling głęboko oczyszczający, następnie masaż na bazie musu ciepłej świecy i kompres głęboko regenerujący. Magiczne złoto, wyciąg z rokietnika i magnolii, ponad 100 różnych bioaktywnych ekstraktów młodości idealnie nawilża, przyspiesza regenerację, rozświetla i liftinguje skórę, pozostawiając nasze dłonie jędrne i gładkie na długi czas.',
        },
        {
            title: 'Stylizacja i rekonstrukcja paznokci',
            answer:
                'Wykonujemy przedłużanie paznokci metodą akrylową i żelową w sposób stosunkowo mniej inwazyjny i szkodliwy dla płytki paznokciowej. Wykonane w ten sposób paznokcie mogą wyglądać bardzo naturalnie a przy okazji są dużo twardsze i bardziej wytrzymałe od naturalnych. Jest to świetne rozwiązanie dla osób, których biologiczne paznokcie są słabe, czy też są stosunkowo (poprzez charakter pracy) często narażone na uszkodzenia. Także dla osób, które kochają nienaganny wygląd swoich dłoni i paznokci na co dzień. Preferujemy bardzo naturalną stylizację i rekonstrukcję.' +
                '<br/><br/>' +
                '– stylizacja i rekonstrukcja metodą żelową' +
                '<br/>' +
                '– stylizacja i rekonstrukcja metodą akrylową' +
                '<br/>' +
                '– stylizacja natural tips' +
                '<br/>' +
                '– stylizacja natural french' +
                '<br/>' +
                '– uzupełnienie metodą żel/akryl' +
                '<br/>' +
                '– wtopienia i zdobienia',
        },
    ];
}
