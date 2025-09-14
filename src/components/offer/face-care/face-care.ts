import { Component } from '@angular/core';
import { FaqComponent, FaqItem } from '../../faq/faq.component';

@Component({
    selector: 'app-face-care',
    imports: [FaqComponent],
    templateUrl: './face-care.html',
    styleUrl: './face-care.scss',
})
export class FaceCare {
    public faqItems: FaqItem[] = [
        {
            title: 'Pielęgnacja cery mieszanej i tłustej',
            answer:
                'Przy leczeniu i pielęgnacji skóry mieszanej tłustej, kładziemy nacisk na zredukowanie i unormowanie funkcji gruczołów łojowych. Specjalnie opracowana formuła zabiegów poprawia kondycję skóry, zmniejsza łojotok, działa antyseptycznie, matowi cerę oraz przyspiesza proces gojenia, likwiduje wypryski. Przeprowadzamy zabiegi oczyszczania wykorzystując naturalne ciśnienie osmotyczne skóry bez chemicznych składników rozgrzewających — zabieg jest mniej bolesny i nie pozostawia zaczerwienienia!' +
                '<br/><br/>' +
                'Hipoalergiczny skład idealnie wspomaga leczenie dermatologiczne a wyciągi i ekstrakty roślinne oraz minerały z morza martwego doskonale wyciszają i regulują gospodarkę gruczołów łojowych skóry. Dermokosmetyki używane podczas zabiegów gwarantują szerokie i długotrwałe spektrum działania.',
        },
        {
            title: 'Pielęgnacja cery wrażliwej reaktywnej naczynioruchowej',
            answer:
                'Mamy do dyspozycji bardzo skuteczne preparaty, które dzięki swoim właściwościom (tj. elhibina, sacharydy, wyciąg z Mirry, iglica włoska, komplex MBI, sorbitol itp.) niosą w zabiegach skórze szybką pomoc w przypadkach podrażnień i łagodzą ich skutki a z drugiej strony trwale wspierają zdolności samoleczenia wzmacniając system odpornościowy skóry.' +
                '<br/><br/>' +
                'Specyficzne substancje aktywne, które działają synergicznie na różne aspekty problemu, wspomagają normalizację skóry zmniejszając teleangiektazję, eliminując zaczerwienienia i podrażnienia.' +
                '<br/><br/>' +
                'Zwiększają odporność na szkodliwy wpływ czynników zewnętrznych oraz zmniejszają wrażliwość na gwałtowne zmiany — wyciszają. Zabiegi wspomagają przywrócenie właściwego i trwałego nawilżenia zarówno powierzchniowego, jak i głębokiego oraz ułatwiają regenerację bariery skórnej.' +
                '<br/><br/>' +
                'Odpowiednia pielęgnacja domowa zapewnia integralność z zabiegiem i niewątpliwie wpływa na długotrwałą kondycję właściwego poziomu regeneracji skóry — po wszystkich zakończonych zabiegach.',
        },
        {
            title: 'Pielęgnacja cery suchej, zmęczonej, dojrzałej i wymagającej',
            answer:
                'Oferujemy innowacyjne zabiegi interaktywne o wysokiej aktywności dermatologicznej. Zostały stworzone, aby przeciwdziałać w pojawiających się problemach skóry, które są następstwem biologicznego procesu starzenia i fotostarzenia. Działają odbudowująco, stymulująco i nawilżająco. ' +
                '<br/><br/>' +
                'Eliminują zmarszczki, wypełniają bruzdy, przywracają napięcie owalu twarzy i elastyczność skóry. Unikalna formuła preparatów umożliwia zastosowanie zabiegów do potrzeb każdego rodzaju skóry o każdej porze roku.' +
                '<br/><br/>' +
                'Dzięki wysokiej aktywności dermatologicznej i biochemicznej preparatów umożliwiają one intensywne działanie stymulujące i odbudowujące. Nasze zabiegi są alternatywą dla zabiegów inwazyjnych.',
        },
        {
            title: 'Pielęgnacja cery poprzez zabiegi złuszczające',
            answer:
                '<p>Współczesny peeling uległ licznym modyfikacjom. W konsekwencji tych przeobrażeń peelingi stały się podstawowym instrumentem do efektywnej poprawy najważniejszych parametrów estetycznych skóry. Zabiegi stosowane w naszym gabinecie możemy klasyfikować na:</p>' +
                '<br/>' +
                '<ul class="faq-list">' +
                '<li>powierzchniowy (odnowa i regeneracja naskórka)</li>' +
                '<li>średnio głęboki (skutecznie redukuje przebarwienia, liftinguje bez ingerencji chirurgicznej)</li>' +
                '<li>głęboki (leczenie, odnowa, stymulacja — alternatywa zabiegów chirurgicznych)</li>' +
                '</ul>' +
                '<br/>' +
                '<p>Nowoczesna metoda głębokiego złuszczania polega na aktywacji własnych odnawiających mechanizmów obronnych, dających oczekiwane efekty w sposób sukcesywny i kontrolowany. Bezpieczeństwo naszych pilingów polega na głębokim i stopniowym złuszczaniu bez ryzyka pozostawiania śladów i blizn. Pilingi można wykonywać jednorazowo lub w serii i na różnych partiach ciała — w zależności od potrzeb.</p>' +
                '<br/>' +
                '<p>Piling jest tym dla skóry czym fitness dla ciała. Zabiegi trwale i głęboko regenerują naszą skórę i w bardzo efektywny i widoczny sposób wpływają korzystnie na bardzo szerokim spektrum.</p>',
        },
        {
            title: 'Pielęgnacja cery skłonnej do przebarwień z hiperpigmentacją',
            answer:
                'W zabiegach kładziemy szczególny nacisk na normalizację procesu melanogenezy i szybkiego usuwania dyschromii skórnych. Substancje zawierają peptydy biomimetyczne najnowszej generacji połączone z substancjami aktywnymi (tj. arbutyna, kwas kojowy, lumiskin, peptydy, tyrozyny, witamina C).' +
                '<br/><br/>' +
                'Formuły zabiegów i preparatów są opracowane tak, aby skutecznie oddziaływać na kilku poziomach: blokować i normalizować wytwarzanie melaniny, ułatwiać usuwanie komórek z hiperpigmentacją, błyskawicznie wyrównywać koloryt oraz chronić skórę przed czynnikami wywołującymi problem.' +
                '<br/><br/>' +
                'Zabiegi są przeznaczone do pielęgnacji każdego rodzaju skóry twarzy — również bardzo delikatnej.' +
                '<br/><br/>' +
                'Polecamy je szczególnie osobom z fototypem wysokiego ryzyka, gdyż skóra staje się bardziej odporna i mniej wrażliwa na promieniowanie i penetrację UV.',
        },
        {
            title: 'Henna proszkowa',
        },

        {
            title: 'Depilacja wąsika, brody, ciała',
        },
        {
            title: 'Henna pudrowa',
        },
    ];
}
