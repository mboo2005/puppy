<template>
  <div>
    <!-- <video src=""> video </video> -->
    <div class="main">
      <div class="filter">
        <multiselect v-model="geoValue" :options="options"  group-values="values" group-label="name" placeholder="Type to search" track-by="name" label="name"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>{{geoValue}}
      </div>
      <PuppyList :contents="contents"></PuppyList>
    </div>
  </div>

</template>

<script>
import VueResource from 'vue-resource'
import multiselect from 'vue-multiselect'
import PuppyList from './PuppyList'
import Vue from 'vue'
import breedSelectOptions from '../assets/breedSelectOptions.json'
import geoSelectOptions from '../assets/geoSelectOptions.json'

Vue.use(VueResource)

export default {
  name: 'hello',
  components: {
    PuppyList,
    multiselect
  },
  data () {
    return {
      options: geoSelectOptions,
      geoValue: null,
      genderOptions: [{name: '公', value: 1}, {name: '母', value: 0}],
      genderValue: 0,
      breedOptions: breedSelectOptions,
      breedValue: null,
      contents: 'loading'
    }
  },
  watch: {
    geoValue: function (val) {
      this.fetchData(val.value)
    }
  },
  created () {
    navigator.geolocation.getCurrentPosition(function (success) {
      console.log(success)
      this.geoValue = success
    },
    function (failure) {
      console.log(failure)
      if (failure.message.indexOf('Only secure origins are allowed') === 0) {
      // Secure Origin issue.
      }
    })
  },
  mounted () {
    this.fetchData(0)
  },
  methods: {
    fetchData () {
      // alert(this.geoValue.value)
      // console.log(val)
      let val = (this.geoValue !== null) ? this.geoValue.value : 0
      this.$http.get('/static/contents.json?v=' + val).then(response => {
        this.contents = JSON.parse(response.bodyText)
      }, error => {
        // this.contents = {
        //   msg: 'Api request error',
        //   contents: response.bodyText
        // }
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
