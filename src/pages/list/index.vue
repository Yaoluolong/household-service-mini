<template>
  <div>
    {{items }}
  </div>
</template>

<script>
import { index } from '../../api/search'
import { check } from '../../utils/check'

export default {
  components: {},
  data () {
    return {
      key: '',
      items: []
    }
  },
  onLoad (options) {
    console.log(options)
    this.key = options.key
  },
  onShow () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      if (this.key === '热门产品' || this.key === '为你推荐' || this.key === '最新推出') {
        index().then(res => {
          this.items = this.key === '热门产品' ? check(res.data.hotItems)
            : this.key === '为你推荐' ? check(res.data.recommendItems)
              : check(res.data.newItems)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
