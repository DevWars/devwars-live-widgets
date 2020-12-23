<template>
    <AppRouter/>
</template>


<script>
import AppRouter from './AppRouter.vue';

export default {
    components: { AppRouter },
};
</script>


<style lang="scss">
*, *:before, *:after {
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 16px;
}

body, h1, h2, h3, h4, h5, h6, ol, ul, dl, p {
    margin: 0;
    padding: 0;
}

input, select, textarea, button {
    font-family: inherit;
    font-size: inherit;
}

ol, ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
}
</style>


<style lang="scss">
// Global styles.
:root {
    --bg00: #090b19;
    --bg10: #0d101f;
    --bg20: #15182a;
    --bg30: #252945;
    --bg40: #2d3a5a;

    --fg00: #ffffff;
    --fg10: #f1f2f6;
    --fg20: #dfe4ea;
    --fg30: #c5ccd6;
    --fg40: #a1a8c2;

    $primary: #8d3eff;
    --primary: #{$primary};
    --primaryFg: #{mix(#fff, $primary, 25%)};
    --primaryHigh: #{mix(#fff, $primary, 50%)};

    --blue: #00c9ff;
    --red: #ff007d;
    --bonus: #ffb04a;

    --fontFamily: 'IBM Plex Sans', sans-serif;
}

body {
    font-family: var(--fontFamily);
}
</style>
