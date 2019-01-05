import Vue from 'vue'

var imgUrlPre,mshopUrl,mshopDetail
if (process.env.PATH_TYPE === 'dev') {
  imgUrlPre = 'https://testfile.anpxd.com/'
  mshopUrl = 'https://testerp.anpxd.com/mshop/src/home.html?marketId='
  mshopDetail = 'https://testerp.anpxd.com/mshop/src/cars_detial.html?shopId=&imgUrl=http://testfile.anpxd.com/&customerShopId=false&os=false&carId='
} else {
  imgUrlPre = 'https://fdfs.anpxd.com/'
  mshopUrl = 'https://erp.anpxd.com/mshop/src/home.html?marketId='
  mshopDetail = 'https://erp.anpxd.com/mshop/src/cars_detial.html?shopId=&imgUrl=https://fdfs.anpxd.com/&customerShopId=false&os=false&carId='
}
Vue.prototype.$evnConfig={
	imgUrlPre:imgUrlPre,
	mshopUrl:mshopUrl,
	mshopDetail:mshopDetail
}