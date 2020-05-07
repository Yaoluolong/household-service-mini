<template>
  <div class="order">
    <div class="order-header">
      <div v-if="!order.serviceAddress">请填写个人信息</div>
      <div v-else>
        <div>{{order.serviceAddress}}</div>
        <div>
          <span>{{order.name}}</span>
          <span>{{order.contact}}</span>
        </div>
      </div>
    </div>
    <div class="order-profile">
      <van-cell-group>
        <van-cell is-link url="../setting/profile/main" title="姓名" :label="order.name" />
        <van-cell is-link url="../setting/profile/main" title="联系方式" :label="order.contact" />
        <van-cell is-link url="../setting/address/main" title="服务地址" :label="order.serviceAddress" />
        <van-cell is-link title="服务日期" :label="order.serviceDate" @click="calendarVisible=true" />
      </van-cell-group>
    </div>
    <div class="order-info">
      <van-cell-group>
        <van-cell use-label-slot title="订单信息">
          <div slot="label">
            <div class="item">
              <div class="item-label">产品编号</div>
              <div class="item-value">{{order.commodityID}}</div>
            </div>
            <div class="item">
              <div class="item-label">服务名称</div>
              <div class="item-value">{{order.commodityName}}</div>
            </div>
            <div class="item">
              <div class="item-label">类别</div>
              <div class="item-value">{{order.className}}</div>
            </div>
            <div class="item">
              <div class="item-label">价格</div>
              <div class="item-value">{{order.price}}￥</div>
            </div>
            <div class="item" v-if="order.promotionPrice!==''&&order.promotionPrice!==null">
              <div class="item-label">活动价</div>
              <div class="item-value">{{order.promotionPrice}}￥</div>
            </div>
          </div>
        </van-cell>
      </van-cell-group>
    </div>
    <van-submit-bar
      :price="order.promotionPrice!==''&&order.promotionPrice!==null?order.promotionPrice*100:order.price*100"
      button-type="primary"
      button-text="提交订单"
      decimal-length="2"
      @submit="onSubmit"
    />
    <van-popup :show="calendarVisible" position="bottom" custom-style="height: 35%;">
      <van-datetime-picker
        type="date"
        :value="serviceDate"
        @input="onInput"
        :min-date="Date.now()"
        formatter="formatter"
      />
    </van-popup>
    <van-notify id="van-notify" />
  </div>
</template>

<script>
import { order } from '../../api/order'
export default {
  components: {},
  data () {
    return {
      commodityID: '',
      openid: '',
      order: {},
      serviceDate: '',
      calendarVisible: false
    }
  },
  onLoad (options) {
    this.commodityID = options.commodityID
    this.openid = options.openid
  },
  onShow () {
    this.fetchData(this.commodityID, this.openid)
  },
  methods: {
    fetchData (commodityID, openid) {
      order(commodityID, openid)
        .then(res => {
          this.order = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    onSubmit () {
      const data = { ...this.order }
      console.log(data)
    },
    onInput (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  background-color: #e5e5e5;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  overflow: auto;
  overscroll-behavior-y: contain;
  .order-header {
    background: #42b983;
    color: white;
    text-align: center;
    padding-bottom: 20px;
  }
  .order-info {
    margin: 10px 0;
    .item {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
