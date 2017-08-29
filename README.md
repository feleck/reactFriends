Prosta listę kontaktów w aplikacji typu SPA (Single Page Application), możesz użyć dowolnego frameworku JavaScriptowego, aby obsłużyć żądania Ajax. Szczególnie polecamy ReactJS i gem 'react-rails'.

Features:
1. Strona podzielona jest na dwie kolumny.
2. Kolumna prawa zawiera formularz dodawania nowego kontaktu - pola(imię, nazwisko, email, numer telefonu) oraz pole wyszukiwarki.
3. Kolumna lewa to lista kontaktów.
4. Po dodaniu kontaktu powinien pojawić się na liście bez przeładowania strony.
5. Każdy kontakt powinien posiadać także przycisk "Usuń".
6. Po usunięciu kontaktu powinien on zniknąć z listy bez przeładowania strony.
7. Użytkownik powinien móc wyszukiwać kontakty po imieniu, nazwisku, emailu lub numerze telefonu.
8. Pole wyszukiwarki powinno być tylko jedno.
9. Dopisz kilka testów dla modeli używając gemu 'Shoulda-Matchers'.
10. Dopisz kilka testów dla widoków używając gemu 'Capybara'.
11. Kod powinien być wypchnięty na Githuba z wyraźną i czytelną historią commitowania.
