<template>
    <div>
        <div id="landing-container" class="container-onepage-height">
            <div></div>
            <div id="landing" class="container container-onepage">
                <div class="container">
                    <div v-html="terminHTML"></div>
                </div>
                <div v-if="invalidHTML">
                    HTML Code nicht valide
                    <b-button variant="danger" @click="showInvalidHTML()">
                        Trotzdem anzeigen
                    </b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const terminUrl =
    'https://raw.githubusercontent.com/Herder-Informatik-AG/Herder-Informatik-AG.github.io/main/Termine';
export default {
    name: 'Termine',
    data() {
        return {
            date: this.$route.params.date,
            terminHTML: '',
            invalidHTML: '',
        };
    },
    async mounted() {
        await this.fetchCode();
    },
    watch: {
        $route(to, from) {
            this.date = to.params.date;
        },
        async date(newValue, oldValue) {
            await this.fetchCode();
        },
    },
    methods: {
        validHTMLCode(text) {
            const pattern = new RegExp(
                '^((<("[^"]*"|\'[^\']*\'|[^\'">])*>)((.|\\n)*)(</("[^"]*"|\'[^\']*\'|[^\'">])*>)\\n*)*$'
            );
            return pattern.test(text);
        },
        showInvalidHTML() {
            if (this.invalidHTML) {
                this.terminHTML = this.invalidHTML;
                this.invalidHTML = '';
            }
        },
        async fetchCode() {
            fetch(`${terminUrl}/${this.date}.html`)
                .then(async (data) => data.text())
                .then((HTMLCode) => {
                    this.applyContent(HTMLCode);
                });
        },
        applyContent(htmlCode) {
            this.invalidHTML = '';
            this.terminHTML = '';
            if (htmlCode === '404: Not Found') {
                console.log('Seite existiert nicht');
                this.terminHTML =
                    '<h1> Diese Seite existiert nocht nicht </h1>';
            } else if (this.validHTMLCode(htmlCode)) {
                this.terminHTML = htmlCode;
            } else {
                this.invalidHTML = htmlCode;
                console.log('HTML Code nicht valide:');
                console.log(htmlCode);
            }
        },
    },
};
</script>

<style lang="scss">
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
    background-image: url('../assets/images/background02.jpg');
    background-color: rgb(41, 49, 51);
    margin-bottom: 0px;
    position: relative;
    overflow: hidden;
}
</style>
