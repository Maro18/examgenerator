<template>
    <div class="subjects">
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
                            <b-form-group description="" :label="'Enter a ' + this.pageName.toLowerCase()" label-for="text">
                                <b-form-input id="name" v-model="newItem.name" type="text" :placeholder="this.pageName + ' name'"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="12"></b-col>
                        <div class="add-button">
                            <b-btn type="submit" variant="outline-primary" size="lg">Add new {{this.pageName.toLowerCase()}}</b-btn>
                        </div>
                    </b-row>
                </b-form>
            </div>

            <b-jumbotron class="jumbotron-no-items" v-if="subjects.length === 0"
                         :header="'You didn\'t create any ' + this.title.toLowerCase() +' yet.'"
                         :lead="'To create a ' + this.pageName.toLowerCase() + ' click on the button New ' + this.pageName.toLowerCase() +' above.'">
            </b-jumbotron>

            <b-card-group columns>
                <b-card v-for="subject in subjects" :key="subject.id" bg-variant="info" :header="subject.name" text-variant="white" class="text-center">
                    <p class="card-text">
                        <b-btn variant="secondary" size="sm" class="card-link" v-b-tooltip.hover title="Edit"><i class="far fa-edit"></i></b-btn>
                        <b-btn variant="secondary" size="sm" @click="onDelete(subject)" class="card-link" v-b-tooltip.hover title="Delete"><i class="far fa-trash-alt"></i></b-btn>
                    </p>
                </b-card>
            </b-card-group>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Subjects',
        data() {
            return {
                title: 'Subjects',
                pageName: 'Subject',
                addNew: false,
                addIcon: 'fa-plus',
                newItem: {},
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
                ]
            }
        },
        methods: {
            toggleAdd() {
                this.addNew = !this.addNew;
                this.addIcon = this.addNew ? 'fa-times' : 'fa-plus';
            },
            onDelete(subject) {
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
                        this.subjects.splice(this.subjects.indexOf(subject), 1);
                        this.$toasted.show(this.pageName + ' ' + subject.name + ' has been removed').goAway(2000);
                    }
                })
            },
            onEdit(subject) {
                if (!this.addNew)
                    this.toggleAdd()
            },
            onSubmit() {
                this.subjects.unshift({
                    id: this.newItem.id,
                    name: this.newItem.name
                });
              this.$toasted.show(this.pageName + ' has been added').goAway(2000);
            }
        }
    }
</script>

<style scoped>

</style>
