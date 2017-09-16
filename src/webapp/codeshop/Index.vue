<template>
	<div class="">
		<div class="content-header">
			<Menu></Menu>
		</div>

		<div class="content body">
			<div class="box-body no-padding">

				<div class="table-responsive mailbox-messages">
					<table class="table table-hover table-striped">
						<tbody>
							<tr>
								<td>
									<div class="icheckbox_flat-blue" style="position: relative;" aria-checked="false" aria-disabled="false"><input style="position: absolute; opacity: 0;" type="checkbox"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
								</td>
								<td class="mailbox-star">
									<a href="#"><i class="fa fa-star text-yellow"></i></a>
								</td>
								<td class="mailbox-name">
									<a href="read-mail.html">Alexander Pierce</a>
								</td>
								<td class="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
								</td>
								<td class="mailbox-attachment"></td>
								<td class="mailbox-date">5 mins ago</td>
							</tr>

						</tbody>
					</table>
				</div>
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
			this.path = this.$route.path
		}
	}
</script>

<style scoped>

</style>