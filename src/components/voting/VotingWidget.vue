<template>
    <div class="VotingWidget">
        <VoteList/>

        <div class="overlay"></div>
    </div>
</template>


<script>
import { mapState, mapGetters } from 'vuex';
import VoteList from './components/VoteList.vue';

export default {
    name: 'VotingWidget',

    components: { VoteList },
};
</script>


<style lang="scss" scoped>
.VotingWidget {
    .VoteList {
        height: 100%;
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
