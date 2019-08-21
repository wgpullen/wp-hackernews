<template>
  <b-navbar :type="loggedIn ? [headerColor] : ['is-dark']" id="nav">
    <template slot="brand">
      <b-navbar-item href="/">
        <strong>HN</strong>
      </b-navbar-item>
      <b-navbar-item v-if="loggedIn">
        <i>Beta tester</i>
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
          <a class="button is-black" v-if="loggedIn" @click="logout">
            Log out
          </a>
          <a class="button is-black" v-else @click="login">
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
import { Flags } from '../utils/flag'

export default {
  data () {
    return {
      isDev: process.env.NODE_ENV === 'development',
      loggedIn: false,
      headerColor: Flags.headerColor.getValue()
    }
  },
  methods: {
    rolloutOverride: () => {
      Rox.showOverrides()
    },
    login: function () {
      localStorage.setItem('loggedIn', 'true')
      this.loggedIn = true
    },
    logout: function () {
      localStorage.removeItem('loggedIn')
      this.loggedIn = false
    }
  },
  created () {
    if (localStorage.getItem('loggedIn') === 'true') {
      this.loggedIn = true
    }
  }
}
</script>
