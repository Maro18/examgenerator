<template>
    <div class="exams">
        <b-container fluid>
            <b-jumbotron class="jumbotron-no-items" v-if="exams.length === 0"
                         header="You didn't create any exams yet."
                         lead="To create an exam you need to insert a set of questions in a subject with a specific level." >
                <p>Click here to create your first exam</p>
                <router-link to="/questions">
                    <b-btn variant="outline-primary">Create</b-btn>
                </router-link>
            </b-jumbotron>

                <b-card-group deck>
                    <b-card :title="exam.name" class="exam" v-for="exam in exams" :key="exam.id">
                        <p class="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                        <b-list-group flush>
                            <b-list-group-item>{{exam.id_subject}}</b-list-group-item>
                            <b-list-group-item>{{exam.id_level}}</b-list-group-item>
                        </b-list-group>
                        <div slot="footer">
                            <small class="text-muted">Made on 23.09.2018.</small>
                        </div>
                    </b-card>
                </b-card-group>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Exams',
        data () {
            return {
                title: 'Welcome to Home/Exams page',
                exams: [
                    {
                        id: 1,
                        id_user: 1,
                        id_subject: 1,
                        id_level: 1,
                        name: 'Exam1',
                        question_number: 3,
                        max_score: 20,
                        date_created: '2018-03-19'
                    },
                    {
                        id: 2,
                        id_user: 1,
                        id_subject: 1,
                        id_level: 1,
                        name: 'Exam2',
                        question_number: 3,
                        max_score: 200,
                        date_created: '2018-03-25'
                    },
                    {
                        id: 3,
                        id_user: 1,
                        id_subject: 1,
                        id_level: 1,
                        name: 'Exam3',
                        question_number: 3,
                        max_score: 10,
                        date_created: '2018-03-25'
                    },
                    {
                        id: 4,
                        id_user: 1,
                        id_subject: 1,
                        id_level: 1,
                        name: 'Exam4',
                        question_number: 7,
                        max_score: 48,
                        date_created: '2018-03-26'
                    },
                    {
                        id: 5,
                        id_user: 1,
                        id_subject: 1,
                        id_level: 1,
                        name: 'Exam5',
                        question_number: 7,
                        max_score: 48,
                        date_created: '2018-03-26'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .card {
        margin-top: 1.5em;
    }

    .card-header {
        background: white;
    }

    .exam {
        cursor: pointer;
    }
</style>
