<template>
    <div class="BetListItem">
        <div class="amount">{{ amount }}</div>
        <div class="main">
            <div class="circle" :class="bet.option"></div>
            <span>{{ username }}</span>
        </div>
    </div>
</template>


<script>
import { formatLargeNumber } from '../../../utils/formatting';

export default {
    name: 'BetListItem',

    props: {
        bet: { type: Object, required: true },
    },

    computed: {
        amount() {
            return formatLargeNumber(this.bet.amount);
        },

        username() {
            const name = this.bet.user.username;
            return name.length > 20 ? name.slice(0, 20) + '…' : name;
        },
    },
};
</script>


<style lang="scss" scoped>
.BetListItem {
    display: flex;
    margin: 0.25rem 0;
    width: 100%;

    .amount {
        width: 20%;
        color: var(--bonus);
        font-weight: 700;
    }

    .main {
        display: flex;
        align-items: center;

        .circle {
            width: 0.75rem;
            height: 0.75rem;
            border-radius: 50%;
            background-color: #fff;

            &.blue {
                background-color: var(--blue);
            }

            &.red {
                background-color: var(--red);
            }
        }

        span {
            margin-left: 0.75rem;
            font-weight: 700;
        }
    }
}
</style>
