<template>
    <div class="exam container center-align">
        <h1>{{ name }}</h1>
        <div>{{ $route.params.id }}</div>
    </div>
</template>

<script>
    export default {
        name: 'Exam',
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>