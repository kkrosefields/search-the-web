<template>
  <div id="app">
    <header>
      <p> Logo Here </p>
        <nav> 
          <router-link to="/"> Home </router-link>
          <router-link to="/pokemon"> Pokemon </router-link>
        </nav>
    </header>
    <main> 
      <router-view></router-view>
    </main> 
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
