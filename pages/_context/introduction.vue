<template>
  <section class="container">
    <div>
      <header-common :baseInfo="baseInfo" :resContext="resContext" />
      <swiper-common :bannerList="bannerList" />
  	  <about-us :introInfo="footerInfo" />
  	  <footer-common :footerInfo="footerInfo" />
    </div>
  </section>
</template>
<script>
import headerCommon from '~/components/common/header.vue'
import swiperCommon from '~/components/common/swiper.vue'
import aboutUs from '~/pages/introductions/aboutUs.vue'
import footerCommon from '~/components/common/footer.vue'
export default {
  components: {
    headerCommon,
    swiperCommon,
    aboutUs,
    footerCommon
  },
  data () {
    return {
      bannerList:[],
      footerInfo:'',
      baseInfo:'',
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
  async asyncData ({ app,params }) {
    let { data:res2 } = await app.$axios.get('http://172.16.1.145:8081/mw/www/page/index/'+params.marketId)
        return {  
          bannerList: res2.data.banners,
          footerInfo:res2.data.introduction,
          baseInfo:res2.data.baseInfo,
          marketId:params.marketId,
          resContext:params.context
        }
  }
}
</script>

<style>

</style>
