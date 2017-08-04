<template>
  <div style="width:100%;height:100%">
    <plui-combogrid 
      :multiSelectFlag="multiSelectFlag"
      :textvalue="textvalue"
      >
    </plui-combogrid>
  </div>
</template>
<script>
  export default {
      data () {
          return {
              multiSelectFlag: false,
              textvalue: 'perm_name'
          }
      }
  }
</script>