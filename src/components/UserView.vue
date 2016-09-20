<template>
    <div>
        <h1>О пользователе</h1>
        <div class="name-cover" v-show="!nameInput" v-on:click="nameInput = !nameInput">
            <h1>{{ user.name }}</h1>
        </div>
        <div class="name-input" v-show="nameInput">
            <input v-model="user.name" v-on:keyup.enter="nameInput = !nameInput">
            <span v-bind:class="{'disabled: nameInput}" v-on:click="nameInput = !nameInput"></span>
        </div>
        <div class="email">
            <h2>Email</h2>
            <input type="email" v-model="user.email">
            <div class="errors">
                <div v-show="!validation.email">Пожалуйста, введите действительный адрес e-mail</div>
                <div v-show="!validation.neolant">Адрес должен содержать @neolant.com.</div>
            </div>
        </div>
        <div class="birth-date">
            <h2>Дата рождения</h2>
            <div>
                <simple-datepicker
                    :value.sync="user.birthDate"
                    format="YYYY/MM/DD"></simple-datepicker>
            </div>

        </div>
        <birth-place :regions-selected.sync="user.birthReg" ></birth-place>
        <div class="about">
            <h2>О себе</h2>
            <textarea v-model="user.about"></textarea>
        </div>
        <hr>
        <button v-on:click="save()" :disabled="!validation.email || !validation.neolant">Сохранить</button>

    </div>
</template>

<script>
    import simpleDatepicker from 'vue-simple-datepicker'
    import birthPlace from './BirthPlace.vue'
    export default {

        name: 'UserView',

        components: {
            'simple-datepicker': simpleDatepicker,
            'birth-place': birthPlace
        },

        data: () => ({
            nameInput: false,
            user: {
                name: 'Вася Иванов',
                email: '',
                birthDate: '',
                birthReg: ['','',''],
                about: ''
            }
        }),
        computed: {
            validation: function () {
                const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return {
                    email: emailRE.test(this.user.email),
                    neolant: /@neolant.com/.test(this.user.email)
                }
            }
        },
        created: function () {
            let data = window.localStorage.getItem('user')
            if (data) {
                data = JSON.parse(data)
                this.user = data
            }
        },
        methods: {
            save: function () {
                let data = JSON.stringify(this.user)
                window.localStorage.setItem('user', data)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .name-cover
        cursor pointer

    .name-input
        position: relative
        input
            position relative
            z-index 1
            font-size 2em
            font-weight 800
            font-family 'Open Sans'
        & span
            display block
            position fixed
            z-index 0
            top 0
            left 0
            bottom 0
            width 100%
            opacity 0
            &.disabled
                display none

    .errors
         color #f00

</style>
