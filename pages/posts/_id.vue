<template>
    <div>
        <div>This is Post Page</div>
    </div>
</template>

<script>
export default {
    name: 'Post',

    asyncData({ params }) {
        console.log(params)
    },

    setup() {},
}
</script>

<style lang="scss"></style>
