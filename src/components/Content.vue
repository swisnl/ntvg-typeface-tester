<template>
    <div>
        <section class="default">
            <div class="container">
                <h1 class="text--xxxl">Coloncarcinoom met doorgroei in de blaas</h1>
                <p>Patiënt A, een 68-jarige man met diabetes mellitus type 2, was opgenomen geweest vanwege vermeende diverticulitis waarvoor hij conservatief was behandeld. Ter controle werd 2 maanden later een coloscopie verricht, waarbij een grote obstruerende tumor in het sigmoïd en meerdere poliepen werden gezien. Histopathologisch onderzoek van een biopt van de tumor toonde een adenocarcinoom. Vanwege passageklachten die veroorzaakt werden door de tumor werd een deviërend colostoma aangelegd. Ook werd besloten om patiënt te behandelen met chemotherapie (capecitabine, oxaliplatin en bevacizumab) voorafgaand aan de chirurgische resectie van de tumor, om de kans op een radicale resectie te vergroten.</p>
                <h2>Casus</h2>
                <p>Na een half jaar werd op de CT-scan van het abdomen een afname van de tumormassa gezien, zonder aanwijzingen voor metastasen. Tijdens de daaropvolgende proeflaparotomie was het niet mogelijk om de tumor te verwijderen, omdat deze ingroeide in meerdere dunnedarmlissen. Er werd besloten om patiënt palliatief te behandelen met chemotherapie (17 kuren met capecitabine en bevacizumab). ...</p>
                <h3>Auteursinformatie</h3>
                <p>Erasmus MC Kanker Instituut, afd. Interne Oncologie, Rotterdam: dr. E.C.T. Geijteman, fellow interne oncologie en klinisch farmacoloog; dr. F.A.L.M. Eskens, internist-oncoloog. Amphia Ziekenhuis, afd. Interne Geneeskunde, Breda: drs. H.M. Westgeest, internist-oncoloog.</p>
                <p>Contact: E.C.T. Geijteman (e.geijteman@erasmusmc.nl)</p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Content"
    }
</script>

<style lang="scss">
    :root {
        --color-primary: #C62A2A;
        --color-secondary: #5EA7C1;

        /* set base values */
        --text-base-size: 1em;
        --text-scale-ratio: 1.125;

        /* type scale */
        --text-xs: calc(1em / (var(--text-scale-ratio) * var(--text-scale-ratio)));
        --text-sm: calc(1em / var(--text-scale-ratio));
        --text-md: calc(1em * var(--text-scale-ratio));
        --text-lg: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio));
        --text-xl: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio));
        --text-xxl: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio));
        --text-xxxl: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio));

        --space-xxxs: 0.25em;
        --space-xxs: 0.375em;
        --space-xs: 0.5em;
        --space-sm: 0.75em;
        --space-md: 1.25em;
        --space-lg: 2em;
        --space-xl: 3.25em;
        --space-xxl: 5.25em;
        --space-xxxl: 8.5em;

        /* line-height */
        --heading-line-height: 1;
        --body-line-height: 1.7;
    }

    @media only screen and (min-device-width: 768px) {
        :root {
            --text-base-size: 1.25em;
            --text-scale-ratio: 1.275;
        }
    }

    body {
        color: #292929;
        font-family: var(--body-typeface, sans-serif);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: var(--text-base-size);
    }

    h1, h2, h3, h4 {
        color: var(--color-text-heading);
        font-family: var(--header-typeface, serif);
        margin-bottom: var(--space-xxs);
        line-height: var(--heading-line-height);
    }

    /* text size */
    .text--xxxl {
        font-size: var(--text-xxxl);
    }

    h1, .text--xxl {
        font-size: var(--text-xxl);
    }

    h2, .text--xl {
        font-size: var(--text-xl);
    }

    h3, .text--lg {
        font-size: var(--text-lg);
    }

    h4, .text--md {
        font-size: var(--text-md);
    }

    .text--sm, small {
        font-size: var(--text-sm);
    }

    .text--xs {
        font-size: var(--text-xs);
    }

    p {
        line-height: var(--body-line-height);
    }

    section {
        padding-bottom: var(--space-xxxl);
    }

    .inverted {
        background-color: black;
        color: white;
    }

    .light {
        background-color: #efefef;
        color: #2d2d2d;
    }

    .container {
        margin: 0 auto;
        max-width: 50rem;
        padding: 0 1rem;
    }
</style>
