<template>
    <div class="user-header">
        <b-navbar toggleable="md" type="dark" variant="info">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand>Exam Generator</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item v-for="tab in tabs" :key="tab.path">
                        <router-link :to="tab.path" tag="li">{{tab.text}}</router-link>
                    </b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <template slot="button-content">
                            <i class="far fa-user"></i>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Signout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'UserHeader',
        data: () => ({
            appName: 'Exam Generator',
            tabs: [
                { icon: '', text: 'Exams', path: '/exams' },
                { icon: '', text: 'Questions', path: '/questions' },
                { icon: '', text: 'Subjects', path: '/subjects' },
                { icon: '', text: 'Levels', path: '/levels' }
            ]
        }),
        props: {

        },
        methods: {

        }
    }
</script>

<style scoped>
    .user-header {
        font-size: 1.2em;
    }

</style>
