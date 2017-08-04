<template>
    <el-table
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      :height="tableHeight"
      :max-height="maxHeight"
      @current-change="handleCurrentChange"
      @row-click="rowClick"
      @row-dblclick="rowDblclick"
      @selection-change="selectionChange"
      @cell-click="handleSelect"
      :border="border">
      <el-table-column v-if="!singleSelect" type="selection" width="55" reserve-selection> </el-table-column>
      <el-table-column v-for="column in columns" 
        :key="column.value" 
        :width="column.width" 
        :show-overflow-tooltip="column.showTooltip" 
        :label="column.text" 
        :prop="column.value"
        :align="column.align"
        :fixed="column.fixed"
        :sortable="column.sortable" 
        :resizable="column.resizable">
      </el-table-column>
      <el-table-column v-if="btnFlag" prop="exec" :width="btnColumnWidth" label="操作">
        <template scope="scope">
          <el-button v-for="(btn,index) in btns" :key="btn.key" :type="btn.type" :icon="btn.icon" :size="btn.size">
              {{btn.text}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: 'pluiTable',
        data () {
            return {
                tableData: [],
                columns: [],
                maxHeight: '',
                tableHeight: '',
                btns: [],
                singleSelect: false,
                btnFlag: false,
                btnColumnWidth: 200,
                border: false
            }
        },
        methods: {
            handleCurrentChange (val) {
                this.currentRow = val
            },
            handleSelect: function (row, column, cell, event) {
                if (!row.dbClickFlag) {
                    if (column.label === '操作') {
                        let outerText = event.toElement.outerText
                        let obj = this.$parent.$data.btns
                        for (var i = obj.length - 1; i >= 0; i--) {
                            if (obj[i].text === outerText) {
                                // let fun = obj[i].funName(row)
                            }
                        }
                    } else {
                        this.$refs.multipleTable.toggleRowSelection(row)
                    }
                }
            },
            rowClick (row) {
                this.$emit('rowClick', row)
            },
            setInputValue (key, value) {
                // 根据input的text内容和对应的key值去判断当前页是否有可勾选的
                this.initKey = key
                let values = value.split(',')
                for (var i = values.length - 1; i >= 0; i--) {
                    let _row = this.tableData.find(d => d[key] === values[i])
                    if (_row) {
                        _row.selectedFlag = true
                        this.$refs.table.toggleRowSelection(_row, true)
                    }
                }
            },
            selectionChange (val) {
                this.$emit('selectionChange', val)
            },
            rowDblclick (row) {
                this.$emit('rowDblclick', row)
            }
        }
    }
</script>

<style>
    .el-table .row-blue {
      background: #c9e5f5;
    }
    .el-table .row-red {
      background: #ee1d24;
    }
    .el-table .row-green {
      background: #e2f0e4;
    }
    /*.el-table__body tr.hover-row>td{
      background-color:#ee1d24
    }*/
</style>
