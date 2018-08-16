<template>
</template>

<script>
export default {
  mounted() {
    localStorage.login=2;
    this.$router.push("/login");
  }
};
</script>

<style scoped>
</style>