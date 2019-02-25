<template>
    <div class="exam container center-align">
        <div>{{ $route.params.id }}</div>
    </div>
</template>

<script>
    export default {
        name: 'Exam',
        data() {
            return {
                // Get by $route.params.id
                exam: {
                    id: 1,
                    name: "First exam",
                    question_number: 3,
                    max_score: 20,
                    date_created: '2018-03-25',
                    level: {
                        id: 1,
                        name: 'easy'
                    },
                    subject: {
                        id: 1,
                        name: 'Math'
                    },
                    questions: [
                        {
                            id: 1,
                            text: "Prvi pitanje etc?",
                            score: 20,
                            subject: {
                                id: 2,
                                name: 'Math'
                            },
                            level: {
                                id: 1,
                                name: 'Easy'
                            },
                            points: 2,
                            answers: [
                            {
                                id: 1,
                                text: 'Nothing',
                                correct: false
                            },
                            {
                                id: 2,
                                text: 'Wtf',
                                correct: true
                            }
                        ]
                       }
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>