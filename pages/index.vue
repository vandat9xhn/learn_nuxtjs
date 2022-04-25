<template>
    <div id="main">
        <div>This is Home Page</div>

        <div @click="commonCountUp()">Count up: {{ common_count }}</div>

        <div>
            <div>
                <nuxt-link to="/about"> Goto About </nuxt-link>
            </div>

            <div>
                <nuxt-link to="/posts"> Goto Posts </nuxt-link>
            </div>

            <!-- <teleport to="#main">This is teleport</teleport> -->
        </div>
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
