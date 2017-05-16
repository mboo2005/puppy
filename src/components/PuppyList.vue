<template>
	<div class="contents">
    <div v-if="contents">
      <ul>
        <li v-for="item in contents">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PuppyList',
  props: ['contents']
}
</script>
