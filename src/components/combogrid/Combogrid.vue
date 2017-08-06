<template>
    <div style="width:100%;height:100%">
        <el-input
            ref="input"
            resize
            @click="onClick"
            size="small"
            readonly
            :disabled="disabled"
            v-model="value"
            :icon="iconClass"
            :name="name">
        </el-input>
        <el-popover
            ref="popover"
            :width="panelWidth"
            :value="expand"
            :placement="place"
            :visible-arrow=false
            trigger="manual">
            <plui-datagrid
                ref="datagrid"
                :url="url"
                :columns="columns"
                @rowClick="rowClick">
            </plui-datagrid>
        </el-popover>
    </div>
</template>

<script>
    export default {
        name: 'pluiCombogrid',
        data () {
            return {
                panelWidth: '',
                expand: false,
                value: '',
                down: true,
                inputValue: [],
                name: '',
                disabled: false,
                initFlag: true,
                url: 'http://168.168.1.191:7001/platform_upgrade/getPermTree.go',
                columns: [
                    {text: '权限ID', value: 'perm_id', width: '150', sortable: true, resizable: false},
                    {text: '权限名', value: 'perm_name', resizable: false},
                    {text: '权限码', value: 'perm_code', width: '200', sortable: true},
                    {text: '类型', value: 'perm_type', align: 'left'},
                    {text: '备注', value: 'remark', align: 'center', showTooltip: true}
                ]
            }
        },
        props: [
            'multiSelectFlag',
            'textvalue'
        ],
        created: function () {
            this.$nextTick(function () {
                this.panelWidth = this.$refs.input.$el.scrollWidth - 20
                this.$refs.datagrid.$refs.table.singleSelect = !this.multiSelectFlag
            })
        },
        computed: {
            iconClass () {
                return this.expand ? 'arrow-up' : 'arrow-down'
            },
            place () {
                return this.down ? 'bottom' : 'top'
            }
        },
        methods: {
            getInputValue () {
                return this.$refs.input.$data.currentValue
            },
            setInputValue (value) {
                this.$nextTick(function () {
                    this.initFlag = false
                    this.$refs.input.$data.currentValue = value
                    this.$refs.datagrid.setInputValue(this.textvalue, value)
                })
            },
            onClick () {
                this.expand = !this.expand
                this.panelWidth = this.$refs.input.$el.scrollWidth - 20
            },
            rowClick (param) {
                if (!this.multiSelectFlag) {
                    this.$refs.input.$data.currentValue = param[this.textvalue]
                    this.expand = false
                }
            },
            selectionChange (val) {
                if (this.initFlag) {
                    this.inputValue = val
                    let value = ''
                    let _value = this.$refs.input.$data.currentValue
                    for (var i = val.length - 1; i >= 0; i--) {
                        value = val[i][this.textvalue]
                        if (_value === '') {
                            _value = value
                        } else if (_value.indexOf(value) < 0) {
                            _value = _value + ',' + value
                        }
                    }
                    this.$refs.input.$data.currentValue = _value
                }
            }
        }
    }
</script>
