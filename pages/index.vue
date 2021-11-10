<template lang="pug">
  .index
    <TheHeader/>
    <Menu/>
    <Unity/>
    <Detail/>
    <Controller/>
    <TheFooter/>
</template>

<script>
export default {
  mounted() {
  }
}
</script>


<style>
  * {
    padding: 0;
    margin: 0;
  }

  .index {
    width: 100%;
    overflow-x: hidden;
  }

</style>
