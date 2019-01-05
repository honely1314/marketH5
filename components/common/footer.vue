<template>
	<div class="footer">
		<div class="footer-title">
			<h3>联系方式</h3>
		</div>
		<div class="info">
			<div class="address">
				<p>通讯地址：</p>
				<p>{{footerData.introductionAddress}}</p>
			</div>
			<div class="mobile">
				<p>联系电话：</p>
				<p>{{footerData.introductionMobile}}</p>
			</div>
		</div>
		<div class="ecode">
			<div class="ecode-con market-code" v-if="ifShowEcode">
				<img :src="imgUrlPre + footerData.introductionWeiXin" alt="">
				<p>关注市场公众号</p>
			</div>
			<div class="ecode-con">
				<img src="@/static/images/erweima.jpg" alt="">
				<p>关注启辕公众号</p>
			</div>			
		</div>
	</div>	
</template>
<script>
	export default{
		name:'footerCommon',
		props:['footerInfo'],
		data () {
			return{
				footerData:this.footerInfo,
				imgUrlPre:this.$evnConfig.imgUrlPre,
			}
		},
		computed:{
			ifShowEcode () {
				if(this.footerData.introductionWeiXin){
					return true
				}else{
					return false
				}
			}
		},
		methods:{
		}
	}
</script>
<style lang="stylus" scoped>
	.footer
		width:100%
		height:4.373333rem
		color:#fff
		box-sizing:border-box
		padding: 0 0.426667rem
		background:#4D4D4D
		.footer-title
			height:1.28rem
			box-sizing:border-box
			padding-top:0.24rem
			h3
				font-size:0.373333rem
				height:0.8rem
				line-height:0.8rem
				width:3.466667rem
				border-bottom:0.026667rem solid #9B9B9B
		.info
			position:relative
			float:left
			width:3.8rem
			font-size:0.293333rem
			p
				line-height:0.4rem
			.address
				position:absolute
				width:3.8rem
				top:0
				left:0
			.mobile
				position:absolute
				width:3.52rem
				top:1.6rem
				left:0
		.ecode
			float:right
			.ecode-con
				float:right
				text-align:center
				img
					width:2.1rem
					height:2.1rem
					box-sizing:border-box
					padding:0.06rem
					background:#fff
					border-radius:0.05rem
				p
					font-size:0.3rem
					text-align:center
					margin-top:0.3rem
			.market-code
				margin-left:0.533333rem
				
						
							
</style>
