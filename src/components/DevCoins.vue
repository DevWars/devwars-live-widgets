<template>
    <div class="DevCoins">
        <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 787.5 787.5"
        >
            <path
                d="M0 393.8C0 446.9 10.4 498.5 31 547c19.8 46.9 48.2 89 84.4 125.1 36.1 36.1 78.3 64.5
                125.1 84.4 48.6 20.5 100.1 31 153.3 31 53.1 0 104.7-10.4 153.3-31 46.9-19.8 89-48.2 125.1-84.4
                36.1-36.1 64.5-78.3 84.4-125.1 20.5-48.6
                31-100.1 31-153.3s-10.4-104.7-31-153.3c-19.8-46.9-48.2-89-84.4-125.1C636
                79.2 593.9 50.8 547 31 498.5 10.4 446.9 0 393.8 0 340.6 0 289 10.4
                240.5 31c-46.9 19.8-89 48.2-125.1 84.4-36.2 36.1-64.6 78.2-84.4 125.1C10.4
                289 0 340.6 0 393.8zm43 0C43 200 200 43 393.8 43s350.8 157 350.8 350.8-157
                350.8-350.8 350.8S43 587.5 43 393.8z"
            ></path>
            <path d="M309.8 393.8h128v128h-128v-64z"></path>
            <path
                d="M85.8 393.8c0 170.1 137.9 308 308 308s308-137.9
                308-308-137.9-308-308-308-308 137.8-308 308zm160
                0h64v-64h128v-128h64v384h-192v-64h-64v-128z"
            ></path>
        </svg>

        <div class="amount">{{ coins }}</div>
    </div>
</template>

<script>
import { formatLargeNumber } from '../utils/formatting';

export default {
    name: 'DevCoins',

    props: {
        amount: { type: Number, default: 0 },
    },

    computed: {
        coins() {
            return formatLargeNumber(this.amount);
        },
    },
};
</script>

<style lang="scss" scoped>
.DevCoins {
    display: flex;
    align-items: center;

    .icon {
        height: 1.75rem;
        margin-right: 0.5rem;
        fill: var(--bonus);
    }

    .amount {
        font-weight: 700;
        font-size: 1.5rem;
    }
}
</style>
