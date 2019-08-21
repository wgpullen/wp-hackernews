<template>
  <b-navbar type="is-dark" id="nav">
    <template slot="brand">
      <b-navbar-item href="/">
        <strong>HN</strong>
      </b-navbar-item>
      <b-navbar-item v-if="isDev">
        <span @click="rolloutOverride">DEV</span>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="/">
        Hot
      </b-navbar-item>
      <b-navbar-item href="/ask">
        Ask
      </b-navbar-item>
      <b-navbar-item href="/show">
        Show
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-black">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<style lang="stylus">
#nav {
  margin-bottom: 15px
}
</style>
<script>
import Rox from 'rox-browser'
export default {
  data () {
    return {
      isDev: process.env.NODE_ENV === 'development'
    }
  },
  methods: {
    rolloutOverride: () => {
      Rox.showOverrides()
    }
  }
}
</script>
