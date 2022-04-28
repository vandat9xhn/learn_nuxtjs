<template>
    <div>
        <div ref="ref_title">This is About Page</div>

        <div>City Count: {{ city_arr.length }}</div>

        <div v-show="false">
            <div ref="ref_portal">This is Portal</div>
        </div>

        <div>
            <input type="text" v-focusInput />
        </div>
    </div>
</template>

<script>
import { focusInput } from '../directives/focusInput';

export default {
    name: 'AboutPage',
    layout: 'layout1',

    head: {
        title: 'About',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'This is About Page',
            },
        ],
    },
    async asyncData({ $axios }) {
        const res = { data: [1, 2] };
        // await $axios.get(
        //     'https://react-django-heroku.herokuapp.com/api/city/city-no-token-l/'
        // )

        return {
            city_arr: res.data,
        };
    },

    directives: {
        focusInput: focusInput,
    },
    // setup() {
    //     return {
    //         name: 'ABC',
    //     }
    // },
    mounted() {
        // console.log(this.$refs)
    },
};
</script>

<style lang="sass"></style>
