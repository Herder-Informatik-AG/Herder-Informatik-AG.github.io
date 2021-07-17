<template>
    <div>
        <div id="landing-container">
            <div>
                <b-button
                    id="showCodeButton"
                    v-b-toggle.codeSidebar
                    variant="primary"
                    >Show code</b-button
                >
                <b-sidebar
                    id="codeSidebar"
                    title="HTML-Code"
                    shadow
                    visible
                    bg-variant="dark"
                    text-variant="light"
                >
                    <div class="px-3 py-2">
                        <b-form-textarea
                            id="textarea"
                            v-model="HTMLtext"
                            placeholder="Enter HTML Code here..."
                            :state="validHTMLCode"
                            rows="30"
                        ></b-form-textarea>
                        <br />
                        <b-button variant="danger" @click="HTMLtext = ''"
                            >Clear</b-button
                        >
                    </div>
                </b-sidebar>
            </div>
            <div id="landing" class="container container-onepage">
                <div class="container">
                    <div v-html="HTMLtext"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Terminvorschau',
    data() {
        return {
            HTMLtext: '',
        };
    },
    computed: {
        validHTMLCode(): boolean {
            const pattern = new RegExp(
                '^((<("[^"]*"|\'[^\']*\'|[^\'">])*>)((.|\\n)*)(</("[^"]*"|\'[^\']*\'|[^\'">])*>)\\n*)*$'
            );
            return pattern.test(this.HTMLtext);
        },
    },
});
</script>

<style lang="scss">
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

#showCodeButton {
    position: absolute;
    left: 20px;
    bottom: 20px;
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
