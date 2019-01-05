<template>	
  	<div class="swiper-con">
  		<swiper class="wraper" :options="swiperOption" ref="mySwiper" >
  			<swiper-slide v-for="item of bannerArr" :key="item.bannerId">
  				<a class="imgHref" :herf="item.bannerImgLink">   	
  			    	<img class="swiper-img" :src="imgUrlPre + item.bannerImgUrl" :onerror="errorImg" :alt="item.bannerImgAlt">
		    	</a> 
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
  		</swiper>
  	</div>
</template>
<script>
	import defaultImg from '@/static/images/default.png'
	export default{
		name:"swiperCommon",
		props:['bannerList'],
	    data () {
	      return {
	        swiperOption: {
	        	pagination:'.swiper-pagination'
	        },
	        imgUrlPre:this.$evnConfig.imgUrlPre,
	        bannerArr:this.bannerList,
	        errorImg:'this.src="' + defaultImg + '"',
	      }
	    },
	    mounted () {
	    	if(this.bannerArr.length == 0){
	    		this.bannerArr = [
	    			{
	    				"bannerId":"10101",
	    				"bannerImgUrl":"https://client.anpxd.com/images/banner@2x.png",
	    			}
	    		]
	    		this.imgUrlPre = ''
	    	}
	    },
	    methods:{
	    }
	}
</script>
<style lang="stylus" scoped>
	.wraper>>>.swiper-pagination-bullet-active
		background:#fff
	.swiper-con
		width:100%
		height:0
		padding-bottom:37%
		overflow:hidden
	.wraper
		width:100%
		height:0
		padding-bottom:37%
		background:#eee
		.imgHref
			display:block
			.swiper-img
				width:100%
				height:3.7rem
				
</style>
