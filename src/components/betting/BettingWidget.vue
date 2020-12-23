<template>
    <div class="BettingWidget">
        <BetTimer :endAt="endAt" :warnAt="30000"/>

        <div class="info">
            <div class="infoMain">
                <h4>Total Bets</h4>
                <DevCoins :amount="total"/>
            </div>

            <BetGraph/>
        </div>

        <BetList/>

        <div class="overlay"></div>
    </div>
</template>


<script>
import { mapState, mapGetters } from 'vuex';
import DevCoins from '../../components/DevCoins.vue';
import BetTimer from './components/BetTimer.vue';
import BetList from './components/BetList.vue';
import BetGraph from './components/BetGraph.vue';

export default {
    name: 'BettingWidget',

    components: { BetTimer, DevCoins, BetList, BetGraph },

    computed: {
        ...mapGetters('betting', ['total']),
        ...mapState('betting', ['endAt']),
    },
};
</script>


<style lang="scss" scoped>
.BettingWidget {
    .info {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;

        h4 {
            text-transform: uppercase;
            font-style: italic;
            color: var(--fg40);
        }
    }

    .infoGraph {
        display: flex;
        align-items: flex-end;
        height: 3rem;

        .bar {
            width: 0.75rem;
            min-height: 1px;
            background-color: #fff;
            transition: height 500ms ease;

            &:not(:last-child) {
                margin-right: 0.5rem;
            }

            &.blue {
                background-color: var(--blue);
            }

            &.red {
                background-color: var(--red);
            }
        }
    }

    .BetList {
        height: 100%;
        margin-top: 1rem;
    }

    .overlay {
        position: absolute;
        top: 5rem;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        background: linear-gradient(to top, var(--bg10) 5%, transparent);
    }
}
</style>
