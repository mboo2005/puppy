<template>
	<div>
	  <label class="typo__label">Groups</label>
	  <multiselect v-model="value" :options="options"  group-values="values" group-label="name" placeholder="Type to search" track-by="name" label="name"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>
	  
	</div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
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
      value: []
    }
  }
}
</script>
