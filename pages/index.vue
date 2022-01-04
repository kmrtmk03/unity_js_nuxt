<template lang="pug">
  .index
    <Opening />
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

  li {
    list-style: none;
  }

  .index {
    width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
  }

</style>
