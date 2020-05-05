<template>
  <div class="mine">
    <Profile />
    <OrderMenu />
    <Cell />
  </div>
</template>

<script>
import Profile from '../../components/mine/Profile'
import OrderMenu from '../../components/mine/OrderMenu'
import Cell from '../../components/mine/Cell'

export default {
  data () {
    return {}
  },
  components: {
    Profile, OrderMenu, Cell
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.mine{
  background: #e4e4e4;
  height: 100%;
  width: 100%;
}
</style>
