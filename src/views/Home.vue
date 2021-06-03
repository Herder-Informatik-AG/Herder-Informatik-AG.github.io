<template>
    <div>
        <header class="image-header">
            <img src="../assets/images/background01.jpg" />
            <div class="viewport-header">
                <h1 class="glow">
                    Informatik-AG
                    <!-- <span> Julian und Jean-Pasqual</span> -->
                </h1>
            </div>
        </header>
        <div id="circle"></div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data: () => {
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
@-webkit-keyframes glow {
    from {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff;
    }
    to {
        text-shadow: 0 0 10px #fff, 0 0 15px #fff;
    }
}

:root {
    --headerOpacity: 1;
    --headerScale: 1;
}

@mixin coverer {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
}

.image-header {
    position: absolute;
    text-align: center;
    width: 100vw;
    height: 100vh;
    &,
    img,
    .viewport-header {
        @include coverer;
    }
    .viewport-header {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
        opacity: var(--headerOpacity);
        transform: scale(var(--headerScale));
    }
}

.glow {
    -webkit-animation: glow 2s ease-in-out infinite alternate;
    -moz-animation: glow 2s ease-in-out infinite alternate;
    animation: glow 2s ease-in-out infinite alternate;
}

html,
body {
    height: 100vh;
    overflow-x: hidden;
}
html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
    font-size: 150%;
    line-height: 1.4;
}
body {
    margin: 0;
}

h1 {
    font-family: 'Syncopate', sans-serif;
    color: rgb(52, 58, 64);
    text-transform: uppercase;
    letter-spacing: 3vw;
    line-height: 1.2;
    font-size: 4vw;
    text-align: center;
    -ms-user-select: None;
    -moz-user-select: None;
    -webkit-user-select: None;
    user-select: None;
    span {
        display: block;
        font-size: 2vw;
        letter-spacing: 1vw;
    }
}

main {
    background: white;
    position: relative;
    padding: 1rem;
    margin-top: 100vh;
    &::before {
        content: '';
        @include coverer;
        top: -100vh;
    }
    p {
        max-width: 600px;
        margin: 1rem auto;
    }
}
</style>
