<template>
  <div>
    <SearchBar disabled @on-click="toSearch" />
    <Banner />
    <Recommend title="热门产品" :items="hotItems" />
    <Recommend title="为你推荐" :items="hotItems" />
    <Recommend title="最新推出" :items="hotItems" />
    <Baseline />
  </div>
</template>

<script>
import SearchBar from '../../components/home/SearchBar'
import Banner from '../../components/home/Banner'
import Recommend from '../../components/home/Recommend'
import Baseline from '../../components/base/Baseline'
import { getToken } from '../../utils/token'

export default {
  components: {
    SearchBar,
    Banner,
    Recommend,
    Baseline
  },
  data () {
    return {
      hotItems: [
        {
          show: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '陈雁鸣大傻子11111111111111111'
        },
        {
          show: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '陈雁鸣大傻子1111111111111111111'
        },
        {
          show: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '陈雁鸣大傻子111111111111111111'
        }
      ],
      recommendItems: [
        {
          show: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '陈雁鸣大傻子'
        },
        {
          show: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '陈雁鸣大傻子'
        },
        {
          show: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '陈雁鸣大傻子'
        }
      ],
      newItems: [
        {
          show: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '陈雁鸣大傻子'
        },
        {
          show: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '陈雁鸣大傻子'
        },
        {
          show: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '陈雁鸣大傻子'
        }
      ]
    }
  },
  onShow () {
    this.isGetToken()
  },
  methods: {
    toSearch (e) {
      console.log(e)
    },
    isGetToken () {
      const token = getToken()
      if (token.length === 0) {
        mpvue.redirectTo({url: '../login/main'})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hello {
  color: red;
}
</style>
