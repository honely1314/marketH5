<template>
	<div class="advatange-con clearfix">
		<div class="section-header">
			<h3 class="header-txt">服务优势<i class="header-icon"></i></h3>
		</div>
		<ul class="advantage-list">
			<li class="advantage-info" v-if="handleMapNum(0)">
				<img class="advantage-img" src="~static/images/advantage_0.png" alt="">
				<p class="advantage-txt">权威检测</p>
			</li>
			<li class="advantage-info" v-if="handleMapNum(1)">
				<img class="advantage-img advantage-img-txt" src="~static/images/advantage_1.png" alt="">
				<p class="advantage-txt">权威检测 每车必检</p>
			</li>
			<li class="advantage-info" v-if="handleMapNum(2)">
				<img class="advantage-img advantage-img-local" src="~static/images/advantage_2.png" alt="">
				<p class="advantage-txt">位置优越 交通便利</p>
			</li>
			<li class="advantage-info" v-if="handleMapNum(3)">
				<img class="advantage-img" src="~static/images/advantage_3.png" alt="">
				<p class="advantage-txt">一站式购车体验</p>
			</li>
			<li class="advantage-info" v-if="handleMapNum(4)">
				<img class="advantage-img advantage-img-heart" src="~static/images/advantage_4.png" alt="">
				<p class="advantage-txt">价格透明 服务贴心</p>
			</li>
			<li class="advantage-info" v-if="handleMapNum(5)">
				<img class="advantage-img advantage-img-txt" src="~static/images/advantage_5.png" alt="">
				<p class="advantage-txt">分期服务 轻松购车</p>
			</li>
			<li class="advantage-info" v-if="handleMapNum(6)">
				<img class="advantage-img advantage-img-txt" src="~static/images/advantage_6.png" alt="">
				<p class="advantage-txt">延保服务 售后无忧</p>
			</li>
			<li class="advantage-info" v-if="handleMapNum(7)">
				<img class="advantage-img" src="~static/images/advantage_7.png" alt="">
				<p class="advantage-txt">免费看车 专人帮选</p>
			</li>
			<li class="advantage-info" v-if="handleMapNum(8)">
				<img class="advantage-img" src="~static/images/advantage_8.png" alt="">
				<p class="advantage-txt">24小时电话热线</p>
			</li>
			<li class="advantage-info" v-if="handleMapNum(9)">
				<img class="advantage-img" src="~static/images/advantage_9.png" alt="">
				<p class="advantage-txt">诚信经营 售后无忧</p>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'carList',
		props:['advantageList'],
		data () {
			return{
				advantageStr:this.advantageList,
				advantageArr:[]
			}
		},
		mounted () {
			console.log(this.advantageArr)
		},
		mounted () {
			if(this.advantageStr.indexOf(',') != -1){
				this.advantageArr = this.advantageStr.split(',').map(val => {
					return parseInt(val)
				})
			}else if(this.advantageStr.indexOf(',') == -1 && this.advantageStr !=''){
				this.advantageArr.push(parseInt(this.advantageStr))
			}
		},
		methods:{
			handleMapNum (num) {
				let ifShow = false				
				ifShow = this.advantageArr.some((val,index) =>{
					return val == num
				})
				return ifShow
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.advatange-con
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
					background:url('~static/images/pink_icon.png') 0 0 no-repeat
					background-size:100% 100%
					position:absolute
					z-index:-1
		.advantage-list
			overflow:hidden
			margin: 0 0.38rem
			.advantage-info
				position:relative
				float:left
				width:4.0rem
				height:2.4rem
				margin-right:.4rem
				margin-bottom:.4rem
				border-radius:0.05rem
				border:0.013rem solid #CBCBCB
				.advantage-img
					display:block
					width:0.85rem
					margin:0.42rem auto 0
				.advantage-img-txt
					width:1.92rem
					margin:0.7rem auto 0
				.advantage-img-local
					width:0.75rem
				.advantage-img-heart
					width:0.91rem					
				.advantage-txt
					position:absolute
					left:0
					bottom:0.35rem
					font-size:0.37rem
					color:#B9893D
					width:100%
					text-align:center
			.advantage-info:nth-child(even)
				margin-right:0
					
				
</style>
