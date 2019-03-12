<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  @import url("styles/resetStyle.css");
*{margin: 0;padding:0;}
.user-dropdown{
  width: 200px;
}
</style>
