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
Vue.use(VueResource)

export default {
  name: 'hello',
  components: {
    PuppyList,
    multiselect
  },
  data () {
    return {
      options: [
        {
          name: '附近',
          values: [
            { name: '附近', value: '0' },
            { name: '1000m', value: '1' }
          ]
        },
        {
          name: '海淀区',
          values: [
            { name: '中关村', value: '100' },
            { name: '五道口', value: '101' }
          ]
        },
        {
          name: '西城区',
          values: [
            { name: '天安门', value: '200' },
            { name: '故宫', value: '201' }
          ]
        }
      ],
      contents: 'loading',
      geoValue: { name: '中关村', value: '100' }
    }
  },
  watch: {
    geoValue: function (val) {
      this.fetchData(val.value)
    }
  },
  mounted () {
    this.fetchData(0)
  },
  methods: {
    fetchData () {
      // alert(this.geoValue.value)
      // console.log(val)
      let val = this.geoValue.value
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
