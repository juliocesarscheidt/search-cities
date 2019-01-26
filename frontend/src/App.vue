<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: 'calibri', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 50px;
}
select {
  width: 200px !important;
}

hr {
  height: 2px;
  background-color: #ddd;
  width: 80%;
}

.multiselect {
  border: 1px solid #ccc !important;
  border-radius: 4px !important;
  min-height: 34px !important;
  width: 200px !important;
}
.multiselect__tags{
  min-height: 34px !important;
  height: 34px !important;
  padding: 4px 20px 4px 4px !important;
  width: 90% !important;
  border: 1px solid #fff0 !important;
}
.multiselect__select{
  height: 34px !important;
}
</style>
