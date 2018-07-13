<template>
  <main class="margin-top110">
    <router-view></router-view>
  </main>

</template>
<script>
  export default {

  }
</script>
<style scoped>
  main{
    height:100%;
  }
  @media (min-width: 768px) and (max-width:1600px){
    main {
      padding-left:295px;
      padding-right:400px;
    }
  }
  @media (min-width: 1600px){
    main {
      margin-left:17.58%;
      margin-right: 24%;
    }
  }
</style>
