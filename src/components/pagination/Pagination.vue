<template>
  <div class="block">
    <el-pagination
      @current-change="currentChange"
      @size-change="sizeChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalSize" >
    </el-pagination>
  </div>
</template>

<script>
    export default {
        name: 'pluiPagination',
        methods: {
            currentChange (val) {
                this.currentPage = val
                this.$emit('currentChange', val)
            },
            sizeChange (val) {
                this.pageSize = val
                // val = this.pageSize + ',' + this.currentPage;
                this.$emit('sizeChange', val)
            }
        },
        data () {
            return {
                totalSize: 100,
                currentPage: 1,
                pageSize: 5,
                pageSizes: [5, 20, 50, 100]
            }
        }
    }
</script>

<style>
</style>
