<template>
    <b-navbar
        toggleable="md"
        type="dark"
        class="navbar-dark sticky-top bg-dark"
    >
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand to="/Home" class="navbar-brand">
            <img src="../assets/images/logo.png" id="navbar-logo" />
            Informatik-AG
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item to="/Home"
                    ><icon name="home" scale="1.2" class="symbol"></icon>
                    Home</b-nav-item
                >
                <b-nav-item to="/Konzept"
                    ><icon name="flag" scale="1.2" class="symbol"></icon>
                    Konzept
                </b-nav-item>

                <b-nav-item-dropdown>
                    <template #button-content>
                        <icon name="calendar" scale="1.2" class="symbol"></icon>
                        Termine
                    </template>
                    <b-dropdown-item
                        v-for="termin in termine"
                        :key="termin"
                        :to="'/Termine/' + termin"
                        >{{ termin }}</b-dropdown-item
                    >
                </b-nav-item-dropdown>
                <b-nav-item-dropdown>
                    <template #button-content>
                        <icon
                            name="folder-open"
                            scale="1.2"
                            class="symbol"
                        ></icon>
                        Projekte
                    </template>
                    <b-dropdown-group
                        v-for="category in projectCategories"
                        :key="category.name"
                        :header="category.name"
                    >
                        <b-dropdown-item
                            v-for="projectName in category.projects"
                            :key="projectName"
                            :to="'/Projekte/' + projectName"
                            >{{ projectName }}</b-dropdown-item
                        >
                    </b-dropdown-group>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-nav-item to="/Info"
                        ><icon
                            name="info-circle"
                            scale="1.2"
                            class="symbol"
                        ></icon
                    ></b-nav-item>
                </b-nav-form>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue';
import { sendJsonRequest } from '../services/utility-functions/send-json-request';
const terminURL =
    'https://raw.githubusercontent.com/Herder-Informatik-AG/Herder-Informatik-AG.github.io/main/Termine/list.json';
const projectURL =
    'https://raw.githubusercontent.com/Herder-Informatik-AG/Herder-Informatik-AG.github.io/main/Projekte/list.json';
const umfragenURL =
    'https://raw.githubusercontent.com/Herder-Informatik-AG/Herder-Informatik-AG.github.io/main/Umfragen/list.json';
export default Vue.extend({
    name: 'Navbar',
    data() {
        return {
            termine: [] as string[],
            projectCategories: [] as Projekt[],
            umfragen: [] as Umfrage[],
        };
    },
    methods: {
        getData: async function () {
            const termine = await sendJsonRequest<Termine>(terminURL);
            const projekte = await sendJsonRequest<Projekte>(projectURL);
            const umfragen = await sendJsonRequest<Umfrage[]>(umfragenURL);
            this.termine = termine.filenames;
            this.projectCategories = projekte.categories;
            this.umfragen = umfragen;
        },
    },
    mounted() {
        this.getData();
    },
});

interface Termine {
    filenames: string[];
}

interface Projekte {
    categories: Projekt[];
}

interface Projekt {
    name: string;
    projects: string[];
}

interface Umfrage {
    url: string;
}
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
