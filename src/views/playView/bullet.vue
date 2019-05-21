<template>
	<div>
		<video @timeupdate="time" ref="video" controls="controls" autoplay="autoplay" style="width:100%;height:100%;">
	        <source src="http://cn-sdjn3-cu-v-02.acgvideo.com/upgcxcode/47/77/92377747/92377747-1-6.mp4?expires=1558265700&platform=html5&ssig=ABz8oEuOUAA9Sd7xTaJtkQ&oi=1885384118&trid=e2258b43401b435fbafb4a875fee0692&nfb=maPYqpoel5MI3qOUX6YpRA==&nfc=1" type="video/ogg" />
	        <source src="http://cn-sdjn3-cu-v-02.acgvideo.com/upgcxcode/47/77/92377747/92377747-1-6.mp4?expires=1558265700&platform=html5&ssig=ABz8oEuOUAA9Sd7xTaJtkQ&oi=1885384118&trid=e2258b43401b435fbafb4a875fee0692&nfb=maPYqpoel5MI3qOUX6YpRA==&nfc=1" type="video/mp4" /> 
	        Your browser does not support the video tag.
	    </video>
		<div class="canvasContain">
			
			<canvas width="1000" height="200" ref="canvas" ></canvas> 
		</div>
	</div>
</template>

<script>
	export default{
		name:"bullet",
		data(){
			return{
				buttleData:[
					{
						content:"2.红刀哥死的很憋屈",
						time:0
					},
					{
						content:"ihuhijoi屈",
						time:1
					},
					{
						content:"使得公司的的很憋屈",
						time:2
					},
					{
						content:"司法所地方哥死的很憋屈",
						time:3
					},
					{
						content:"进口料件刻录机的很憋屈",
						time:4
					},
					{
						content:"2.艾丝凡屈",
						time:5
					},
					{
						content:"2.阿萨德淡定哥很憋屈",
						time:6
					},
					{
						content:"2.啊第三代",
						time:7
					},
					{
						content:"2.红斯蒂芬屈",
						time:8
					},
					{
						content:"2.鬼天热个人屈",
						time:9
					},
					{
						content:"2.大赛桂冠憋屈",
						time:10
					},
					{
						content:"发生的很憋屈",
						time:11
					},
					{
						content:"2.9592595959很憋屈",
						time:12
					},
					{
						content:"2ddddddddd憋屈",
						time:13
					}
				],
				canvasW:0,
				canvasH:0,
				Way:4,
				WayHeight:0,
				ctx:null,
				bulletFlag:1,
				bulletL:1000,
				bulletT:0,
				bulletCurrent:200
			}
		},
		methods:{
			time(){
				var kk = parseInt(this.$refs.video.currentTime) 
				this.drawText(this.buttleData,kk)
				
			},
			getWayHeight(){
				this.WayHeight = this.canvasH/this.Way
			},
			drawText(bulletList,bulletCurrent) {
//				按currentTime查找对应的弹幕
				var currentIndex = bulletList.findIndex(function(obj, objIndex, objs){
				    return obj.time == bulletCurrent;
				})
				if( currentIndex == -1){
					return
				}
				this.bulletT = this.WayHeight*(this.bulletFlag - (Math.floor(Math.random()*7)+1)/10)  //0.1-0.7
				this.bulletFlag = this.bulletFlag>3?1:++this.bulletFlag
				
	            this.ctx.fillText(bulletList[currentIndex].content, this.bulletL, this.bulletT);

	            this.bulletL -= 150
     	 	}
	
		},
		mounted(){
			this.canvasW = parseFloat(getComputedStyle(this.$refs.canvas).width)
			this.canvasH = parseFloat(getComputedStyle(this.$refs.canvas).height)
			this.ctx = this.$refs.canvas.getContext('2d');
			this.ctx.font = '16px Microsoft YaHei';          //字体、大小
			this.ctx.fillStyle = '#000000';                  //字体颜色
			this.getWayHeight()

			
		}
	}
</script>

<style lang="less" scoped>
.canvasContain{
	width: 1000px;
	height: 200px;
	canvas{
		background-color: rgba(55,55,99,.3);
		width: 100%;
		height: 100%;
	}
}
</style>

