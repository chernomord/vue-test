<template>
    <div>
        <h1>Задачи</h1>
        <input v-model="newTodo" v-on:keyup.enter="addTodo">
        <ul>
            <li v-for="todo in todos">
                <span>{{ todo.text }}</span>
                <button v-on:click="removeTodo($index)">X</button>
            </li>
        </ul>
    </div>
</template>

<script>
    //import store from '../store'

    export default {

        name: 'NewsView',

        data: () => ({
            newTodo: '',
            todos: [
                {text: 'Пример текста задачи'}
            ]
        }),
        methods: {
            addTodo: function () {
                let text = this.newTodo.trim()
                let unique = true
                if (text) {
                    this.todos.forEach((el)=>{
                        if(el.text == text) {
                            unique = false
                        }
                    })
                    if (unique) {
                        this.todos.push({text: text})
                    }
                    this.newTodo = ''
                }
            },
            removeTodo: function (index) {
                this.todos.splice(index, 1)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
