<template>
    <div class="BetTimer" :class="{ warn }">
        <div class="header">
            <div class="command">!bet [amt] [option]</div>
            <CountdownTimer :endAt="endAt"/>
        </div>
        <div class="bar">
            <div class="barProgress" :style="{
                transform: `scaleX(${percent / 100})`,
            }"></div>
        </div>
    </div>
</template>


<script>
import { mapState, mapGetters } from 'vuex';
import CountdownTimer from '../../../components/CountdownTimer.vue';

export default {
    name: 'BetTimer',

    components: { CountdownTimer },

    props: {
        warnAt: { type: Number, default: null },
    },

    data: () => ({
        percent: 100,
        interval: null,
        now: Date.now(),
    }),

    computed: {
        ...mapState('betting', ['startAt', 'endAt']),

        warn() {
            return this.warnAt ? (this.endAt - this.now) < this.warnAt : false;
        },
    },

    mounted() {
        this.percent = this.getPercentAt(Date.now());
        this.$nextTick(() => {
            this.tick();
            this.interval = setInterval(this.tick, 1000);
        });
    },

    beforeUnmount() {
        clearInterval(this.interval);
    },

    methods: {
        tick() {
            this.now = Date.now();
            this.percent = this.getPercentAt(this.now + 1000);
        },

        getPercentAt(date) {
            const total = this.endAt - this.startAt;
            const current = date - this.startAt;
            return Math.max(0, 100 - (current / total * 100));
        },
    },
};
</script>


<style lang="scss" scoped>
.BetTimer {
    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;

        .command {
            display: inline-block;
            color: var(--blue);
            padding: 2px 4px;
            border-radius: 5px;
            font-family: monospace;
            position: relative;
            overflow: hidden;

            &:before {
                content: '';
                display: block;
                background-color: var(--blue);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0.1;
            }
        }
    }

    .bar {
        width: 100%;
        height: 0.5rem;
        background-color: var(--bg40);

        .barProgress {
            height: 100%;
            background-color: #fff;
            transform-origin: left;
            transition: transform 1050ms linear;
        }
    }

    &.warn {
        .CountdownTimer {
            color: #ff618d;
        }

        .barProgress {
            background-color: #ff618d;
        }
    }
}
</style>
