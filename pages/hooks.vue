<template>
    <div>
        <div>
            <use-bool ref="ref_use_bool" />

            <button type="button" @click="toggleBool()">
                Toggle Bool: {{ is_true ? 'TRUE' : 'FALSE' }}
            </button>
        </div>
    </div>
</template>

<script>
import useBool from '~/hooks/useBool.vue';

export default {
    components: { useBool },
    data() {
        return {
            is_true: false,
        };
    },
    methods: {
        toggleBool() {
            this.$refs.ref_use_bool.toggleBool();
        },
    },
};
</script>
