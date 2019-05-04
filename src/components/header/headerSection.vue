<template>
    <div>
        <div><login/></div>
        <div><navbar/></div>

    </div>
</template>

<script>
import login from "./login.vue";
import navbar from "./navbar.vue";

    export default {
        name:"header",
        components: {
            login,
            navbar,

        }
        
    };
</script>

<style lang="scss" scoped>

</style>