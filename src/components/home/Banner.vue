<template>
  <div class="banner">
    <swiper interval="2500" duration="500" autoplay indicator-dots>
      <div v-for="(item,index) in items" :key="index">
        <swiper-item>
          <van-image width="100%" height="100%" fit="fill" :src="item.poster" />
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
import { list } from '../../api/promotion'

export default {
  name: 'Banner',
  data () {
    return {
      items: [
        {
          poromotionID: '123',
          commodityID: '123',
          poster: 'https://img.yzcdn.cn/vant/cat.jpeg'
        },
        {
          poromotionID: '123',
          commodityID: '123',
          poster: 'https://img.yzcdn.cn/vant/cat.jpeg'
        },
        {
          poromotionID: '123',
          commodityID: '123',
          poster: 'https://img.yzcdn.cn/vant/cat.jpeg'
        }
      ]
    }
  },
  onShow () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      list()
        .then(res => {
          this.items = res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
