<template>
  <div>
    <video src=""> video </video>
    <div class="main">
      <div class="filter">
        <GeoSelect></GeoSelect>
      </div>
      <div class="contents">
        <div v-if="loading">loading</div>
        <div v-if="error">{{error.msg}}</div>
        <div v-if="contents">
          <ul>
            <li v-for="item in contents">
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import GeoSelect from './geoSelect'
import VueResource from 'vue-resource'
import Vue from 'vue'
Vue.use(VueResource)
export default {
  name: 'hello',
  components: {
    GeoSelect
  },
  data () {
    return {
      loading: false,
      contents: null,
      error: null
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.error = this.contents = null
      this.loading = true
      this.$http.get('/static/contents.json').then(response => {
        this.loading = false
        this.contents = JSON.parse(response.bodyText)
        console.log(this.contents)
      }, response => {
        this.loading = false
        this.error = {
          msg: 'Api request error',
          contents: response.bodyText
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color:red
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
