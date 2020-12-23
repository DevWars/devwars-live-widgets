<template>
    <div class="BetList">
        <transition-group name="list">
            <BetListItem class="list-item" v-for="bet in bets" :key="bet.user.id" :bet="bet"/>
        </transition-group>
    </div>
</template>


<script>
import BetListItem from './BetListItem.vue';
import eventBus from '../../../services/eventBus';

export default {
    name: 'BetList',

    components: { BetListItem },

    data: () => ({
        bets: [],
    }),

    mounted() {
        eventBus.on('betting.bet', this.onBet);
    },

    beforeUnmount() {
        eventBus.off('betting.bet', this.onBet);
    },

    methods: {
        onBet(bet) {
            this.bets = this.bets.filter(({ user }) => user.id !== bet.user.id);
            this.bets.unshift(bet);

            if (this.bets.length > 10) {
                this.bets.pop();
            }
        },
    },
};
</script>


<style lang="scss" scoped>
.BetList {
    .list-item {
        transform-origin: top left;
        transition: all 250ms linear;
        opacity: 1;

        &:not(:first-child) {
            opacity: 0.5;
        }
    }

    .list-enter-active {
        transition:
            opacity 250ms ease-out,
            transform 500ms ease-out;
    }

    .list-enter {
        opacity: 0;
        transform: scale(1.25) translateY(-1rem);
    }
}
</style>
