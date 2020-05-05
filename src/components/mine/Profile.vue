<template>
  <div class="profile-background">
    <div class="profile-avatar">
      <van-image round width="80" height="80" fit="cover" :src="src" />
    </div>
    <div class="profile-info">
      <div class="profile-name">男孩</div>
      <div class="profile-account">13706965100</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      src: 'https://img.yzcdn.cn/vant/cat.jpeg'
    }
  },
  components: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.profile-background {
  display: flex;
  padding: 40px 30px;
  background: #42b983;
  .profile-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    margin-left: 20px;
    font-size: 18px;
    font-weight: 800;
    .profile-name{
      margin-bottom: 6px;
    }
    .profile-account{
      margin-top: 6px;
    }
  }
}
</style>
