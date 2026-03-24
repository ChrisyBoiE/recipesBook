# Recipe Book - Junior felvételi feladat

Ez a projekt egy interaktív receptkönyv alkalmazás, amely a [dummyjson.com](https://dummyjson.com) külső API-ját használja az adatok megjelenítéséhez és kezeléséhez. A feladat célja a tiszta kód és a logikus felépítés bemutatása.

## Technológiai választás

A projekt **React** keretrendszerrel és **TypeScript** használatával készült. A TypeScript alkalmazása biztosítja a típusbiztonságot (különösen a `Recipe` interface esetében), ami segít megelőzni a futási idejű hibákat és javítja a kód olvashatóságát.

## Telepítés és Futtatás

A projekt elindításához kövesd az alábbi lépéseket:

1.  **Telepítés**:
    ```bash
    npm install
    ```
2.  **Fejlesztői környezet futtatása**:
    ```bash
    npm run dev
    ```

## Technikai döntések

A fejlesztés során több stratégiai döntést hoztam a jobb kódminőség és felhasználói élmény érdekében:

-   **Származtatott állapot (Derived State):** A receptek szűrése során nem írom felül az eredeti adathalmazt. Ehelyett egy úgynevezett származtatott változót (`filteredRecipes`) használok az aktuálisan megjelenítendő adatok kiszámítására. Ez lehetővé teszi a gyors és reaktív szűrést az eredeti adatok megőrzése mellett.
-   **Állapot-kiemelés (State Lifting):** A bevásárlókosár tartalmát és a kiválasztott receptet a közös szülő komponensben (`RecipeCardComponent`) tárolom. Ez biztosítja, hogy a kiválasztott alapanyagok megmaradjanak akkor is, ha a felhasználó másik receptet nyit meg, vagy vált a nézetek között.
-   **Feltételes megjelenítés (Conditional Rendering):** A részletes nézethez URL-alapú navigáció (Router) helyett feltételes megjelenítést alkalmaztam. Ez egyszerűbbé, gyorsabbá és reaktívabbá teszi az alkalmazást.

## Kihívások és tanulságok

Ez a feladat remek lehetőség volt a React mélyebb megismerésére. Korábbi Angular tudásom sokat segített a logikai felépítésben, ugyanakkor a React deklaratív, "Just JavaScript" szintaxisa és az állapotkezelés módja érdekes kihívást jelentett.