<template>
    <div class="birth-place">
        <h2>Место рождения</h2>
        <select v-model="regionsSelected[0]" v-on:change="selectRegion()">
            <option v-bind:value="country" v-for="country in regionsData"  >{{country.name}}</option>
        </select>
        <select v-model="regionsSelected[1]" v-on:change="selectCountry()" :disabled="!regionsSelected[0]">
            <option v-bind:value="region" v-for="region in regionsSelected[0].regions">{{region.name}}</option>
        </select>
        <select v-model="regionsSelected[2]" :disabled="!regionsSelected[1]">
            <option v-bind:value="town" v-for="town in regionsSelected[1].towns">{{town.name}}</option>
        </select>
    </div>
</template>

<script>
    export default {

        name: 'BirthPlace',

        props: ['regionsSelected'],
        data: () => ({
            regionsData: '',
            countries:'',
            cities: ''
        }),
        created: function () {
            let x = new XMLHttpRequest();
            x.open('GET', 'static/countries.json', true);
            x.send();
            x.onreadystatechange = () => { // (3)
                if (x.readyState != 4) return;
                if (x.status != 200) {
                    console.debug(x.status + ': ' + x.statusText) // исключение
                } else {
                    this.regionsData = JSON.parse(x.responseText) // результат
                }
            }
        },
        methods: {
            selectRegion: function(val) {
                this.regionsSelected[1] = ''
                this.regionsSelected[2] = ''
            },
            selectCountry: function () {
                this.regionsSelected[2] = ''
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .birth-place
        select
            width 80px
</style>
