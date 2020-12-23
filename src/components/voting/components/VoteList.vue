<template>
    <div class="VoteList">
        <transition-group name="list">
            <VoteListItem class="list-item" v-for="vote in votes" :key="vote.user.id" :vote="vote"/>
        </transition-group>
    </div>
</template>


<script>
import VoteListItem from './VoteListItem.vue';
import eventBus from '../../../services/eventBus';

export default {
    name: 'VoteList',

    components: { VoteListItem },

    data: () => ({
        votes: [],
    }),

    mounted() {
        eventBus.on('voting.vote', this.onVote);
    },

    beforeUnmount() {
        eventBus.off('voting.vote', this.onVote);
    },

    methods: {
        onVote(vote) {
            this.votes = this.votes.filter(({ user }) => user.id !== vote.user.id);
            this.votes.unshift(vote);

            if (this.votes.length > 10) {
                this.votes.pop();
            }
        },
    },
};
</script>


<style lang="scss" scoped>
.VoteList {
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
