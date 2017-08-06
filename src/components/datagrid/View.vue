<template>
    <div style="width:100%;height:100%">
        <plui-datagrid
            :url="url"
            :columns="columns"
            :maxHeight="maxHeight"
            :pageSize="pageSize"
            :pageSizes="pageSizes"
            :btnFlag="btnFlag"
            :btns="btns">
        </plui-datagrid>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                url: 'http://168.168.1.191:7001/platform_upgrade/getPermTree.go',
                maxHeight: 500,
                pageSize: 5,
                pageSizes: [5, 20, 50],
                columns: [
                    {text: '权限ID', value: 'perm_id', width: '150', sortable: true, resizable: false},
                    {text: '权限名', value: 'perm_name', resizable: false},
                    {text: '权限码', value: 'perm_code', width: '200', sortable: true},
                    {text: '类型', value: 'perm_type', align: 'left'},
                    {text: '备注', value: 'remark', align: 'center', showTooltip: true}
                ],
                btnFlag: true,
                btns: [
                    {text: '新增', funName: 'addEvent', type: 'text', size: 'mini'},
                    {text: '编辑', funName: 'editEvent', type: 'primary', size: 'small'},
                    {text: '删除', funName: 'deleteEvent', type: 'warning', size: 'small'}
                ]
            }
        }
    }
</script>
