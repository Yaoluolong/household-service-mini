<template>
  <div>
    <van-row>
      <van-col span="7">
        <van-sidebar :active-key="activeKey">
          <van-sidebar-item title="标签名" />
          <van-sidebar-item title="标签名" />
          <van-sidebar-item title="标签名" />
        </van-sidebar>
      </van-col>
      <van-col span="17">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeKey: 0
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
