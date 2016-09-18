<template>
  <div id="wrapper">

    <nav id="header">
      <a v-link="{path:'/tasks'}">Задачи</a>
      <a v-link="{path:'/filter'}">Фильтр</a>
      <a v-link="{path:'/user'}">О пользователе</a>
    </nav>

    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
@import "../variables.styl"

html, body
  font-family 'Open Sans', sans-serif
  font-size 16px
  height 100%

nav a
  text-decoration none
  padding 4px 8px
  background-color #6ba7c0
  color white
  &.v-link-active
    background-color #daf0f8
    color black
</style>
