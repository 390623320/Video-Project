<template>
	<div v-if="islogin" class="login" :style="{height:Height}">
		<div class="loginContain">
			<div @click="isLogin(false)" class="cancle">
				<i class="iconfont icon-close_light"></i>
			</div>
			<div class="LoginTitle">
				<span>Welcome JiffyVideo</span>
			</div>
			<ul>
				<li>
					<span>帐号:</span><input type="text" name="" id="Userid" value="" />
				</li>
				<li>
					<span>密码:</span><input type="password" name="" id="UseridPassword" value="" />
				</li>
				<li>
					<div @click="isLogin(true)" class="loginIn">- 登录 -</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { mapMutations,mapState } from 'vuex'
	export default{
		name:'Weblogin',
		data(){
			return{
				Height:"913px !important"
			}
		},
		mounted(){
			window.onresize= ()=>{
				this.Height = window.document.documentElement.clientHeight + 'px'
			}
			
		},
		computed:{
			...mapState({
				islogin:state=>state.islogin
			})
		},
		methods:{
			...mapMutations([
				'setLoginState'
			]),
			isLogin(param){
				if(param){
					this.$message({
			          message: '登陆成功',
			          type: 'success',
			          center:true
			        });
					this.setLoginState(false)
				}else{
					this.setLoginState(false)
				}
			}
		}
	}
</script>

<style lang="less" scoped>
.login{
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
	width: 100%;
	background: rgba(244, 245, 247,.8);
	.loginContain{
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		width: 450px;
		height: 204px;
		border-radius: 8px;
		background-color: mistyrose;
		box-shadow: 0 0 1px 1px #FF8EB3;
		.cancle{
			position: absolute;
			right: 10px;
			top: 10px;
			text-align: center;
			border: 1px solid #FF8EB3;
			border-radius: 4px;
			color: #FF8EB3;
			cursor: pointer;
			&:hover{
				background-color: #FF8EB3;
				color: #fff;
			}
			>i{
				margin-left: 1px;
				font-size: 20px;
			}
		}
		.LoginTitle{
			height: 25px;
			line-height: 25px;
			text-align: center;
			font-size: 20px;
			font-weight: 700;
			color: #FF8EB3;
			padding-top: 30px;
		}
		>ul{
			width: 250px;
			margin: 0 auto;
			padding: 20px 0;
			>li{
				width: 100%;
				margin-bottom: 10px;
				>input{
					border-radius: 4px;
					outline: none;
					text-decoration: none;
				}
				>span{
					margin-right: 8px;
				}
				.loginIn{
					margin: 0 auto;
					line-height: 35px;
					text-align: center;
					font-size: 20px;
					font-weight: 700;
					color: #FF8EB3;
					width: 150px;
					height: 35px;
					border: 1px solid #FF8EB3;
					border-radius: 8px;
					cursor: pointer;
					box-shadow: 0 0 0 1px #FF8EB3;
					&:hover{
						color: #fff;
						background-color: #FF8EB3;
					}
				}
			}
		}
	}
}
</style>