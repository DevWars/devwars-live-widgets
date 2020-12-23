<template>
    <div class="BetGraph">
        <div
            v-for="option in options"
            :key="option.option"
            class="bar"
            :class="option.option"
            :style="{
                height: ((option.total / total * 100) || 0) + '%'
            }"
        ></div>
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
</style>
