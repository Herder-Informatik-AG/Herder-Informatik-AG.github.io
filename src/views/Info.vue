<template>
    <div>
        <div id="landing-container" class="container-onepage-height">
            <div id="landing" class="container container-onepage">
                <div class="row">
                    <div class="col-md-12 col">
                        <div class="row-aligned-content">
                            <h1>Information</h1>
                            <h2>Nützliche Links</h2>
                            Hier ist eine Übersicht von nützlichen Links, welche
                            mit der Zeit ergänzt werden:
                            <ul>
                                <li>
                                    <a
                                        href="https://github.com/Herder-Informatik-AG"
                                    >
                                        GitHub Organization
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Information',
    data() {
        return {};
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

    .row {
        display: table-row;

        .col {
            display: table-cell;
            vertical-align: middle;
            min-height: 0;
            .row-aligned-content {
                text-align: center;

                img {
                    margin-bottom: 25px;
                    max-width: 80%;
                }
            }
        }
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
