<template>
    <div id="main">
        <div>This is Home Page</div>

        <div @click="commonCountUp()">Count up: {{ common_count }}</div>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'

export default Vue.extend({
    name: 'IndexPage',
    data() {
        return {}
    },
    computed: {
        // common_count() {
        //     return this.$store.state.counter
        // },
        ...mapState({
            common_count: (state) => state.counter,
        }),
    },
    methods: {
        ...mapMutations({
            commonCountUp: 'increment',
        }),
    },
    mounted() {
        // console.log(this)
    },
})
</script>

<style lang="scss"></style>
