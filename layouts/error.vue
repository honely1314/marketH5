<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <p>请输入正确的链接</p>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // 你可以为错误页面指定自定义的布局
}
</script>
<style lang="stylus" scoped>
	.container
		margin:4rem auto 0
		font-size:.4rem
		h1,p
			margin-top:1rem
			font-size:.6rem
			text-align:center
			color:#ff9800		
</style>