import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Exams from '@/components/Exams'
import Exam from '@/components/Exam'
import Questions from '@/components/Questions'
import Subjects from '@/components/Subjects'
import Levels from '@/components/Levels'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing
        },
        {
            path: '/exams',
            name: 'Exams',
            component: Exams,
            children: [
                {
                    path: '/exam',
                    name: 'Exam',
                    component: Exam
                }
            ]
        },
        {
            path: '/questions',
            name: 'Questions',
            component: Questions
        },
        {
            path: '/subjects',
            name: 'Subjects',
            component: Subjects
        },
        {
            path: '/levels',
            name: 'Levels',
            component: Levels
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ],
    mode: 'history'
})
