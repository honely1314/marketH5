<template>
	<div class="about-us clearfix">
		<div class="about-us-btn-wrap clearfix">
			<div class="about-us-btn clearfix">
				<span class="btn" :class="{active: section == 1}" @click="handleToggleSection(1)">公司简介</span>
				<span class="btn" :class="{active: section == 2}" @click="handleToggleSection(2)">关于我们</span>
			</div>
		</div>
		<div class="intro-section main-section" v-show="section == 1">
			<p class="intro-txt">{{introData.introductionMarket}}</p>
		</div>
		<div class="about-section main-section" v-show="section == 2">
			<div id="allmap" class="allmap" ref="allmap"></div>
			<ul class="about-info">
				<li class="info-list clearfix">
					<span class="iconfont">&#xe609;</span><span>地址：</span><span class="info-fill">{{introData.introductionAddress}}</span>
				</li>
				<li class="info-list clearfix">
					<span class="iconfont">&#xe60b;</span><span>电话：</span><span class="info-fill">{{introData.introductionMobile}}</span>
				</li>
				<li class="info-list clearfix">
					<span class="iconfont">&#xe601;</span><span>QQ：</span><span class="info-fill">{{introData.introductionQQ}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'carList',
		props:['introInfo'],
		data () {
			return{
				section:2,
				introData:this.introInfo
			}
		},
		mounted (){
			this.localMap()
		},
		methods:{
			handleToggleSection (num) {
				this.section = num
			},
			localMap (str) {
				var lon;
				var lat;
				if(str){
					var arr = str.split(',');
					lon = parseFloat(arr[0]);
					lat = parseFloat(arr[1]);
				}else{
					lon = 116.485637;
					lat = 39.994338;
				}
				var map = new BMap.Map(this.$refs.allmap);    // 创建Map实例
				//var point = new BMap.Point(116.485637,39.994338);
				var point = new BMap.Point(lon,lat);
				map.centerAndZoom(point, 14);  // 初始化地图,设置中心点坐标和地图级别
				var marker = new BMap.Marker(point);//设置mark位置
				map.addOverlay(marker);
				//添加地图类型控件
				map.addControl(new BMap.MapTypeControl({
					mapTypes:[
			            BMAP_NORMAL_MAP,
			            BMAP_HYBRID_MAP
			        ]}));	  
				//map.setCurrentCity("北京市");// 设置地图显示的城市 此项是必须设置的
				map.enableScrollWheelZoom(true); 
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~assets/style/varible.styl'
	.about-us
		margin: 0.56rem 0.42rem
		.about-us-btn-wrap
			overflow:hidden
			.about-us-btn
				float:left
				font-size:0
				border-radius:0.08rem
				border:0.0267rem solid $mainColor
				.btn
					display:inline-block
					padding:0.2667rem
					font-size:0.3733rem
					color:#B9893D
				.active
					color: #fff
					background:	$mainColor
		.main-section
			margin-top:.56rem
			.intro-txt
				font-size:0.3733rem
				text-indent:2em
				line-height:.5rem
				min-height:6rem
			.allmap
				width:9.16rem
				height:5.4rem
				margin 0 auto
			.about-info
				margin-top:0.42rem	
				.info-list 
					font-size:0.3733rem
					line-height:.5rem
					margin-top:0.42rem
					span
						float:left
						color:#323232
					.iconfont
						color: $mainColor
						margin-right:0.2133rem
					.info-fill
						display:block
						width:7.2rem
</style>
