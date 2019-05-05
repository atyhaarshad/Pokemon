<template lang="html">

  <div id="main">
      <link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet">
    <div id="banner">
      <img id="pokemon" alt="pokemon" src="./assets/pokemon.png">
    </div>
    <router-view id="view"/>
  </div>
</template>

<script>


export default {
  data(){
    return {
      search: ''
    }
  },
  computed: {

  }

}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#main{
  /* display: flex; */
  /* justify-content: left; */
  width: 100%;
  background-color: #ffcc03;

}

#banner{
  display: flex;
  justify-content: center;
}

#pokemon{
  display: flex;
  justify-content: center;
  height: 100px;
  margin-bottom: 50px;
  margin-top: 50px;
}


</style>
