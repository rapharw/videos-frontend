<template>
    <h2 class="headline btitle font-weight-light">{{title}}</h2>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.btitle{
    color: #ffffff;
}
</style>
