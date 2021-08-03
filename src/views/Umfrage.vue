<template>
    <div>
        <div id="landing-container">
            <div id="landing" class="container container-onepage">
                <div class="container">
                    <h1>Umfrage</h1>
                    <div class="col-md-12 col" style="height: 80%">
                        <center v-if="link" style="height: 96%">
                            <iframe
                                :src="link"
                                width="100%"
                                height="100%"
                                frameborder="0"
                                marginheight="0"
                                marginwidth="0"
                                >Wird geladen...</iframe
                            >
                        </center>
                        <div v-else><h2>Umfrage nicht gefunden!</h2></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { sendJsonRequest } from '../services/utility-functions/send-json-request';
const umfragenURL =
    'https://raw.githubusercontent.com/Herder-Informatik-AG/Herder-Informatik-AG.github.io/main/Umfragen/list.json';
export default Vue.extend({
    name: 'Umfrage',
    data() {
        return {
            name: this.$route.params.name,
            link: '',
        };
    },
    async mounted() {
        await this.getData();
    },
    watch: {
        $route(to) {
            this.name = to.params.name;
        },
        async name() {
            await this.getData();
        },
    },
    methods: {
        getData: async function () {
            const umfragen = await sendJsonRequest<Umfrage[]>(umfragenURL);
            this.link = umfragen[this.name];
        },
    },
});

interface Umfrage {
    name: string;
    url: string;
}
</script>

<style lang="scss">
@import '../style/bootstrap-component-include';
@import '../style/pageStyle.scss';

.container-onepage {
    height: calc(100vh - 57px);
    display: table;
}

#landing {
    > div {
        background-color: rgba(0, 0, 0, 0.5);
        display: table-row;
    }

    color: #ffffff;
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
