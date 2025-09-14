import { Component } from '@angular/core';
import { FaqComponent, FaqItem } from '../../faq/faq.component';

@Component({
    selector: 'app-apparatus-cosmetology',
    imports: [FaqComponent],
    templateUrl: './apparatus-cosmetology.html',
    styleUrl: './apparatus-cosmetology.scss',
})
export class ApparatusCosmetology {
    public faqItems: FaqItem[] = [
        {
            title: 'Mikrodermabrazja diamentowa',
            answer:
                'Bezinwazyjny zabieg wygładzania skóry przy użyciu głowic pokrytych mikrokryształkami diamentu, które ścierają wierzchnią warstwę skóry.' +
                '<br/><br/>' +
                'Stare, obumarłe resztki, brud, cząstki zanieczyszczeń, martwy naskórek zostają automatycznie odsysane. Zabieg usuwa złuszczeni, nierówności, skazy, zmarszczki, wypryski, starcze plamy, niechciane przebarwieni. W efekcie tych następstw dochodzi do wzmożonej produkcji nowych komórek wypychanych do góry (aby zastąpić komórki usunięte) dając spektakularny efekt w odnowie skóry. W połączeniu z kosmetykami, które przenikają przez górną warstwę skóry i osiągają poziom skóry właściwej uzupełniają naturalne składniki odżywcze stymulując witalność komórek. Rezultatem zabiegu jest oczyszczona zdrowa, elastyczna skóra. Złuszczanie jest stopniowe i równomierne — brak niebezpieczeństw powstawania blizn. Jest to zabieg bezpieczny, bezbolesny, nie powoduje uczuleń.' +
                '<br/><br/>' +
                'Zalety zabiegu mikrodermabrazji:' +
                '<br/><br/>' +
                '– całkowita bezbolesność i bezpieczeństwo zabiegu' +
                '<br/>' +
                '– możliwość wykonywania zabiegu na wrażliwej skórze' +
                '<br/>' +
                '– szybka i widoczna regeneracja' +
                '<br/>' +
                '– bezpieczna, kontrolowana głębokość ścierania' +
                '<br/>' +
                '– odnowa komórek skóry' +
                '<br/>' +
                '– pobudzanie produkcji kolagenu i elastyny' +
                '<br/>' +
                '– brak ograniczeń wiekowych' +
                '<br/>' +
                '– możliwa częstotliwość powtórzeń' +
                '<br/>' +
                '– idealnie zastępuje piling chemiczny' +
                '<br/>' +
                '– likwiduje drobne zmarszczki' +
                '<br/>' +
                '– przyspiesza krążenie krwi i limfy' +
                '<br/>' +
                '– wzmacnia systemy obronne skóry' +
                '<br/>' +
                '– zwiększa chłonność substancjo odżywczych',
        },
        {
            title: 'Peeling kawitacyjny',
            answer: 'Jest to nowy system do głębokiej pielęgnacji skóry przy pomocy fali ultradźwiękowej bez efektów ubocznych. Głębokie oczyszczanie i odsłonięcie porów pozwala na lepszą wymianę jonów i dotlenienie skóry. Efekt wibracji powoduje rozpad złogów melaniny a odbarwienia i skazy nikną. Zabieg eliminuje stare komórki, pozbywa się toksyn, redukują zmarszczki. Bezpieczne wstrząsy poprawiają absorpcję wody w komórce, przyspieszają nawodnienie skóry, zwiększają metabolizm i odnowę. Dzięki temu skóra odzyskuje swoją elastyczność i blask. Oczyszczanie skóry jest sukcesywne i bezbolesne a sam zabieg bezpieczny — nie powoduje uczuleń.',
        },
        {
            title: 'Mezoterapia mikroigłowa BDR',
            answer:
                'Jest połączeniem technologii medycznej i kosmetycznej. Jest to innowacyjny zabieg, który pobudza procesy regeneracji, odmładza skórę i wygładza zmarszczki. Metoda BDR to kontrolowana odpowiednią długością mikroigiełek perforacja (nakłuwanie naskórka) bez ryzyka uszkodzenia naczyń krwionośnych. Zabieg jest bezbolesny. W kosmetycznej mezoterapii powstaje kilka tysięcy mikrokanalików przez które transportowane są wgłąb skóry skoncentrowane składniki aktywne. W krótkim czasie (15 min) skóra jest w stanie wchłonąć od 80 – 90% produktu kosmetycznego. W tradycyjnej aplikacji i mezoterapii bezigłowej jest to zaledwie kilka procent. Mezoterapia mikroigłowa to unikalna technologia i jedyna metoda gwarantująca efekty już po pierwszym zabiegu porównywalne z zabiegami medycyny estetycznej.' +
                '<br/><br/>' +
                'Efekty zabiegu:' +
                '<br/>' +
                '- poprawa jędrności i elastyczności skóry' +
                '<br/>' +
                '- poprawa konturów twarzy' +
                '<br/>' +
                '- redukcja zmarszczek mimicznych i statycznych' +
                '<br/>' +
                '- stymulacja produkcji kolagenu i elastyny' +
                '<br/><br/>' +
                'Metoda mezoterapii mikroigłowej BDR obejmuje 3 wersje zabiegów:' +
                '<br/>' +
                '1) Zabieg DermaLift: eksfoliacja, złuszczanie mechaniczne, mikroperforacja, wprowadzenie substancji aktywnych, maska żelowa.' +
                '<br/>' +
                '2) Zabieg BDR to rozbudowany DermaLift, obejmuje dodatkowo: liniowe wypełnianie zmarszczek, masaż cyrkulacyjny i masaż drenujący.' +
                '<br/>' +
                '3) Zabieg BDR okolice oczu: to delikatny peeling chemiczny, mikroperforacja (nakłuwanie) połączone z wypełnieniem zmarszczek mimicznych.',
        },
        {
            title: 'Zabiegi liftingujące RF',
            answer:
                'Stymuluje tkankę do wytwarzania większej ilości kolagenu, doprowadza skórę do gładkości usuwając zmarszczki, rozwiązuje najistotniejsze problemy starzenia przywracając skórze gładkość i witalność. Zapewnia pełne bezpieczeństwo, komfort i brak uczuleń. Ogromną zaletą zabiegów RF jest to, że okres remodelingu kolagenu zachodzi przez sześć miesięcy od serii zabiegów, a ich efekty utrzymują się w skórze nawet do sześciu lat.' +
                '<br/><br/>' +
                'Przeciwwskazania do zabiegu RF:' +
                '<br/>' +
                '– ciąża' +
                '<br/>' +
                '– epilepsja' +
                '<br/>' +
                '– nowotwór' +
                '<br/>' +
                '– rany' +
                '<br/>' +
                '– ostre zapalenie skóry' +
                '<br/>' +
                '– choroba serca' +
                '<br/>' +
                '– cukrzyca' +
                '<br/>' +
                '– gorączka' +
                '<br/>' +
                '– hemofilia' +
                '<br/>' +
                '– poważne reakcje nadwrażliwości skóry' +
                '<br/><br/>' +
                'Wskazania do zabiegu RF:' +
                '<br/>' +
                '– lifting skóry twarzy' +
                '<br/>' +
                '– lifting skóry w okolicach oczu' +
                '<br/>' +
                '– lifting skóry na szyi' +
                '<br/>' +
                '– poprawa kształtu nosa i usuwanie zmarszczek' +
                '<br/>' +
                '– wygładzanie skóry na czole i zmniejszanie zmarszczek' +
                '<br/>' +
                '– lifting skóry na piersi i poprawa ich kształtu' +
                '<br/>' +
                '– poprawa wyglądu skóry i kształtu talii' +
                '<br/>' +
                '– poprawa wyglądu i kształtu pośladków i nóg (uda)' +
                '<br/>' +
                '– wygładzanie skóry dłoni',
        },
    ];
}
