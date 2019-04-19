import Vue from 'vue'
import Router from 'vue-router'

//FirstPage
import HOME from '@/components/firstpage/Home'
import ClassPage from '@/components/classpage/ClassPage'
//longin
import Signi from '@/components/classpage/components/sign/sign_in'
//teaher
import teacher from '@/components/classpage/components/personal/teacher'
import courseteacher from '@/components/classpage/components/personal/userteacher/courseteacher'
import cselection from '@/components/classpage/components/personal/userteacher/cselection'
import eselection from '@/components/classpage/components/personal/userteacher/eselection'
import tselection from '@/components/classpage/components/personal/userteacher/tselection'
import coursevalue from '@/components/classpage/components/personal/userteacher/coursevalue'
import exam from '@/components/classpage/components/personal/userteacher/exam'
import uptest from '@/components/classpage/components/personal/userteacher/uptest'
//student
import students from '@/components/classpage/components/personal/students'
import coursestudents from '@/components/classpage/components/personal/userstudents/coursestudents'
//Coursevideo
import Coursevideo from '@/components/classpage/components/Coursevideo'
import annoucement from '@/components/classpage/components/part/annoucement'
import list from '@/components/classpage/components/part/list'
import test from '@/components/classpage/components/part/test'
import item from '@/components/classpage/components/part/item'
import score from '@/components/classpage/components/part/score'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'HOME',
      component: HOME
    },
    {
      path: '/classpage',
      name: 'ClassPage',
      component: ClassPage,
      children: [
        {
          path: '/sign_in',
          name: 'in',
          component: Signi
        },
      ]
    }, {
      path: '/teacher',
      component: teacher,
      children: [
        {
          path: '/teacher/courseteacher',
          name: 'courseteacher',
          component: courseteacher
        }, {
          path: '/teacher/cselection',
          name: 'cselection',
          component: cselection
        }, {
          path: '/teacher/eselection',
          name: 'eselection',
          component: eselection
        }, {
          path: '/teacher/tselection',
          name: 'tselection',
          component: tselection
        }, {
          path: '/teacher/coursevalue',
          name: 'coursevalue',
          component: coursevalue,
        }, {
          path: '/teacher/coursevalue/exam',
          name: 'exam',
          component: exam
        }, {
          path: '/teacher/coursevalue/uptest',
          name: 'uptest',
          component: uptest
        }
      ],
    }, {
      path: '/students',
      component: students,
      children: [
        {
          path: '/students/coursestudents',
          name: 'coursestudents',
          component: coursestudents
        }
      ],
    }, {
      path: '/coursevideo',
      name: 'Coursevideo',
      component: Coursevideo,
      children: [
        {
          path: '/coursevideo/annoucement',
          name: 'annoucement',
          component: annoucement
        }, {
          path: '/coursevideo/list',
          name: 'list',
          component: list
        }, {
          path: '/coursevideo/test',
          name: 'test',
          component: test
        }, {
          path: '/coursevideo/item',
          name: 'item',
          component: item
        }, {
          path: '/coursevideo/score',
          name: 'score',
          component: score
        },
      ]
    }
  ]
})
