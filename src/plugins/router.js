import Vue from 'vue'
import VueRouter from 'vue-router'
import HojaDePersonaje from "../views/HojaDePersonaje";
import Inicio from "../views/Inicio";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'inicio',
        component: Inicio
    },
    {
        path: '/personaje',
        name: 'hoja-de-personaje',
        component: HojaDePersonaje
    }
]

const router = new VueRouter({
      mode: 'history',
      base: process.env.BASE_URL,
      routes
})

export default router
