<template>
    <div class="BetGraph">
        <div
            v-for="option in options"
            :key="option.name"
            class="bar"
            :class="option.name"
            :style="{
                width: ((option.total / total * 100) || 0) + '%'
            }"
        >
            <span v-show="option.ratio" class="ratio">
                <span>x</span>{{ parseFloat(option.ratio.toFixed(1)) }}
            </span>
        </div>
    </div>
</template>


<script>
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'BetGraph',

    computed: {
        ...mapGetters('betting', ['total']),
        ...mapState('betting', ['options']),
    },
};
</script>


<style lang="scss" scoped>
.BetGraph {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 7rem;

    .bar {
        height: 0.75rem;
        min-width: 1px;
        background-color: #fff;
        transition: width 500ms ease;
        position: relative;

        &:not(:last-child) {
            margin-bottom: 0.5rem;
        }

        &.blue {
            background-color: var(--blue);
            color: var(--blue);
        }

        &.red {
            background-color: var(--red);
            color: var(--red);
        }

        .ratio {
            position: absolute;
            right: calc(100% + 0.5rem);
            top: 50%;
            transform: translateY(-50%);
            color: #fff;

            span {
                font-size: 0.8rem;
            }
        }
    }
}
</style>
