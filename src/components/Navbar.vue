<template>
    <b-navbar
        toggleable="md"
        type="dark"
        class="navbar-dark sticky-top bg-dark"
    >
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand to="/home" class="navbar-brand">
            <img src="../assets/images/logo.png" id="navbar-logo" />
            Informatik-AG
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item to="/home"
                    ><icon name="home" scale="1.2" class="symbol"></icon>
                    Home</b-nav-item
                >
                <b-nav-item to="/ziele"
                    ><icon name="flag" scale="1.2" class="symbol"></icon>
                    Ziele
                </b-nav-item>

                <b-nav-item-dropdown text="Termine">
                    <b-dropdown-item
                        v-for="termin in termine"
                        :key="termin"
                        :to="'/Termine/' + termin"
                        >{{ termin }}</b-dropdown-item
                    >
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import { sendJsonRequest } from '../services/utility-functions/send-json-request.js';
const dataURL =
    'https://raw.githubusercontent.com/Herder-Informatik-AG/Herder-Informatik-AG.github.io/main/Termine/list.json';
export default {
    name: 'Navbar',
    data() {
        return {
            termine: [],
        };
    },
    methods: {
        getData: async function () {
            const termine = await sendJsonRequest(dataURL);
            this.termine = termine;
        },
    },
    mounted() {
        this.getData();
    },
};
</script>

<style lang="scss" scoped>
@import '../style/bootstrap-component-include';

.symbol {
    margin-top: -5px;
    vertical-align: middle;
}

.sticky-top {
    z-index: 100;
}

#navbar-logo {
    $navbar-logo-height: 40px;
    $navbar-logo-mb: -5px;

    margin-top: 25px - $navbar-logo-mb - $navbar-logo-height;
    height: $navbar-logo-height;
    margin-bottom: $navbar-logo-mb;
}
</style>
