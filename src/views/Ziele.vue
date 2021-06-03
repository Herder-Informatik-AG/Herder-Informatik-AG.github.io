<template>
    <div>
        <div id="landing-container" class="container-onepage-height">
            <div></div>
            <div id="landing" class="container container-onepage">
                <div class="container">
                    <h1>Ziele</h1>
                    <main>
                        Das Ziel der AG ist es, den SuS den Spaß am
                        Programmieren näherzubringen. Die SuS sollen dabei ihre
                        eigenen Projekte bearbeiten, wobei sie von uns
                        Unterstützung und Hilfe erhalten könnnen.
                    </main>
                    <h2>Ablauf</h2>
                    <main>TBD</main>
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

.container-onepage-height {
    height: calc(100vh - 57px);
}

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
