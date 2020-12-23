<template>
    <component :is="pageComponent"/>
</template>


<script>
import WidgetPage from './pages/WidgetPage.vue';

const routes = {
    '/': WidgetPage,
};

export default {
    components: { WidgetPage },

    data: () => ({
        currentRoute: window.location.pathname,
    }),

    computed: {
        pageComponent() {
            return routes[this.currentRoute] || null;
        },
    },
};
</script>
