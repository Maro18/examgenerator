<template>
    <div class="questions">
        <b-container fluid>
            <b-row class="justify-content-md-center">
                <b-col cols="12" md="12">
                    <h1 class="page-title">{{title}}</h1>
                </b-col>

                <b-btn class="open-form-btn" variant="outline-primary" @click="toggleAdd()" size="lg">
                    <i class="fas" :class="addIcon"></i>
                    New {{pageName}}
                </b-btn>
            </b-row>

        <div id="new-container" v-if="addNew">
            <b-form class="form-add-new-item" @submit.prevent="onSubmit">
                <b-row class="justify-content-md-center" align-h="center">
                    <b-col cols="12" md="7">
                        <b-form-group description="" label="Choose a subject" label-for="subjects">
                            <b-form-select id="subjects" v-model="newItem.subject">
                                <option v-for="subject in subjects" :key="subject.id" :value="subject.id">{{subject.name}}</option>
                            </b-form-select>
                        </b-form-group>
                    </b-col>

                    <b-col cols="12" md="7">
                        <b-form-group description="" label="Choose a level" label-for="levels">
                            <b-form-select id="levels" v-model="newItem.level">
                                <option v-for="level in levels" :key="level.id" :value="level.id">{{level.name}}</option>
                            </b-form-select>
                        </b-form-group>
                    </b-col>

                    <b-col cols="12" md="7">
                        <b-form-group description="" label="Enter the question" label-for="text">
                            <b-form-textarea id="text" v-model="newItem.text" placeholder="Enter the question text" :rows="3" :max-rows="6">
                            </b-form-textarea>
                        </b-form-group>
                    </b-col>

                    <b-col cols="12" md="7"><h4 class="form-section">Answers:</h4></b-col>

                    <b-col class="answer" v-for="(answer, index) in answers" :key="answer.id" cols="12" md="7">
                        <b-form-group>
                            <b-input-group>
                                <b-input-group-prepend>
                                    <b-checkbox size="lg" v-model="answer.correct" v-bind:checked="answer.correct"></b-checkbox>
                                </b-input-group-prepend>
                                <b-form-input :id="'answer' + (index + 1)" v-model="answer.text" type="text"
                                              :placeholder="'Answer' + (index + 1)"></b-form-input>
                            </b-input-group>
                            <div class="add-answer-container" v-if="answers.length - 1 === index">
                                <b-btn variant="outline-primary" size="sm" @click="addAnswer" v-b-tooltip.hover title="Add">
                                    <i class="fas fa-plus"></i>
                                </b-btn>
                                <b-btn variant="outline-primary" size="sm" @click="removeAnswer" v-b-tooltip.hover title="Remove">
                                    <i class="fas fa-minus"></i>
                                </b-btn>
                            </div>
                        </b-form-group>
                    </b-col>

                    <b-col cols="12" md="12"></b-col>

                    <div class="add-button">
                        <b-btn type="submit" variant="outline-primary" size="lg">Add new {{this.pageName.toLowerCase()}}</b-btn>
                    </div>
                </b-row>
            </b-form>
        </div>

        <b-jumbotron class="jumbotron-no-items" v-if="questions.length === 0"
                     header="You didn't create any questions yet."
                     lead="To create a question you need to insert levels and subjects." >
            <p>If you don't have them created follow the links below and click on new button.</p>
            <router-link to="/subjects">
                <b-btn variant="outline-primary">Create subjects</b-btn>
            </router-link>
            <router-link to="/levels">
                <b-btn variant="outline-primary">Create levels</b-btn>
            </router-link>
        </b-jumbotron>

        <b-row class="item-collection-container">
            <b-card-group deck>
                <b-card no-body v-for="question in questions" :key="question.id">
                    <h4 slot="header">{{question.text}}</h4>
                    <b-card-body>
                        <p class="card-text">{{question.level.name}} {{question.subject.name}}</p>
                    </b-card-body>
                    <b-list-group flush>
                        <b-list-group-item v-for="answer in question.answers" :key="answer.id"><i v-if="answer.correct" class="fas fa-check"></i>{{answer.text}}</b-list-group-item>
                    </b-list-group>
                    <b-card-body>
                        <b-btn variant="outline-primary" size="sm" class="card-link" v-b-tooltip.hover title="Edit"><i class="far fa-edit"></i></b-btn>
                        <b-btn variant="outline-primary" size="sm" @click="onDelete(question)" class="card-link" v-b-tooltip.hover title="Delete"><i class="far fa-trash-alt"></i></b-btn>
                    </b-card-body>
                </b-card>
            </b-card-group>
        </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Questions',
        data() {
            return {
                title: 'Questions',
                pageName: 'Question',
                addNew: false,
                addIcon: 'fa-plus',
                newItem: {},
                answers: [
                    {
                        id: 1,
                        text: '',
                        correct: false
                    },
                    {
                        id: 2,
                        text: '',
                        correct: false
                    }
                ],
                questions: [
                    {
                        id: 1,
                        text: "Dafuq bruh?",
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
                                text: 'Kill me',
                                correct: true
                            }
                        ]
                    },
                    {
                        id: 2,
                        text: "What does print do?",
                        subject: {
                            id: 1,
                            name: 'Programming'
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
                                text: 'Shows dat thing on screen',
                                correct: true
                            }
                        ]
                    },
                    {
                        id: 3,
                        text: "2 + 2 =",
                        subject: {
                            id: 2, name: 'Math'
                        },
                        level: {
                            id: 1,
                            name: 'Easy'
                        },
                        points: 2,
                        answers: [
                            {
                                id: 1,
                                text: '2',
                                correct: false
                            },
                            {
                                id: 2,
                                text: '4',
                                correct: true
                            },
                            {
                                id: 3,
                                text: '5',
                                correct: false
                            }
                        ]
                    }
                ],
                subjects: [
                    {
                        id: 1,
                        name: "Programming"
                    },
                    {
                        id: 2,
                        name: "Math"
                    },
                    {
                        id: 3,
                        name: 'Physics'
                    }
                ],
                levels: [
                    {
                        id: 1,
                        name: "Easy"
                    },
                    {
                        id: 2,
                        name: "Normal"
                    },
                    {
                        id: 3,
                        name: 'Hard'
                    }
                ]
            }
        },
        methods: {
            toggleAdd() {
                this.addNew = !this.addNew;
                this.addIcon = this.addNew ? 'fa-times' : 'fa-plus';
            },
            onDelete(question) {
                this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#1f5e86',
                    cancelButtonColor: '#768485',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result) {
                        this.questions.splice(this.questions.indexOf(question), 1);
                        this.$toasted.show(this.pageName + ' removed').goAway(2000);
                    }
                })
            },
            onEdit(question) {
                if (!this.addNew)
                    this.toggleAdd()
            },
            onSubmit() {
                this.questions.unshift(
                    {
                        id: this.newItem.id,
                        text: this.newItem.text,
                        subject: this.newItem.subject,
                        level: this.newItem.level,
                        points: this.newItem.points,
                        answers: this.answers
                    }
                );
              this.$toasted.show(this.pageName + ' has been added').goAway(2000);
            },
            addAnswer() {
                this.answers.push({
                    text: '',
                    correct: false
                })
            },
            removeAnswer() {
                if (this.answers.length > 2)
                    this.answers.pop();
            }
        }
    }
</script>

<style scoped>
    .add-answer-container {
        margin-top: 1em;
    }
</style>
