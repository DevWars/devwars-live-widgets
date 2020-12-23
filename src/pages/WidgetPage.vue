<template>
    <div class="WidgetPage">
        <BettingWidget v-if="betOpen"/>
        <VotingWidget v-else-if="voteOpen"/>
    </div>
</template>


<script>
import { mapState } from 'vuex';
import BettingWidget from '../components/betting/BettingWidget.vue';
import VotingWidget from '../components/voting/VotingWidget.vue';

export default {
    name: 'WidgetPage',

    components: { BettingWidget, VotingWidget },

    computed: {
        ...mapState('betting', { betOpen: 'open' }),
        ...mapState('voting', { voteOpen: 'open' }),
    },
};
</script>


<style lang="scss" scoped>
.WidgetPage {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 320px;
    padding: 1rem;
    overflow: hidden;
    background-color: var(--bg10);
}
</style>
