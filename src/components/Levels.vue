<template>
    <div class="levels">
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
                            <b-form-group description="" label="Enter a level" label-for="text">
                                    <b-form-input id="name" v-model="newItem.name" type="text" placeholder="Level name"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="12"></b-col>
                        <div class="add-button">
                            <b-btn type="submit" variant="outline-primary" size="lg">Add new {{this.pageName.toLowerCase()}}</b-btn>
                        </div>
                    </b-row>
                </b-form>
            </div>

            <b-jumbotron class="jumbotron-no-items" v-if="levels.length === 0"
                         :header="'You didn\'t create any ' + this.title.toLowerCase() +' yet.'"
                         :lead="'To create a ' + this.pageName.toLowerCase() + ' click on the button New ' + this.pageName.toLowerCase() +' above.'">
            </b-jumbotron>

            <b-card-group columns>
                <b-card v-for="level in levels" :key="level.id" bg-variant="info" :header="level.name" text-variant="white" class="text-center">
                    <p class="card-text">
                        <b-btn variant="secondary" size="sm" class="card-link" v-b-tooltip.hover title="Edit"><i class="far fa-edit"></i></b-btn>
                        <b-btn variant="secondary" size="sm" @click="onDelete(level)" class="card-link" v-b-tooltip.hover title="Delete"><i class="far fa-trash-alt"></i></b-btn>
                    </p>
                </b-card>
            </b-card-group>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Levels',
        data() {
            return {
                title: 'Levels',
                pageName: 'Level',
                addNew: false,
                addIcon: 'fa-plus',
                newItem: {},
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
            onDelete(level) {
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
                        this.levels.splice(this.levels.indexOf(level), 1);
                      this.$toasted.show(this.pageName + ' ' + level.name + ' removed').goAway(2000);
                    }
                })
            },
            onEdit(level) {
                if (!this.addNew)
                    this.toggleAdd()
            },
            onSubmit() {
                this.levels.unshift({
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
