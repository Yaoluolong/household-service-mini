<template>
  <div>
    <span class="hello">Hello World</span>
    <van-button type="primary" @click="jump">按钮</van-button>
  </div>
</template>

<script>
import { post } from '@/utils/request'

export default {
  data () {
    return {

    }
  },

  components: {

  },

  methods: {
    jump () {
      post('https://www.baidu.com').then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.hello{
  color: red;
}
</style>
