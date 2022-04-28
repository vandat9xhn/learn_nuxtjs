<template>
    <div>
        <div>This is User Page</div>

        <div>
            <nuxt-link to="/user/home">Goto User Home</nuxt-link>
        </div>

        <div>
            <nuxt-link to="/user/posts">Goto User Posts</nuxt-link>
        </div>

        <nuxt-child ref="ref_children" />
    </div>
</template>

<script>
export default {
    mounted() {
        if (location.pathname == '/user') {
            this.$router.replace('/user/home');
        }

        console.log(this.$refs.ref_children);
    },
};
</script>
