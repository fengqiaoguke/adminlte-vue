<template>
	<div class="">
		<ol class="breadcrumb">
			<li v-for="item in menu" :class="{ active: item.url==path }">
				<router-link :to="item.url">{{item.title}}</router-link>
			</li> 
		</ol>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menu: [{
					title: '首页',
					url: '/codeshop'
				},{
					title: '添加',
					url: '/codeshop/add'
				}]
			}
		},
		methods: {

		},
		created() {
			this.path = this.$route.path
		}
	}
</script>

<style scoped>
.active a{font-weight: bold; color: #2C3E50;}
</style>