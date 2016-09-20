<template>
    <div>
        <h1>Фильтр</h1>
        <input v-model="filterText" type="text">
        <label><input type="radio" name="action" value="filter" v-model="filterType">фильтр</label>
        <label><input type="radio" name="action" value="hint" v-model="filterType">хинт</label>
        <p v-for="item in list"> {{{ item | contains filterText filterType }}}</p>
    </div>
</template>

<script>
    export default {

        name: 'FilterView',

        data: () => ({
            filterText: '',
            filterType: 'filter',
            list: [
                'camelize comment typo',
                '[vue@2.0.0-rc.6] props default not works when propsData is undefined in instance creation, 1.0 is ok',
                '[2.0] Internet Explorer select elements display first option by default',
                'Vue throws error Missing required prop even if provided',
                'Add custom v-model modifiers',
                'Allow SSR to render unescaped inlined script tags.',
                'dispatchEvent breaking model synchronization',
                'Param attribute "number" set 0 as default',
                'Need a validate for :prop.once bind',
                '`leave` transition doesn\'t work if the element is shown by default',
                'Add a v-model modifier to treat empty input values as null',
                'Transition <b>bug</b> with keep-alive',
                'Transitioning children elements',
                'No mention of what computed value failed',
                'Filter Dynamic Arguments don\'t support object[\'key\'] notation',
                'Feature Request: Better warning message when a dynamic component is a fragment instance',
                'Merging of HTML classes via class attribute and v-bind broken',
                'Better error message for undefined bound property',
                'A template bug in iOS 8.3 iPhone\'s Safari',
                'Interpolation fails on inline string containing HTML',
                'Absolutely-positioned flexbox child component with transition is duplicated in DOM when visibility is toggled via v-if in Firefox',
                ':track-by with function'

            ]
        }),
        created: function () {
            let filterType = window.localStorage.getItem('filter.type')
            if (filterType) {
                this.filterType = filterType
            }
        },
        watch: {
            filterType: function (val) {
                window.localStorage.setItem('filter.type', val)
            }
        },
        methods: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .yellow
        background-color yellow

</style>
