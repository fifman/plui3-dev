<template>
	<div>
		<plui-table 
			ref="table"
			@rowClick="rowClick">
		</plui-table>
		<plui-pagination
			ref="pagniation"
			@currentChange="currentChange" 
			@sizeChange="sizeChange" >
		</plui-pagination>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
	    name: 'pluiDatagrid',
	    data () {
	        return {
	            tableUrl: '',
	            tableData: []
	        }
	    },
	    props: [
	        'url',
	        'columns',
	        'btnFlag',
	        'btns',
	        'tableHeight',
	        'maxHeight',
	        'pageSize',
	        'pageSizes'
	    ],
	    created: function () {
	        this.$nextTick(function () {
	            this.tableUrl = this.url
	            this.$refs.table.btnFlag = this.btnFlag
	            this.$refs.table.columns = this.columns
	            this.$refs.table.btns = this.btns
	            this.$refs.table.tableHeight = this.tableHeight
	            this.$refs.table.maxHeight = this.maxHeight
	            if (this.pageSize) {
	                this.$refs.pagniation.pageSize = this.pageSize
	            }
	            if (this.pageSizes) {
	                this.$refs.pagniation.pageSizes = this.pageSizes
	            }
	        })
	    },
	    methods: {
	        setInputValue (key, value) {
	            axios.get(this.url).then(response => {
	                this.initKey = key
	                this.$refs.table.setInputValue(key, value)
	            })
	        },
	        getData (pageSize, currentPage) {
	            if (parseInt(pageSize) === 0 || parseInt(currentPage) === 0) {
	                return
	            }
	            if (parseInt(pageSize) * parseInt(currentPage) > this.tableData.length) {
	                pageSize = parseInt(this.tableData.length) - parseInt(pageSize) * (parseInt(currentPage) - 1)
	            }
	            if (parseInt(pageSize) > this.tableData.length) {
	                pageSize = this.tableData.length
	            }
	            var tempArr = new Array(pageSize)
	            for (var i = 0; i <= pageSize - 1; i++) {
	                var j = parseInt(this.$refs.pagniation.pageSize) * (parseInt(currentPage) - 1) + i
	                tempArr[i] = this.tableData[j]
	            }
	            this.$refs.table.tableData = tempArr
	        },
	        rowClick (row) {
            this.$emit('rowClick', row)
	        },
	        currentChange (currentChange) {
	            this.getData(this.$refs.pagniation.pageSize, currentChange)
	        },
	        sizeChange (sizeChange) {
	            this.getData(sizeChange, this.$refs.pagniation.currentPage)
	        }
	    },
	    watch: {
	        tableUrl: {
	            handler (curVal, oldVal) {
	                axios.get(curVal).then(response => {
	                    this.tableData = response.data
	                })
	            },
	            deep: true
	        },
	        tableData: {
	            handler (curVal, oldVal) {
	                this.tableData = curVal
	                this.$refs.pagniation.totalSize = curVal.length
	                this.getData(this.$refs.pagniation.pageSize, this.$refs.pagniation.currentPage)
	            },
	            deep: true
	        }
	    }
	}
</script>