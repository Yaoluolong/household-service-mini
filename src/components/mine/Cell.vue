<template>
  <div class="cell-group">
    <van-group>
      <van-cell title="单元格" is-link icon="location-o"/>
      <van-cell title="单元格" is-link icon="location-o"/>
    </van-group>
  </div>
</template>

<script>
export default {
  name: 'Cell',
  data () {
    return {}
  },
  components: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.cell-group{
  margin:10px 0
}
</style>
