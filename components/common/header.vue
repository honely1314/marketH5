<template>
	<div class="header-con clearfix">
		<img class="header-logo" :src="imgUrlPre + baseInfoDate.baseinfoLogoUrl" alt="">
		<span class="iconfont header-icon" @click="handleShowNav">&#xe643;</span>
		<div v-show="navShow" class="nav">
			<a :href="baseUrl + indexUrl" class="nav-list">
				<span class="iconfont nav-list-icon">&#xe62a;</span>首页
			</a>
			<a :href="mshopUrl + marketId" class="nav-list" target="_blank">
				<span class="iconfont nav-list-icon">&#xe629;</span>我要买车
			</a>
			<!-- <a  tag="li" to="/" class="nav-list">
				<span class="iconfont nav-list-icon">&#xe656;</span>汽车资讯
			</a> -->
			<a :href="baseUrl + introductionUrl" class="nav-list">
				<span class="iconfont nav-list-icon">&#xe633;</span>关于我们
			</a>
		</div>
	</div>
</template>
<script>
	export default{
		name:'headerCommon',
		props:['resContext','baseInfo'],
		data () {
			return{
				navShow:false,
				marketId:this.baseInfo.marketId,
				baseInfoDate:this.baseInfo,
				imgUrlPre:this.$evnConfig.imgUrlPre,
				slash:this.resContext,
				indexUrl:this.resContext,
				introductionUrl:this.resContext +'/introduction',
				mshopUrl:this.$evnConfig.mshopUrl,
				baseUrl:''
			}
		},
		mounted () {
			let resUrl = window.location.href;
			let baseUrl = resUrl.split(this.slash)[0]
			this.baseUrl = baseUrl
		},
		methods:{
			handleShowNav () {
				this.navShow = !this.navShow
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.header-con
		position:relative
		height:1.147rem
		width:100%
		.header-logo
			height:0.507rem
			float:left
			margin:0.267rem 0 0 0.427rem
		.header-icon
			display:block
			float:right
			width:0.426667rem
			height:0.373333rem
			font-size:0.426667rem
			margin-top:0.386667rem
			margin-right:0.426667rem
		.nav
			position:absolute
			width:4.453333rem
			height:6.0rem
			right:0
			bottom:-6.0rem
			background:rgba(55,55,55,1)
			box-shadow:-4px 4px 8px 0px rgba(153,153,153,0.5)
			z-index:99
			.nav-list
				display:block
				margin:1.066667rem 0 0 0.426667rem
				color:#fff
				font-size:0.426667rem
				.nav-list-icon
					font-size:0.426667rem
					margin-right:0.08rem				
</style>
