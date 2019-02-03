<template>
    <div id="app">
        <UserHeader v-if="loggedIn"/>

        <transition>
            <keep-alive>
                <router-view/>
            </keep-alive>
        </transition>

        <UserFooter v-if="loggedIn"/>
    </div>
</template>

<script>
    import UserHeader from './components/UserHeader'
    import UserFooter from './components/UserFooter'

    export default {
        components: {
            UserHeader,
            UserFooter
        },
        name: 'App',
        data: () => ({
            loggedIn: true,
            showNavigation: false,
            tabs: [
                { icon: 'move_to_inbox', text: 'Exams', path: '/exams' },
                { icon: 'send', text: 'Questions', path: '/questions' },
                { icon: 'contacts', text: 'Subjects', path: '/subjects' },
                { icon: 'error', text: 'Levels', path: '/levels' }
            ],
            methods: {
                setnav() {
                    this.showNavigation = true;
                    console.log("fag");
                }
            },
            props: {
            }
        })
    }
</script>

<style lang="scss">
    $primary: #2C3E50;
    $secondary: #15C39A;
    $background: #FBFBFB;
    $drawer-width: 275px;

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif !important;
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
        color: $primary !important;
        background: $background !important;
    }

    .content {
        background: $background !important;
        color: $primary !important;
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
    }

    #new-container {
        border: 1px solid #dddddd;
        margin-bottom: 1.2em;
    }

    .form-add-new-item {
        margin: 1em 0;
    }

    .page-title {
        font-size: 3em;
        text-align: center;
    }

    .open-form-btn {
        margin-bottom: 1em;
    }

    .collection-item-name {
        font-weight: bold;
        font-size: 1.3em !important;
    }

    .secondary-content {
        cursor: pointer;
    }

    .item-collection-container {
        margin-top: 1em;
    }

    .form-section {
        display: block;
        color: #888888;
        font-weight: lighter;
        text-transform: capitalize;
        letter-spacing: 0.5px;
    }

    .jumbotron-no-items {
        margin-top: 1em;
        box-shadow: 0 0 4px 0 #4d4d4d;
    }

    @media (max-width: 501px) {

    }
</style>

