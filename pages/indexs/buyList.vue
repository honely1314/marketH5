<template>
	<div class="car-list-con clearfix">
		<div class="section-header">
			<h3 class="header-txt">最新车源<i class="header-icon"></i></h3>
			<a class="header-href" :href="mshopUrl + marketId" target="_blank">更多</a>
		</div>
		<ul class="car-list">
			<li class="car-info" v-for="item of carListData" :key="item.carId">
				<a :href="mshopDetail + item.carId +'&marketId=' + item.marketId" target="_blank">
					<img class="car-img" :src="imgUrlPre+item.carImageUrl" :onerror="errorImg"  alt="">
					<div class="car-detail">
						<p class="car-name">{{item.carSaleName}}</p>
						<p class="car-age">{{new Date(item.carLicenceDate).getFullYear()}}年丨{{item.carMileage}}万公里</p>
						<p class="car-price" v-if="item.carRetailPrice != 0">{{item.carRetailPrice}}<span>万</span></p>
						<p class="car-price" v-if="item.carRetailPrice == 0">面议</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	import defaultImg from '@/static/images/default.png'
	export default{
		name:'carList',
		props:['carList','marketId'],
		data () {
			return{
				imgUrlPre:this.$evnConfig.imgUrlPre,
				errorImg:'this.src="' + defaultImg + '"',
				mshopDetail:this.$evnConfig.mshopDetail,
				mshopUrl:this.$evnConfig.mshopUrl,
				carListData:this.carList
			}
		},
		mounted () {
			
		},
		methods:{
			
		}
	}
</script>
<style lang="stylus" scoped>
	.car-list-con
		margin: 0 0.42rem
		.section-header
			height:1.17rem
			color:#323232
			padding-top:0.373333rem	
			.header-txt
				position:relative
				float:left
				font-size:0.373rem
				font-weight:bold
				.header-icon
					display:block
					width:0.35rem
					height:0.32rem
					top:-0.2rem
					right:-0.25rem
					background:url('~static/images/yellow_icon.png') 0 0 no-repeat
					background-size:100% 100%
					position:absolute
					z-index:-1
			.header-href
				display:block
				float:right
				color:#666666
				font-size:0.346rem
		.car-list			
			.car-info
				width:4.48rem
				float:left	
				height:7.2rem
				box-shadow:0px 4px 8px 0px rgba(215,215,215,0.5)
				border-radius:0.1rem
				margin-right:0.18rem
				a
					display:block
					.car-img
						display:block
						width:4.48rem
						height:4.48rem
					.car-detail
						position:relative
						margin:0.1rem
						height:2.72rem
						.car-name
							font-size:0.373333rem
							color:#333
							line-height:0.5rem
						.car-age
							position:absolute
							left:0
							bottom:0.9rem
							font-size:0.3rem
							color:#808080
						.car-price
							position:absolute
							left:0
							bottom:0.3rem
							font-size:0.426667rem
							color:#B9893D
							span
								font-size:0.266667rem
			.car-info:nth-child(even)
				margin-right:0
					
				
</style>
