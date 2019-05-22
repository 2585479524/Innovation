import Vue from 'vue'
import Router from 'vue-router'

//Pages
import HOME from '@/views/Home'
import ClassPage from '@/views/ClassHome'
//longin
import Signi from '@/components/classpage/sign/sign_in'
//teaher
import teacher from '@/components/classpage/personal/teacher'
import courseteacher from '@/components/classpage/personal/userteacher/courseteacher'
import cselection from '@/components/classpage/personal/userteacher/cselection'
import eselection from '@/components/classpage/personal/userteacher/eselection'
import tselection from '@/components/classpage/personal/userteacher/tselection'
import coursevalue from '@/components/classpage/personal/userteacher/coursevalue'
import exam from '@/components/classpage/personal/userteacher/exam'
import uptest from '@/components/classpage/personal/userteacher/uptest'
//student
import students from '@/components/classpage/personal/students'
import coursestudents from '@/components/classpage/personal/userstudents/coursestudents'
//Coursevideo
import Coursevideo from '@/components/classpage/video/Coursevideo'
import addcourse from '@/components/classpage/part/addcourse'
import annoucement from '@/components/classpage/part/annoucement'
import list from '@/components/classpage/part/list'
import test from '@/components/classpage/part/test'
import item from '@/components/classpage/part/item'
import score from '@/components/classpage/part/score'

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
          path: '/teacher/coursevalue/cselection',
          name: 'cselection',
          component: cselection
        }, {
          path: '/teacher/coursevalue/eselection',
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
    },
    {
      path: '/coursevideo/addcourse',
      name: 'addcourse',
      component: addcourse
  }

  ]
})
