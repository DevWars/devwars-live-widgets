<template>
    <div class="VoteListItem">
        <div class="main">
            <div class="circle" :class="vote.team"></div>
            <span>{{ vote.user.username }}</span>
        </div>
    </div>
</template>


<script>
export default {
    name: 'VoteListItem',

    props: {
        vote: { type: Object, required: true },
    },
};
</script>


<style lang="scss" scoped>
.VoteListItem {
    display: flex;
    margin: 0.25rem 0;
    width: 100%;

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
            font-weight: 600;
        }
    }
}
</style>
