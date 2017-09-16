<template>
	<div class="">

		<div class="content-header">
			<h1>{{title}}</h1>
			<ol class="breadcrumb">
				<li>
					<a href="javascript:"><i class="fa fa-dashboard"></i> 主页</a>
				</li>
				<li class="active">文档</li>
			</ol>
		</div>

		<div class="content body">
			<div class="row">
				<div class="col-md-1">
					<div class="box box-solid">
						<div class="box-header with-border">
							<h3 class="box-title">菜单</h3>
						</div>
						<div class="box-body no-padding">
							<ul class="nav nav-pills nav-stacked">
								<li class="active">
									<a href="#"><i class="fa fa-circle-o text-red"></i>列表</a>
								</li>
								<li>
									<a href="#"><i class="fa fa-circle-o text-yellow"></i> 添加</a>
								</li>
								<li>
									<a href="#"><i class="fa fa-circle-o text-light-blue"></i> 啊回收站</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-11">
					<div class="box box-primary">
						<div class="box-header with-border">
							<h3 class="box-title">Inbox</h3>

							<div class="box-tools pull-right">
								<div class="has-feedback">
									<input class="form-control input-sm" placeholder="Search Mail" type="text">
									<span class="glyphicon glyphicon-search form-control-feedback"></span>
								</div>
							</div>
						</div>
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
										<tr>
											<td>
												<div class="icheckbox_flat-blue" style="position: relative;" aria-checked="false" aria-disabled="false"><input style="position: absolute; opacity: 0;" type="checkbox"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
											</td>
											<td class="mailbox-star">
												<a href="#"><i class="fa fa-star-o text-yellow"></i></a>
											</td>
											<td class="mailbox-name">
												<a href="read-mail.html">Alexander Pierce</a>
											</td>
											<td class="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
											</td>
											<td class="mailbox-attachment"><i class="fa fa-paperclip"></i></td>
											<td class="mailbox-date">28 mins ago</td>
										</tr>
										<tr>
											<td>
												<div class="icheckbox_flat-blue" style="position: relative;" aria-checked="false" aria-disabled="false"><input style="position: absolute; opacity: 0;" type="checkbox"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
											</td>
											<td class="mailbox-star">
												<a href="#"><i class="fa fa-star-o text-yellow"></i></a>
											</td>
											<td class="mailbox-name">
												<a href="read-mail.html">Alexander Pierce</a>
											</td>
											<td class="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
											</td>
											<td class="mailbox-attachment"><i class="fa fa-paperclip"></i></td>
											<td class="mailbox-date">11 hours ago</td>
										</tr>
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
											<td class="mailbox-date">15 hours ago</td>
										</tr>
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
											<td class="mailbox-attachment"><i class="fa fa-paperclip"></i></td>
											<td class="mailbox-date">Yesterday</td>
										</tr>
										<tr>
											<td>
												<div class="icheckbox_flat-blue" style="position: relative;" aria-checked="false" aria-disabled="false"><input style="position: absolute; opacity: 0;" type="checkbox"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
											</td>
											<td class="mailbox-star">
												<a href="#"><i class="fa fa-star-o text-yellow"></i></a>
											</td>
											<td class="mailbox-name">
												<a href="read-mail.html">Alexander Pierce</a>
											</td>
											<td class="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
											</td>
											<td class="mailbox-attachment"><i class="fa fa-paperclip"></i></td>
											<td class="mailbox-date">2 days ago</td>
										</tr>
										<tr>
											<td>
												<div class="icheckbox_flat-blue" style="position: relative;" aria-checked="false" aria-disabled="false"><input style="position: absolute; opacity: 0;" type="checkbox"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
											</td>
											<td class="mailbox-star">
												<a href="#"><i class="fa fa-star-o text-yellow"></i></a>
											</td>
											<td class="mailbox-name">
												<a href="read-mail.html">Alexander Pierce</a>
											</td>
											<td class="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
											</td>
											<td class="mailbox-attachment"><i class="fa fa-paperclip"></i></td>
											<td class="mailbox-date">2 days ago</td>
										</tr>
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
											<td class="mailbox-date">2 days ago</td>
										</tr>
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
											<td class="mailbox-date">2 days ago</td>
										</tr>
										<tr>
											<td>
												<div class="icheckbox_flat-blue" style="position: relative;" aria-checked="false" aria-disabled="false"><input style="position: absolute; opacity: 0;" type="checkbox"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
											</td>
											<td class="mailbox-star">
												<a href="#"><i class="fa fa-star-o text-yellow"></i></a>
											</td>
											<td class="mailbox-name">
												<a href="read-mail.html">Alexander Pierce</a>
											</td>
											<td class="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
											</td>
											<td class="mailbox-attachment"></td>
											<td class="mailbox-date">2 days ago</td>
										</tr>
										<tr>
											<td>
												<div class="icheckbox_flat-blue" style="position: relative;" aria-checked="false" aria-disabled="false"><input style="position: absolute; opacity: 0;" type="checkbox"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
											</td>
											<td class="mailbox-star">
												<a href="#"><i class="fa fa-star-o text-yellow"></i></a>
											</td>
											<td class="mailbox-name">
												<a href="read-mail.html">Alexander Pierce</a>
											</td>
											<td class="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
											</td>
											<td class="mailbox-attachment"><i class="fa fa-paperclip"></i></td>
											<td class="mailbox-date">4 days ago</td>
										</tr>
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
											<td class="mailbox-date">12 days ago</td>
										</tr>
										<tr>
											<td>
												<div class="icheckbox_flat-blue" style="position: relative;" aria-checked="false" aria-disabled="false"><input style="position: absolute; opacity: 0;" type="checkbox"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
											</td>
											<td class="mailbox-star">
												<a href="#"><i class="fa fa-star-o text-yellow"></i></a>
											</td>
											<td class="mailbox-name">
												<a href="read-mail.html">Alexander Pierce</a>
											</td>
											<td class="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
											</td>
											<td class="mailbox-attachment"><i class="fa fa-paperclip"></i></td>
											<td class="mailbox-date">12 days ago</td>
										</tr>
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
											<td class="mailbox-attachment"><i class="fa fa-paperclip"></i></td>
											<td class="mailbox-date">14 days ago</td>
										</tr>
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
											<td class="mailbox-attachment"><i class="fa fa-paperclip"></i></td>
											<td class="mailbox-date">15 days ago</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'index'
			}
		},
		components: {},
		methods: {

		},
		created() {

		}
	}
</script>

<style scoped>

</style>