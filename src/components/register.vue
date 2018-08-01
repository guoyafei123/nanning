<template>
  <div class="row">
    
  </div>
</template>

<script>
  export default {
    components:{
    },
    mounted() {
        this.$store.commit('route_path',this.$route.path);
    }



  }
</script>

<style scoped>

</style>
