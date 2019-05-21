<template>
	<div class="palyView">
		
		<div class="pyHeader">
			<div class="pyHeaderContent">
				<p>{{vedioInfo.title}}</p>
				<p>
					<span>{{vedioInfo.tname == undefined ?'推荐视频':vedioInfo.tname}}</span>
					<span>|</span>
					<span>连载中</span>
					<span>每周三10:00更新</span>
					<span>AV{{vedioInfo.aid}}</span>
				</p>
				<p>
					<i  class="iconfont icon-Play"></i><span>{{vedioInfo.ctime == undefined ? (vedioInfo.play/10000).toFixed(1):(vedioInfo.ctime/10000000).toFixed(1)}}万</span>
					<i  class="iconfont icon-danmushu"></i><span>{{vedioInfo.ctime == undefined ? vedioInfo.pts ==undefined ? vedioInfo.coins>19999?(vedioInfo.coins/19999).toFixed(1)+'万':(vedioInfo.coins/3.49).toFixed(0):(vedioInfo.pts/1000*2.31).toFixed(0) : (vedioInfo.ctime/10000000*6.5).toFixed(0)}}</span>
					<span>|</span>
					<i  class="iconfont icon-coin"></i><span>硬币 {{vedioInfo.ctime == undefined ? vedioInfo.coins>9999?(vedioInfo.coins/10000).toFixed(1)+'万':vedioInfo.coins : (vedioInfo.ctime/10000000*7.7).toFixed(0)}}</span>
					<i  class="iconfont icon-heart"></i><span>追番{{vedioInfo.ctime == undefined ? vedioInfo.pts==undefined ? (vedioInfo.play/48567).toFixed(1) : (vedioInfo.pts/100000).toFixed(1):(vedioInfo.ctime/1000000000*3.359).toFixed(1)}}万</span>
				</p>
				<div class="headerR">
					<div class="headerRImg"></div>
					<div class="headerRText">
						<p class="headerRTextUp"><span>已经有<span class="textHightlight">2.9万</span>人承包</span></p>
						<p class="headerRTextDown"><span>我要承包</span></p>
					</div>
				</div>
			</div>
		</div>
		
		
		<div class="pyContent clearfix">
			<div class="palyViewContain clearfix" :class="{showBigone:isShowBigone}">
				<div class="vedioContent">
					<i @click="play()" class="iconfont icon-zhibo1" :class="{ishowIcon:playparam}"></i>
					
					<div class="vediocontain" ref="videocontain">
	  					<video @dblclick="fullScreen" @click="play()" @timeupdate="changeTime" @ended="end" @canplay="getDuration"  ref="video" :src="result.durl ? result.durl[0].url : ''" class="videoContent"></video>
	  					<div @dblclick="fullScreen" @click="play()" class="bullet" :style="{left:bulletLeft}">
	  				
	  					</div>
					</div>
	  				<div class="vedioControls">
	  					<div class="controlL">
	  						<i @click="play()" class="iconfont icon-PlayFilled" :class="{ishowIcon:playparam}"></i>
	  						<i @click="play()" class="iconfont icon-PauseFilled" :class="{ishowIcon:!playparam}"></i>
	  						<i class="iconfont icon-24gf-nextCircle"></i>
	  					</div>
	  					<div class="playLoad">
	  						<div @mousedown="clickStart"  @mouseup="mouseout" @mouseleave="mouseout" class="playLoadOverLay" ref="controlInfo">
	  							<i  class="playBar" :style="{left:maskLeft}"></i>
	  						</div>
	  						
	  						<i class="allDuration"></i>
	  						<i class="playloading" :style="{width:maskLeft}"></i>
	  						<span class="VedioCurrentTime">{{currentTime}}</span>
	  						<span>/</span>
	  						<span class="VedioAllTime">{{durationTime}}</span>
	  					</div>
	  					<div class="controlR">
	  						<div @mouseover="isshowSound = true" @mouseleave="isshowSound = false" class="SoundDetail" :class="{showSound:isshowSound}">
	  							<div class="SoundDetailTop" disabled="true"><span>{{parseInt(volume*100)}}</span></div>
	  							<div class="SoundDetailRange"> 
	  								<i class="SoundDetailContain"></i>
	  								<i class="SoundDetailOver" :style="{height:soundMaskBottom}"></i>
	  								<div @mousedown="soundStart" @mouseup.prevent="soundMouseout" @mouseleave="soundMouseout" class="SoundDetailOverlay" ref="SoundControl">
	  									<i class="SoundDetailMask" :style="{bottom:soundMaskBottom}"></i>
	  								</div>
	  							</div>
	  						</div>
	  						<i @click="isMuted" @mouseover="isshowSound = true" @mouseleave="isshowSound = false" class="iconfont icon-SoundFilled" :class="{ishowIcon:soundparam}"></i>
	  						<i @click="isMuted" @mouseover="isshowSound = true" @mouseleave="isshowSound = false" class="iconfont icon-MuteFilled" :class="{ishowIcon:!soundparam}"></i>
	  						<span>自动</span>
	  						<i class="iconfont icon-bofangqi-danmukai"></i>
	  						<i @click="islike = !islike" class="iconfont icon-appreciate_fill_light" :class="{like:islike}" title="点赞"></i>
	  						<i @click="isShowBigone = !isShowBigone" class="iconfont icon-bigone" title="宽屏切换"></i>
	  						<i @click="fullScreen" class="iconfont icon-zoom-in" title="全屏"></i>
	  					</div>
	  				</div>
	  				
	  				<div class="bulletScreen clearfix">
	  					<div class="bulletScreenL">
		  					<i class="iconfont icon-bofangqi-danmuzitixiao" title="弹幕选择"></i>
		  					<i class="iconfont icon-bofangqi-danmucaisekai" title="弹幕颜色"></i>
	  					</div>
	  					<div class="bulletScreenRcontian">
		  					<div class="bulletScreenM">
		  						<span>游客不能发送弹幕，请先<span @click="login" class="heightLight">登录</span>或<span @click="register" class="heightLight">注册</span></span>
		  					</div>
		  					<div class="bulletScreenR">
		  						<a href="https://www.bilibili.com/blackboard/help.html?spm_id_from=666.10.b_62616e67756d695f706c61796572.7#弹幕相关">弹幕礼仪></a>
		  						<span @click="open">发送></span>
		  					</div>
	  					</div>
	  				</div>
	  				
				</div>
				
				<div class="vedioRightAside">
					
					<div class="RasideHead">
						<div class="RasideHead1">
							<span>635</span>
							<span>人正在看,{{BulletscreenData.length>9999?(BulletscreenData.length/10000) + "万" : BulletscreenData.length}}条弹幕</span>
						</div>
						<div class="RasideHead2">
							<i class="iconfont icon-seticon"></i>
							<i class="iconfont icon-ellipsis-verti"></i>
						</div>
					</div>
					<div class="asideBar">
						<el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
						    <el-tab-pane label="推荐视频" name="first">
						     <Scrollerbars  style="height:620px" autoHide>
				    			<ul class="asiderUl">
						    		<li @click="getRecommonVedio(item)" v-for="(item,index) in recommonData" :key="index" class="asideLi clearfix">
						    			<div class="recommonImg">
						    				<img class="aside-img-auto" v-lazy="item.pic" alt="" :title="item.title"/>
						    				<div class="recommonImgOverlay">
							    				<div class="timeInfo">
							    					<p class="timeText"><span>{{item.duration}}</span></p>
							    					<p class="timeIcon"><i class="iconfont icon-time"></i></p>
							    				</div>
						    				</div>
						    			</div>
						    			<div class="recommontext">
						    				<div class="recommontextTitle">
						    					<span>{{item.title}}</span>
						    				</div>
						    				<div class="recommontextinfo">
						    					<div><i class="iconfont icon-Play"></i><span>{{item.play>9999?`${(item.play/10000).toFixed(1)}万`:item.play}}</span> </div>
						    					
						    					<div><i class="iconfont icon-danmushu"></i><span>{{item.video_review>9999?`${(item.video_review/10000).toFixed(1)}万`:item.video_review}}</span></div>
						    				</div>
						    			</div>
						    		</li>
				    			</ul>
						    </Scrollerbars >	
						    </el-tab-pane>
						    <el-tab-pane label="弹幕列表" name="second" :lazy="true" >
						    	<div class="bulletScreenHead">
						    		<div><span>时间</span></div>
						    		<div><span>弹幕内容</span></div>
						    		<div><span>发送时间</span></div>
						    	</div>
						    	<Scrollerbars  style="height:588px" autoHide>
						    		<ul class="bulletScreenUl">
						    			<li v-for="(item,index) in BulletscreenData" :key="index">
						    				<span class="BsTime">{{item.BSduration}}</span><span class="BsContent">{{item.content}}</span><span class="BsSendTime">{{item.sendData}}</span>
						    			</li>
						    		</ul>
						    	</Scrollerbars >	
						    </el-tab-pane>
						    <el-tab-pane label="屏蔽设置" name="third" :lazy="true" >
						    
						    		<div class="Buttontitle">
						    			<div class="Buttontitlelist">屏蔽列表</div>
						    			<el-switch
										  v-model="value3"
										  active-color="#13ce66"
										  inactive-color="#ff4949">
										</el-switch>
						    		</div>
						    		<div v-show="value3" class="ButtontitleShow">
						    			<el-select v-model="value" placeholder="文本">
										    <el-option
										      v-for="item in options"
										      :key="item.value"
										      :label="item.label"
										      :value="item.value">
										    </el-option>
										  </el-select>
										  <div class="shieldingOptions">
										  	<span @click="showText = true" :class="{textActive:showText}">屏蔽词</span>
										  	<span @click="showText = false" :class="{textActive:!showText}">屏蔽用户</span>
										  </div>
										  <div class="shieldingContent">
										  	<div>
										  		<span>类别</span>
										  		<span>内容</span>
										  	</div>
										  	
										  	<div>
										  		<span>状态</span>
										  		<span>操作</span>
										  	</div>
										  	<p class="shieldingContentP">暂无屏蔽内容</p>
										  </div>
						    		</div>

						  
						    		<div class="shieldType">
						    			<p>按类型屏蔽</p>
						    			<ul class="clearfix">
						    				<li class="shieldTypeLi">
						    					<div><i class="iconfont icon-bofangqi-danmugundongkai"></i></div>
						    					<p>滚动弹幕</p>
						    				</li>
						    				<li class="shieldTypeLi">
						    					<div><i class="iconfont icon-bofangqi-danmudingbukai"></i></div>
						    					<p>顶部弹幕</p>
						    				</li>
						    				<li class="shieldTypeLi">
						    					<div><i class="iconfont icon-bofangqi-danmudibukai"></i></div>
						    					<p>底部弹幕</p>
						    				</li>
						    				<li class="shieldTypeLi">
						    					<div><i class="iconfont icon-bofangqi-danmuzitixiao"></i></div>
						    					<p>弹幕字体</p>
						    				</li>
						    				<li class="shieldTypeLi">
						    					<div><i class="iconfont icon-bofangqi-danmucaisekai"></i></div>
						    					<p>弹幕颜色</p>
						    				</li>
						    			</ul>
						    		</div>
						    </el-tab-pane>
						</el-tabs>
					</div> 
					
				</div>
			</div>
  		</div>
  		
  		<div class="vedioExplain">
  			
				<div class="vedioExplainContent">
					<div class="VEC-img">
						<img class="img-auto" src="../../assets/show.jpg" alt="" />
					</div>
					<div class="VEC-textarea">
						<div class="VEC-textareaHead">
							<h2>{{vedioInfo.title}}</h2>
							<div>
								<div><i class="iconfont icon-xin"></i><span>追番</span></div>
								<ul>
									<li class="VEC-textareaHead-text">
										<div class="VEC-textareaHead-title"><span>用手机看</span></div>
										<div class="phoneShare">
											<div class="ScanCode">
												<div><img class="img-auto" src="../../assets/images/app-qrcode.png"/></div>
												<p>{{vedioInfo.title}}</p>
											</div>
											<p class="phoneAdrss">用<span>哔哩哔哩客户端</span>或其他应用扫描二维码</p>
										</div>
									</li>
									<li class="kongjian"><i class="iconfont icon-kongjian"></i></li>
									<li><i class="iconfont icon-sina0"></i></li>
									<li class="weixin"><i class="iconfont icon-weixin"></i></li>
									<li><i class="iconfont icon-tieba0"></i></li>
								</ul>
							</div>
						</div>
						<div class="VEC-textareatabs">
							<div class="VEC-textareafy clearfix">
								<div><span>TV</span></div>
								<div>
									<div><i class="iconfont icon-gengduo" :class="{active:!heigetLight}"></i></div>
									<div><i class="iconfont icon-jiugongge" :class="{active:heigetLight}"></i></div>
								</div>
							</div>
							<div class="VEC-textareabars">
								<ul class="VEC-textareabarsUl">
									<li @click="LiActiveIndex = index" v-for="(item,index) in barli" :key="index" class="VEC-textareabarsLi" :class="{LiActive:LiActiveIndex == index}">
										<span>{{index+1}}</span>
									</li>
								</ul>
							</div>
						</div>
						
					</div>
				</div>	
				
  				<div class="remark">
  					<div class="remarkTabs clearfix">
  						<h4>点评</h4>
  						<div class="remarkTabsL clearfix"> 
  							<div class="remarkGrade"><span>9.8</span></div>
  							<div class="remarkStar">
  								<ul class="clearfix">
  									<li v-for="(item,index) in barli" :key="index"><i class="iconfont icon-star"></i></li>
  								</ul>
  								<p>2.6万人评分</p>
  							</div>
  							<div class="remarkWrite">
  								<i class="iconfont icon-muiiconrwrite"></i>
  								<span>参与评论</span>
  							</div>
  						</div>
  						<div class="remarkTabsR"><span>查看全部点评</span></div>
  					</div>
  					<div class="remarkContent">
  						<ul class="clearfix">
  							<li v-for="(item,index) in remarkData" :key="index"> 
  								<div class="remarkInfo clearfix">
  									<p>{{item.author}}</p>
  									<ul class="clearfix">
  										<li v-for="(item,index) in barli" :key="index"><i class="iconfont icon-star"></i></li>
  									</ul>
  									<div class="remarkTime"><span>{{item.time}}</span></div>
  								</div>
  								<h5 class="remarkTitle">{{item.title}}</h5>
  								<p class="remarkContenP">{{item.content}}</p>
  							</li>
  						</ul>
  					</div>
  				</div>
  		</div>
  		
  		
	</div>
</template>

<script>
	import {getPlayer} from '../../utils/player'
	import { formattime } from '../../utils/formattime'
	import { resetBsData,dataClassify } from '../../utils/resetBsData'
	import recommonData from '../../assets/commomJson/videoList'
	import remarkData from '../../assets/commomJson/remarkData'
	import Scrollerbars from '@zhangzhengyi12/vue-scrollbars'
	import { mapMutations,mapState } from 'vuex'
	export default{
		name:"palyview",
		components:{
			Scrollerbars
		},
		data(){
			return{
				result:{},
				vedioInfo:{},
				isShowBigone:true,
				islike:false,
				maskLeft: '0px',
				soundMaskBottom:"46px",
				positionLeft:0,
				playparam:false,
				soundparam:false,
				currentTime:"00:00",
				durationTime:"23:00",
				volume:1,
				odlVolume:1,
				isshowSound:false,
				activeName: 'first',
				recommonData:[],
				errorIndex:0,
				heigetLight:true,
				LiActiveIndex:0,
				barli:[1,2,3,4,5],
				remarkData:[],
				value3:true,
				options: [{
			          value: 'text',
			          label: '文本'
			        }, {
			          value: 'ExpReg',
			          label: '正则'
			        }],
			    value: '',
			    showText:true,
			    errorPoster:require("../../assets/404.png"),
			    BulletscreenData:[],
			    BulletData:[],
			    showBullet:[],
			    bulletLeft:"860px",
			    bulletLeftNum:860
			}
		},
		methods:{
//			取视频数据
			geVedio(av){
		  		 getPlayer(av)
			        .then((res) => {
			        	console.log("dj",res)
						this.result = res
						this.getBulletscreen(res)
						this.badrequest(res)
			        });

				
			  },
			getRecommonVedio(params){
			  	this.vedioInfo = params
		  		 getPlayer(params.aid)
			        .then((res) => {
			        	console.log("dj",res)
						this.result = res
						this.getBulletscreen(res)
						this.badrequest(res)
			        });
			  },
			  
			  //点击移动
			clickStart(e){
				var pageX = e.pageX;
				var offsetLeft = this.$refs.controlInfo.offsetParent.offsetParent.offsetParent.offsetLeft + this.$refs.controlInfo.offsetParent.offsetLeft;
				var controlInfoWidth = parseFloat(getComputedStyle(this.$refs.controlInfo).width);
				this.positionLeft = pageX - offsetLeft
				this.$refs.video.currentTime = (this.positionLeft / controlInfoWidth*this.$refs.video.duration).toFixed(0)
				this.maskLeft = this.positionLeft + 'px' + '!important';
				this.$refs.controlInfo.addEventListener("mousemove",this.move,false)
				
				
			},
			//移动
			move(e){
			  	var pageX = e.pageX;
				var offsetLeft = this.$refs.controlInfo.offsetParent.offsetParent.offsetParent.offsetLeft + this.$refs.controlInfo.offsetParent.offsetLeft;
				var controlInfoWidth = parseFloat(getComputedStyle(this.$refs.controlInfo).width);
				this.positionLeft = pageX - offsetLeft
			  	this.maskLeft = this.positionLeft + 'px' + '!important';
			  	
			  	this.$refs.video.currentTime = (this.positionLeft / controlInfoWidth*this.$refs.video.duration).toFixed(0)
			  	
//			  	if(e.offsetY == 0 ||e.offsetY==24){
//					this.$refs.controlInfo.removeEventListener("mousemove",this.move,false)
//				}
			  },
//			  点击松开那么取消移动监听
			mouseout(){
				this.$refs.controlInfo.removeEventListener("mousemove",this.move,false)
			},
			play(){
				if(this.playparam == false){
					this.playparam = true
					this.$refs.video.play()
				}else{
					this.playparam = false
					this.$refs.video.pause()
				}
			},
			
//			播放时的自动进程
			changeTime(){
				var controlInfoWidth = parseFloat(getComputedStyle(this.$refs.controlInfo).width);
				var playOver = (this.$refs.video.currentTime / this.$refs.video.duration).toFixed(5)*controlInfoWidth
				this.currentTime = formattime(this.$refs.video.currentTime)
				this.maskLeft = playOver + 'px' + '!important';
			},
//			播放结束
			end(){
				this.playparam = false
				alert("播放结束")
			},
//			获取总时长
			getDuration(){
				this.durationTime = formattime(this.$refs.video.duration)
			},
//			视频请求错误
			err(){
				this.$message({
		          message: '抱歉，因版权原因无法观看此视频',
		          type: 'error',
		          center: true
		      })
			},
			
			//音量设置
			//点击移动
			soundStart(e){
				var pageY = e.pageY;
				var controlInfoHeight = parseFloat(getComputedStyle(this.$refs.SoundControl).height);
				var positionBottom = ((1068 - pageY) /controlInfoHeight*(controlInfoHeight - 14)).toFixed(0);
				this.soundMaskBottom = positionBottom + 'px' + '!important';
				this.volume = ((1068 - pageY) /controlInfoHeight).toFixed(2);
				this.odlVolume = this.volume
				this.setOdlVolume(this.volume)
			  	this.$refs.video.volume = this.volume
				this.$refs.SoundControl.addEventListener("mousemove",this.sounMove,false)
				
			},
			//触摸移动
			sounMove(e){
			  	var pageY = e.pageY;
				var controlInfoHeight = parseFloat(getComputedStyle(this.$refs.SoundControl).height);
				var positionBottom = ((1068 - pageY) /controlInfoHeight*(controlInfoHeight - 14)).toFixed(0);
				this.soundMaskBottom = positionBottom + 'px' + '!important';
				this.volume = ((1068 - pageY) /controlInfoHeight).toFixed(2);
				this.odlVolume = this.volume
				this.setOdlVolume(this.volume)
			  	this.$refs.video.volume = this.volume
			  },
//			  点击松开那么取消移动监听
			soundMouseout(){
				this.$refs.SoundControl.removeEventListener("mousemove",this.sounMove,false)
			},
			isMuted(e){
				if(this.soundparam == false){
					this.soundparam = true
					this.$refs.video.muted=true;
					this.soundMaskBottom = 0
					this.volume = 0
					this.setOdlVolume(this.volume)
				}else{
					this.soundparam = false
					this.$refs.video.muted=false;
					this.soundMaskBottom = this.odlVolume*46 + 'px'
					this.$refs.video.volume = this.odlVolume
					this.volume = this.odlVolume
					this.setOdlVolume(this.volume)
				}
			},
			 open() {
		        this.$confirm('您目前是游客不能发送弹幕, 是否进行登录?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          this.$message({
		            type: 'success',
		            message: '成功登录!'
		          });
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消登录'
		          });          
		        });
		      },
		      ...mapMutations([
		      	'setLoginState',
		      	'setOdlVolume'
		      ]),
		      login(){
		      	this.setLoginState(true)
		      },
		      register(){
		      	this.$message({
			          message: '注意!系统暂不提供注册，请等待注册开放',
			          type: 'warning',
			          center:true
			        });
		      },
		       handleClick(tab, event) {
//		        console.log(tab, event);
		      },
//		      全屏
		      fullScreen(){
		      	
				var ele = this.$refs.video;
			    if (ele .requestFullscreen) {
			        ele .requestFullscreen();
			    } else if (ele .mozRequestFullScreen) {
			        ele .mozRequestFullScreen();
			    } else if (ele .webkitRequestFullScreen) {
			        ele .webkitRequestFullScreen();
			    }

		     },
		  	
//		  	弹幕获取
			getBulletscreen(res){
				
				if(res.cid == undefined || res.cid ==null){
							return
						}else{
							var url = "/bulletscreen" + res.cid.split("https://comment.bilibili.com")[1]
							this.axios(url).then(response =>{
							var xmlText = response.data
							var x2js = new X2JS();
							var jsonObj = x2js.xml_str2json( xmlText );
							this.BulletscreenData = resetBsData(jsonObj.i.d)
							this.BulletData = this.sortByKey(resetBsData(jsonObj.i.d),"BSdurationAll") 
							this.showBullet = dataClassify(this.BulletData)
							console.log("this.showBullet",this.showBullet) 
							console.log("this.BulletscreenData",this.BulletscreenData)
							console.log("BulletData",this.BulletData)
							},err =>{
								alert(err)
							})
						}
				
			},
//			弹幕设置
			setBullet(){
				
			},
//			数组排序
			sortByKey(array,key){
			    return array.sort(function(a,b){
			        var x = parseInt(a[key]);
			        var y = parseInt(b[key]);
			        return((x<y)?-1:((x>y)?1:0));
			   	 })
				},
//			视频请求失败
			badrequest(res){
				if(res.code == undefined || res.code ==null){
					this.$refs.video.setAttribute("poster",res.img)
					return
				}else{
					this.err()
					this.$refs.video.setAttribute("poster",this.errorPoster)
				}
			}
		  	
		 },
		 computed:{
			
			...mapState({
				odlVolumeData:state =>state.odlVolumeData
			})
			
		},
		 watch:{
		 	volume(){
		 		if(this.volume == 0){
		 			this.soundparam = true
		 		}else{
		 			this.soundparam = false
		 		}
		 	}
		 },
	    created(){
	    	this.vedioInfo = this.$route.query
	  		this.geVedio(this.$route.query.aid)
	  		this.recommonData = recommonData.data.list
	  		this.remarkData = remarkData.data
	  		this.volume = this.odlVolumeData
	  		this.soundMaskBottom = this.odlVolumeData*46 + 'px'
			this.odlVolume = this.odlVolumeData
	    },
	    mounted(){
	    	window.scrollTo(0,276)
	    	this.$refs.video.volume = this.odlVolumeData
	    }
	}
</script>

<style lang="less" scoped>
.palyView{
	position: relative;
	width: 100%;
	overflow: hidden;
	
	.pyHeader{
		width: 100%;
		border-bottom: 1px solid #E5E9EF;
		.pyHeaderContent{
			width: 1160px;
			margin: 0 auto;
			padding: 20px 0 22px;
			border-top: 1px solid #E5E9EF;
			position: relative;
			
			.headerR{
				position: absolute;
				right: 0;
				top: 27.5px;
				width: 224px;
				height: 71px;
				.headerRImg{
					position: absolute;
					left: 16px;
					top: -20px;
					width: 86px;
					height: 100px;
					background-image: url(../../assets/images/func-icons.png);
  				    background-position: 0 0;
					cursor: pointer;
				}
				.headerRText{
					float: right;
					.headerRTextUp{
						font-size: 12px;
						margin: 0 0 10px;
						color: #99A2AA;
						text-align: right;
						cursor: default;
						.textHightlight{
							font-weight: 600;
							color: #333333;
						}
					}
					.headerRTextDown{
						margin: 12px 0 0;
						font-size: 18px;
						color: white;
						background: #f5b23d;
						width: 120px;
						height: 48px;
						line-height: 48px;
						padding: 0 20px 0 22px;
						text-align: center;
						cursor: pointer;
						border-radius: 4px;
						transition: all .3s ease;
						&:hover{
							background-color: #FFC154;
						}
					}
				}
				
			}
			
			>p{
			    overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			}
			>p:nth-child(1){
				height: 26px;
				margin-bottom: 10px;
				font-size: 18px;
			    font-weight: 400;
			    color: #222;
			    line-height: 18px;
			}
			>p:nth-child(2){
				height: 16px;
				line-height: 16px;
				color: #757575;
				font-size: 12px;
				margin-bottom: 14px;
				>span{
					margin-right: 10px;
				}
			}
			>p:nth-child(3){
				display: flex;
				height: 18px;
				line-height: 18px;
				font-size: 12px;
				>i{
					font-size: 20px;
					margin-right: 10px;
					color: #B8C0CC;
					&.icon-coin{
					color: #0EA7D8 !important;
					}
					&.icon-heart{
						color: #F36996 !important;
						&:hover{
							text-shadow: 0px 0px 5px;
						}
					}
				}
				span{
					margin-right:30px ;
				}
			}
		}
		
	}
	
	.pyContent{
		width: 100%;
		background: #F6F9FA;
		padding: 20px 0;
		
		
		.palyViewContain{
			width: 1160px;
			margin: 0 auto;
			border-radius: 4px;
			box-shadow: 0 0 1px 2px #B8C0CC;
			>div{
				float: left;
			}

			.vedioRightAside{
				width: 299px;
				height: 736px;
				background: #fff;
				border-left: 1px solid #B8C0CC;
				display: none;
				
				.RasideHead{
					font-size:12px;
					color:#99A2AA;
					overflow: hidden;
					height: 60px;
					border-bottom: 1px solid #E4E7ED;
					.RasideHead1{
						float: left;
						margin: 20px 0 0 20px;
						>span:nth-child(1){
							font-size: 18px;
						    font-weight: 700;
						    color: #222;
						}
					}
					.RasideHead2{
						float: right;
						margin-top: 20px;
						
						>i{
							font-size: 25px;
							margin-right: 10px;
							cursor: pointer;
							&:hover{
								color: #6D757A;
							}
						}
						
					}
				}
				
				.asideBar{
					margin: 0 20px;
					cursor: pointer;
					position: relative;
					.asideLi{
						height: 62px;
						margin-bottom: 10px;
						>div{
							float: left;
						}
						.recommonImg{
							height: 100%;
							width: 95px;
							border-radius: 4px;
							overflow: hidden;
							background-color: yellowgreen;
							position: relative;
							&:hover{
								>.recommonImgOverlay{
									display: block;
								}
							}
							.recommonImgOverlay{
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
								background-color: rgba(45, 43, 58,.8);
								display: none;
								.timeInfo{
									position: absolute;
									height: 25px;
									line-height: 25px;
									width: 100%;
									bottom: 0;
									left: 0;
									color: #99A2AA;
									font-size: 12px;
									.timeText{
										float: left;
										height: 100%;
										margin-left: 6px;
									}
									.timeIcon{
										float: right;
										height: 100%;
										margin-right: 6px;
									}
								}
							}
						}
						.recommontext{
							margin-left: 10px;
							width: calc(100% - 105px);
							height: 100%;
							font-size: 12px;
							.recommontextTitle{
								line-height: 18px;
								height: 36px;
								margin-bottom: 5px;
								white-space: normal;
								overflow: hidden;
								&:hover{
									color: #4FB5E7;
								}
							}
							.recommontextinfo{
								overflow: hidden;
								height: 21px;
								width: 100%;
								color: #99A2AA;
								>div{
									float: left;
									width: 50%;
									line-height: 21px;
									>i{
										font-size: 14px;
										margin-right: 6px;
									}
								}
							}
						}
					}
					
					
					/*弹幕设置*/
					.bulletScreenHead{
						overflow: hidden;
						>div{
							float: left;
							height: 32px;
							font-size: 12px;
							color: #99a2aa;
							vertical-align: top;
							&:nth-child(1){
								width: 38px;
							}
							&:nth-child(2){
								width: 130px;
								margin: 0 8px;
							}
							&:nth-child(3){
								width: calc(100% - 200px);
								margin: 0 8px;
							}
						}
					}
					.bulletScreenUl{
						width: 100%;
						>li{
							width: 100%;
							height: 24px;
							line-height: 24px;
							font-size: 12px;
							color: #99a2aa;
							display: flex;
							>span:nth-child(1){
								margin-right: 12px;
							}
							>span:nth-child(2){
								width: 138px;
								margin-right: 5px;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
						}
						
						
					}
					
					.Buttontitle{
						height:20px;
						line-height: 20px;
						font-size: 14px;
						color: #333;
						display: flex;
						.Buttontitlelist{
							padding-right: 10px;
						}

					}
					.ButtontitleShow{
						margin: 20px 0;
						width: 100%;
						.shieldingOptions{
							width: 100%;
							height: 20px;
							line-height: 20px;
							margin-top: 20px;
							color: #99A2AA;
							font-size: 14px;
							>span{
								margin-right: 15px;
							}
						}
						.shieldingContent{
							width: 100%;
							height: 180px;
							background-color: #F4F5F7;
							border-radius: 4px;
							margin-top: 10px;
							overflow: hidden;
							>div{
								height: 20px;
								width: 50%;
								line-height: 20px;
								margin-top: 10px;
								font-size: 12px;
								color: #A4BEE3;
								>span{
									margin: 0 20px;
								}
							}
							>div:nth-child(1){
								float: left;
							}
							>div:nth-child(2){
								float: right;
								text-align: right;
							}
						}
						.shieldingContentP{
							height: 100px;
							line-height: 100px;
							text-align: center;
							font-size: 12px;
							color: #A4BEE3;
						}
					}
					.shieldType{
						width: 100%;
						border-top: 1px solid #E2E2E2;
						>p{
							margin-top: 10px;
							font-size: 12px;
							height: 20px;
							line-height: 20px;
							color: #222222;
							font-weight: 700;
						}
						.shieldTypeLi{
							width: 86px;
							height: 66px;
							margin-bottom: 16px;
							text-align: center;
							font-size: 12px;
							color: #222222;
							float: left;
							>div{
								height: 46px;
								width: 100%;
								>i{
									font-size: 50px;
								}
							}
							>p{
								width: 100%;
								height: 20px;
								line-height: 20px;
							}
							&:hover{
								color: #8D9EFF;
							}
						}
					}
					
				}
			}

			.vedioContent{
			 	width: 100%;
			 	position:relative;
			 	overflow:hidden;
			 	
			 	.icon-zhibo1{
					font-size: 70px;
					position: absolute;
					bottom: 88px;
					right: 30px;
					z-index: 999;
					color: #999999;
					cursor: pointer;
					}
			 	
			 	.vediocontain{
					width: 100%;
					height: 660px;
					background-color: #333333;
					cursor: pointer;
					position: relative;
					>.videoContent{
						width: 100%;
						height: 100%;
					}
					>.bullet{
						position: absolute;
						left: 860px;
						top: 0;
						height: 33%;
						background: red;
						opacity: .2;
						display: none;

					}
				}
				
				.vedioControls{
					height: 35px;
					position: relative;
					background-color: #fff;
					>div{
						float: left;
						>i{
							color: #A8A8A8;
							font-size: 25px;
						}
						
					}
					.controlL{
						margin: 5px 10px;
						i{
							margin-right: 10px;
							&:hover{
								color: #6D757A;
								cursor: pointer;
							}
						}
					}
					.playLoad{
						margin: 5px 0;
						position: relative;
						display: flex;
						line-height: 25px;
						width: calc(100% - 309px);
						.playLoadOverLay{
							position: absolute;
							top: 0;
							left: 0;
							z-index: 100;
							width: calc(100% - 78px);
							height: 25px;
							display: flex;
							cursor: pointer;
							-moz-user-select: none; -khtml-user-select: none; user-select: none;
							.playBar{
								position: absolute;
								left: 0;
								top: 0;
								margin: 5px 0 0 -7.5px;
								width: 15px;
								height: 15px;
								border-radius: 50%;
								box-shadow: 0 0 1px 1px #09A2D3;
								background-color: #fff;
								-moz-user-select: none; -khtml-user-select: none; user-select: none;
							}
						}
						.allDuration{
							height: 6px;
							width: calc(100% - 78px);
							background-color: #E5E9EF;
							border-radius: 8px;
							margin:9.5px  10px 0 0;
							&:hover{
								color: #6D757A;
								cursor: pointer;
							}
						}
						.playloading{
							position: absolute;
							top: 9.5px;
							left: 0;
							width:0;
							height: 6px;
							background: red;
							border-radius: 8px;
						}
						span{
							font-size: 12px;
							cursor:default;
						}
					}
					.controlR{
						float: right;
						display: flex;
						height: 35px;
						line-height: 35px;
						margin-left: 10px;
						position: relative;
						
						.SoundDetail{
							position: absolute;
							bottom: 35px;
							right: 181.5px;
							width: 30px;
							height: 100px;
							background-color: #fff;
							border-radius: 2px;
							box-shadow:  0 0 1px 1px #999999;
							z-index: 999;
							display: none;
							transition: all .3s ease;
							.SoundDetailTop{
								text-align: center;
								height: 26px;
								line-height: 26px;
								-moz-user-select: none; -khtml-user-select: none; user-select: none;
								>span{
									-moz-user-select: none; -khtml-user-select: none; user-select: none;
									margin: 0 auto;
								}
							}
							.SoundDetailRange{
								width: 100%;
								height: 60px;
								margin: 5px 0 8px;
								position: relative;
								display: flex;
								text-align: center;
								
								.SoundDetailContain{
									width: 6px;
									height: 60px;
									border-radius: 8px;
									background-color: #E5E9EF;
									margin: 0 auto !important;
									color: #6D757A;
								}
								.SoundDetailOver{
									position: absolute;	
									bottom: 0;
									left: 12px;
									height: 0;
									width: 6px;
									border-radius: 8px;
									background-color: #00A1D6;
									z-index: 888;
								}
								.SoundDetailOverlay{
									position: absolute;
									left: 5px;
									height: 0;
									height: 100%;
									width: 20px;
									z-index: 999;
									cursor: pointer;
									display: flex;
									.SoundDetailMask{
										position: absolute;
										bottom: 0px;
										left: 3px;
										box-shadow: 0 0 1px 1px #00A1D6;
										width: 14px;
										height: 14px;
										border-radius: 50%;
										background: #fff;
									}
								}
							}
						}

						i{
							margin-right: 10px;
							height: 35px;
							&:hover{
								color: #6D757A;
								cursor: pointer;
							}
						}
						span{
							margin-right: 10px;
							height: 35px;
							font-size: 12px;
							color: #A8A8A8;
							&:hover{
								color: #6D757A;
								cursor: pointer;
							}
						}
					}
				}
				
				.bulletScreen{
					border-top: 1px solid #E5E9EF;
					background-color: #fff;
					>div{
						float: left;
						height: 38px;
						line-height: 38px;
						
					}
					.bulletScreenL{
						padding: 0 5px;
						border-right: 1px solid #E5E9EF;
						>i{
							font-size: 30px;
							margin: 0 5px;
							color: #A8A8A8;
							cursor: pointer;
							&:hover{
								color: #6D757A;
							}
						}
						
					}
					.bulletScreenRcontian{
						overflow: hidden;
						width: calc(100% - 91px);
						background-color: #FAFAFA;
						cursor: default;
						
						
						.bulletScreenM{
							float: left;
							font-size: 12px;
							height: 38px;
							line-height: 38px;
							margin-left: 15px;
							color: #99a2aa;
							.heightLight{
								color: #00C4EC;
								cursor: pointer;
								margin: 0 10px;
							}
						}
						.bulletScreenR{
							float: right;
							color: #99a2aa;
							font-size: 12px;
							display: flex;
							text-align: center;
							>span{
								margin: 4px 10px;
								padding: 0 10px 0 14px;
								border: 1px solid #CCD0D7;
								width: 40px;
								height: 28px;
								line-height: 28px;
								border-radius: 4px;
								background-color: #CCD0D7;
								color: #fff;
								cursor: pointer;
							}
							>a{
								margin-right: 10px;
								color: #99a2aa;
								&:hover{
								color: #00C4EC;
								}
							}
						}
					}
					
				}
				
			}
			
		}
	}
	
	
	.vedioExplain{
		width: 1160px;
		margin: 0 auto;
		.vedioExplainContent{
			padding: 22px 0;
			width: 100%;
			height: 160px;
			border-bottom: 1px solid #e5e9ef;
			>div{
				float: left;
			}
			.VEC-img{
				width: 120px;
				height: 160px;
				border-radius: 4px;
				overflow: hidden;
			}
			.VEC-textarea{
				width: calc(100% - 144px);
				padding-left: 24px;
				.VEC-textareaHead{
					height: 38px;
					>h2{
						float: left;
						height: 38px;
						line-height: 18px;
						color: #222;
					    font-weight: 400;
					    font-size: 18px;
						width: 600px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					>div{
						float: right;
						height: 100%;
						>div{
							float: left;
							width: 80px;
							height: 28px;
							line-height: 28px;
							margin-right: 20px;
							border-radius: 4px;
							color: #fff;
							background-color: #F36392;
							border: 1px solid #f36392;
							cursor: pointer;
							font-size: 14px;
							text-align: center;
							>i{
								margin-right: 10px;
							}
						}
						>ul{
							float: right;
							height: 100%;
							>li{
								float: left;
								width: 30px;
								height: 30px;
								line-height: 30px;
								margin-right: 10px;
								cursor: pointer;
								text-align: center;
								&.kongjian{
										margin-top: -1px !important;
									}
							
								>i{
									color: #CCD0D7;
									font-size: 30px;
									&.icon-tieba0{
										font-size: 32px;
										}
									&.icon-weixin{
										font-size: 27px;
										&:hover{
											color: #8DD35F;
										}
									}
									&.icon-tieba0:hover{
										color: #227AD4;
									} 
									&.icon-sina0:hover{
										color: #DD3939;
									}  
									&.icon-kongjian:hover{
										color: #EAA631;
									} 
								}
								&.VEC-textareaHead-text{
									position: relative;
									width: 88px;
								    height: 38px;
								    
								    .VEC-textareaHead-title{
								    	width: 86px;
									    height: 28px;
								    	line-height: 28px;
									    text-align: center;
									    font-size: 14px;
									    color: #6d757a;
									    border: 1px solid #e5e9ef;
									    border-radius: 4px;
									    margin-right: 20px;
								    }
								    &:hover{
								    	.VEC-textareaHead-title{
								    		border-color: #00A1D6;
								    		>span{
										    	color: #00A1D6;
										    }
								    	}
								    	.phoneShare{
								    		display: block;
								    	}
								    }
								    
								    .phoneShare{
								    	position: absolute;	
								    	top: 37px;
								    	left: 0;
								    	width: 300px;
								    	cursor: default;
								    	padding: 10px;
								    	border-radius: 4px;
								    	box-shadow: 0 0 1px 1px #CCD0D7;
								    	background-color: #fff;
								    	display: none;
								    	.ScanCode{
								    		overflow: hidden;
								    		>div{
								    			float: left;
									    		height: 120px;
									    		width: 120px;
									    		margin: 0 15px 0 5px;
								    		}
								    		>p{
								    			float: left;
								    			width: calc(100% - 140px);
								    			font-size: 16px;
								    			color: #222;
								    			word-wrap: break-word;
											    word-break: break-word;
											    display: -webkit-box;
											    -webkit-box-orient: vertical;
											    overflow: hidden;
											    -o-text-overflow: ellipsis;
											    text-overflow: ellipsis;
												min-height: 20px;
											    max-height: 80px;
											    line-height: 20px;
											    -webkit-line-clamp: 4;
								    			
								    			
								    			
								    			
								    		}
								    	}
								    	.phoneAdrss{
								    		margin-top: 10px;
								    		text-align: left;
								    		color: #222;
								    		>span{
								    			color: #00A1D6;
								    			cursor: pointer;
								    		}
								    	}
								    }
								}
							}
						}
					}
				}
				
				.VEC-textareatabs{
					width: 100%;
					height: 113px;
					margin-top: 9px;
					/*background-color: red;*/
					.VEC-textareafy{
						width: 100%;
						height: 26px;
						border-bottom: 1px solid #E5E9EF;
						>div:nth-child(1){
							float: left;
							width: 20px;
							height: 25px;
							color: #00C4EC;
							font-size: 14px;
							line-height: 25px;
							border-bottom: 1px solid #00C4EC;
							cursor: pointer;
						}
						>div:nth-child(2){
							float: right;
							width: 200px;
							height: 100%;
							overflow: hidden;
							
							>div{
								float: right;
								height: 26px;
								line-height: 26px;
								font-size: 20px;
								color: #222;
								margin: 0 5px 0 10px;
								&:hover{
									cursor: pointer;
									color: #00A1D6;
								}
								>i{
									font-size: 25px;
								}
							}
						}
					}
					.VEC-textareabars{
						height: 72px;
						width: 100%;
						padding-top: 14px;
						.VEC-textareabarsUl{
							width: 100%;
							height: 100%;
							overflow: hidden;
							.VEC-textareabarsLi{
								float: left;
								width: 66px;
								height: 28px;
								line-height: 28px;
								color: #6d757a;
								font-size: 14px;
								border: 1px solid #E5E9EF;
								margin: 0 8px 9px 0;
								border-radius: 4px;
								text-align: center;
								cursor: pointer;
								&:hover{
									color: #00C4EC;
									border-color: #00C4EC;
								}
							}
						}
					}
				}
				
				
			}
		}
		.remark{
			width: 100%;
			height: 233px;
			padding-bottom: 20px;
			.remarkTabs{
				height: 51px;
				padding-top: 20px;
				>h4{
				    float: left;
				    line-height: 24px;
				    height: 24px;
				    font-size: 18px;
				    color: #222;
				    font-weight: 700;
				}
				.remarkTabsL{
					float: left;
				    margin-left: 20px;
				    margin-top: -5px;
				    height: 36px;
				    .remarkGrade{
				    	height: 36px;
					    float: left;
					    font-size: 36px;
					    line-height: 36px;
					    color: #ffa726;
					    font-weight: 700;
				    }
				    .remarkStar{
				    	float: left;
  						margin-left: 12px;
  						>ul{
  							width: 100%;
  							>li{
  								float: left;
  								margin-right: 2px;
  								color: #ffa726;
  							}
  						}
  						>p{
  							color: #99a2aa;
						    font-size: 12px;
						    line-height: 16px;
						    margin-top: 6px;
  						}
				    }
				    .remarkWrite{
				    	margin-top: 6px;
					    margin-left: 40px;
					    float: left;
					    height: 24px;
					    font-size: 14px;
					    color: #222;
					    line-height: 24px;
					    cursor: pointer;
					    >i{
					    	color: #F36392;
					    	font-size: 20px;
					    	margin-right: 5px;
					    }
					    >span:hover{
					    	color: #00A1D6;
					    }
				    }
				}
				.remarkTabsR{
					float: right;
				    line-height: 22px;
				    border: 1px solid #b7c0cc;
				    border-radius: 4px;
				    height: 22px;
				    padding: 0 10px;
				    font-size: 12px;
				    color: #6e7579;
				    cursor: pointer;
				    &:hover{
				    	color: #00C4EC;
				    	border-color: #00C4EC;
				    }
				}
				
			}
			.remarkContent{
				width: 100%;
				cursor: pointer;
				>ul{
					width: 100%;
					>li{
						float: left;
						width: 333px;
						height: 122px;
						padding: 20px;
						background-color: #F4F5F7;
						border-radius: 5px;
						&:nth-child(2){
							margin: 0 20px;
						}
						.remarkInfo{
						    height: 16px;
						    line-height: 16px;
						    font-size: 12px;
    						margin-bottom: 12px;
    						color: #fb7299;
    						>p{
    							float: left;
    							margin-right: 8px;
    						}
    						>ul{
    							float: left;
    							width: 100px;
	  							>li{
	  								float: left;
	  								margin-right: 2px;
	  								color: #ffa726;
	  							}
    						}
    						.remarkTime{
    							float: right;
    							width: 40px;
    							height: 16;
    							line-height: 16px;
    							color: #99a2aa;
    							font-size: 12px;
    						}
						} 
						.remarkTitle{
							word-wrap: break-word;
						    word-break: break-word;
						    display: -webkit-box;
						    -webkit-box-orient: vertical;
						    overflow: hidden;
						    -o-text-overflow: ellipsis;
						    text-overflow: ellipsis;
							min-height: 24px;
						    max-height: 48px;
						    line-height: 24px;
						    font-size: 14px;
						    color: #212121;
						    font-weight: 700;
						    -webkit-line-clamp: 2;
						    margin-bottom: 6px;
						    &:hover{
						    	color: #00A1D6;
						    }
						} 
						.remarkContenP{
							color: #6d757a;
						    max-height: 60px;
						    line-height: 20px;
						    -webkit-line-clamp: 3;
						    font-size: 12px;
						    word-wrap: break-word;
						    word-break: break-word;
						    display: -webkit-box;
						    -webkit-box-orient: vertical;
						    overflow: hidden;
						    -o-text-overflow: ellipsis;
						    text-overflow: ellipsis;
						}
					}
				}
			}
		}
		
	}
	
	
	
}

.aside-img-auto{
	height: 100%;
}

.showBigone{
		.vedioContent{
	 		width: calc(100% - 300px) !important;
	 	}
	 	.vedioRightAside{
	 		display: block !important;
	 	}
	}
.like{
	color: #FD113A !important;
}

.ishowIcon{
	display: none;
}
.showSound{
	display: block !important;
}
.active{
	color: #00A1D6 !important;
}
.LiActive{
	color: #fff !important;
	border-color: #00C4EC !important;
	background-color: #00C4EC;
}

.textActive{
	color: #40B6FF;
}
</style>