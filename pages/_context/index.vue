<template>
  <section class="container">
    <div>
      <header-common :baseInfo="baseInfo" :resContext="resContext" />
      <swiper-common :bannerList="bannerList" />
      <car-list :carList="carList" :marketId="marketId" />
      <advantage-list :advantageList="advantageList" />
      <footer-common :footerInfo="footerInfo" />
    </div>
  </section>
</template>
<script>
import headerCommon from '~/components/common/header.vue'
import swiperCommon from '~/components/common/swiper.vue'
import footerCommon from '~/components/common/footer.vue'
import carList from '~/pages/indexs/buyList.vue'
import advantageList from '~/pages/indexs/advantageList.vue'
export default {
  components: {
    headerCommon,
    swiperCommon,
    footerCommon,
    carList,
    advantageList
  },
  data () {
    return {
      baseInfo:'',
      bannerList:[],
      carList:[],
      advantageList:'',
      footerInfo:'',
      marketId:'',
      imgUrlPre:this.$evnConfig.imgUrlPre,
      resContext:''
    }
  },
  head () {
    return{
      title: this.baseInfo.baseinfoName,
      link: [
        { rel: 'icon', type: 'image/x-icon', href: this.imgUrlPre + this.baseInfo.baseinfoFavicon }
      ]
    }
  },
  methods:{
  },
  mounted () {
  },
  async validate({ $axios, params }) {
    let { data: res } = await $axios.get(
      `http://172.16.1.145:8081/mw/www/checkMarket/${params.context}`
    )
    if (typeof res.data != 'undefined') {
      params.marketId = res.data.marketId // 参数存储 marketId
      return true
    } else {
      return false
    }
  },
  async asyncData ({ app , params}) {
    console.log(params.marketId,params.context)
    let { data:res1 } = await app.$axios.get('https://testclient.anpxd.com/controller/carSearch/searchCarInfoDoc', {
        params: {
          carSaleState:20,
          pageSize:2,
          pageIndex:1,
          marketId: params.marketId
        }
      })
    let { data:res2 } = await app.$axios.get('http://172.16.1.145:8081/mw/www/page/index/'+params.marketId)
        return { 
          carList: res1.result , 
          bannerList: res2.data.banners,
          advantageList:res2.data.feature.featureArr,
          footerInfo:res2.data.introduction,
          marketId:params.marketId,
          baseInfo:res2.data.baseInfo,
          resContext:params.context
        }
  }
}
</script>

<style>

</style>
