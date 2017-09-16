<template>
	<div class="">
		<div class="content-header">
			<Menu></Menu>
		</div>

		<div class="content body">
			<div class="box-body no-padding">

				<textarea></textarea>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'user'
			}
		},
		components: {
			'Menu': resolve => require(['./Menu'], resolve)
		},
		methods: {

		},
		created() {

		}
	}
</script>

<style scoped>

</style>