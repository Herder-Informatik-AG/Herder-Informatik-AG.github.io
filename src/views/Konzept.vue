<template>
    <div>
        <div id="landing-container" class="container-onepage-height">
            <div></div>
            <div id="landing" class="container container-onepage">
                <div class="container">
                    <h1>Konzept</h1>
                    <p>
                        Die Schülerinnen und Schüler erarbeiten alleine oder in
                        kleinen Gruppen eigene Projekte im Bereich der
                        Informatik. Dabei verwenden sie Mikrocomputer wie
                        Arduino oder Raspberry Pi, sodass nicht nur der Umgang
                        mit Software sondern auch mit Hardware praxisnah gelernt
                        wird. Dafür bekommen sie zu Beginn der AG eine
                        Einführung in die Themen, verbunden mit der Vermittlung
                        von Grundkenntnissen, welche für die Arbeit an den
                        Projekten und in ihrer weiteren Laufbahn von Nutzen sein
                        können.
                    </p>
                    <p>
                        Nach der Wahl eines Projektes werden die Schülerinnen
                        und Schüler von uns während der gesamten
                        Projektentwicklungsphase betreut und erhalten dabei
                        einen Einblick in viele relevante Themen der Software-
                        und Prototypentwicklung, welche in den Kompetenzen
                        aufgeführt sind. Ein weiterer wichtiger Punkt ist dabei
                        das Präsentieren und Reflektieren der eigenen
                        Forschungsarbeit und ihrer Ergebnisse.
                    </p>
                    <h2>Kompetenzen</h2>
                    <p>
                        Am Ende der Projektarbeit haben alle AG-Teilnehmer ein
                        eigenes Projekt von Grund auf entwickelt und vertiefen
                        dabei folgende Kompetenzen:
                        <ul>
                            <li>Umgang mit Versionskontrollsystemen (Git, GitHub)</li>
                            <li>Effektive Arbeit im Projektteam</li>
                            <li>Softwareplanung/-modellierung</li>
                            <li>Implementierung und Umgang mit geeigneten IDEs (Arduino IDE, VS Code)</li>
                            <li>Entwicklung von Hardwareschaltkreisen</li>
                            <li>Projekte verständlich Vorstellen (PowerPoint, LaTeX)</li>
                        </ul>
                    </p>
                    <h2>Zielgruppe</h2>
                    <p>
                        Die AG richtet sich dabei insbesondere an Schülerinnen
                        und Schüler der Klassenstufen 9 bis 12, welche den
                        Informatikunterricht besuchen oder ein ausgeprägtes
                        Interesse besitzen. In Einzelfällen können auch jüngere
                        Schüler mit Vorkenntnissen nach Absprache an der AG
                        teilnehmen.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Infrastructure',
    data() {
        return {};
    },
    methods: {
        newTab: function (link) {
            window.open(link, '_blank');
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../style/bootstrap-component-include';
@import '../style/pageStyle.scss';

.container-onepage {
    height: calc(100vh - 57px);
    display: table;
}

.card-columns {
    @include media-breakpoint-only(sm) {
        column-count: 2;
    }
    @include media-breakpoint-only(md) {
        column-count: 3;
    }
    @include media-breakpoint-only(lg) {
        column-count: 4;
    }
}

#landing {
    > div {
        background-color: rgba(0, 0, 0, 0.5);
    }

    color: #ffffff;
}

#landing-img {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
}

#landing-container {
    background-size: cover;
    background-image: url('../assets/images/background01.jpg');
    background-color: rgb(41, 49, 51);
    margin-bottom: 0px;
    position: relative;
    overflow: hidden;
}
</style>
