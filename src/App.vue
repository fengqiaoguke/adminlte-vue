<template>
	<div class="wrapper">

		<header class="main-header">
			<a href="#" class="logo">
				<span class="logo-mini">后台</span>
				<span class="logo-lg">管理后台</span>
			</a>
			<nav class="navbar navbar-static-top" role="navigation">
				<a href="javascript:" class="sidebar-toggle" data-toggle="offcanvas" role="button">
					<span class="sr-only">切换</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</a>

				<div class="navbar-custom-menu">
					<ul class="nav navbar-nav">
						<!-- 通知 -->
						<li class="dropdown notifications-menu">
							<a href="javascript:" class="dropdown-toggle" data-toggle="dropdown">
								<i class="fa fa-bell-o"></i>
								<span class="label label-warning">1</span>
							</a>
						</li>
						<li class="dropdown user user-menu">
							<a href="javascript:" class="dropdown-toggle" data-toggle="dropdown">
								<img src="http://www.fengqiaoju.com/Public/home/images/noavatar.png" class="user-image" alt="User Image">
								<span class="hidden-xs">fengqiao</span>
							</a>
							<ul class="dropdown-menu">
								<li class="user-header">
									<img src="http://www.fengqiaoju.com/Public/home/images/noavatar.png" class="img-circle" alt="User Image">
									<p>
										系统管理员
									</p>
								</li>
								<li class="user-footer">
									<div class="pull-left">

									</div>
									<div class="pull-right">
										<a href="javascript:" id="logoutBtn" class="btn btn-default btn-flat">退出</a>
									</div>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</header>

		<aside class="main-sidebar">
			<section class="sidebar">

				<ul class="sidebar-menu">
					<li class="header">APP</li>
					<li class="treeview active">
						<router-link to="/user">
							<i class="fa fa-user"></i> <span>用户</span></i>
						</router-link>
					</li>  
					<li class="treeview">
						<router-link to="/notice">
							<i class="fa fa-list"></i> <span>通知</span></i>
						</router-link>
					</li> 
					<li class="header">站点</li>
					<li>
						<router-link to="/codeshop"><i class="fa fa-circle-o text-red"></i> <span>源码商城</span></router-link>
					</li> 
				</ul>
			</section>
		</aside>
		<div class="content-wrapper">
			<router-view></router-view>

		</div>

	</div>

</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	
	.leftMenu {
		position: absolute;
		height: 100%;
		width: 100px;
		background: red;
	}
</style>