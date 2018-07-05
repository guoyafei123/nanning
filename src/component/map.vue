<template>
  <div id="allmap" class="xzmap"></div>
</template>

<script>
    export default {
        mounted(){
          if (typeof module === 'object') {window.jQuery = window.$ = module.exports;};
        }
    }
</script>

<style scoped>
  .xzmap {
    width: 100%!important;
    height: 100%!important;
    position: absolute !important;
    background-color: rgb(31, 31, 31)!important;
    /**bottom: 1px;*/
  }
</style>
