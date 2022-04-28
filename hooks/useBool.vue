<template></template>

<script>
export default {
    //
    methods: {
        toggleBool() {
            this.$parent.is_true = !this.$parent.is_true;
        },
    },
};
</script>
