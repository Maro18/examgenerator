<template>
    <div class="exams container center-align">
        <div v-for="exam in exams" :key="exam.id">{{exam.name}} {{exam.max_score}}</div>
    </div>
</template>

<script>
    export default {
        name: 'Exam1',
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>