<template>
    <div class="g-foot">
        <div class="g-pagewrap">
            <div class="about">
                <h6 class="abouttitle">Video Website</h6>
                <div class="aboutlink">
                    <a href="javascript:;">关于我们</a>
                    <a href="javascript:;">友情链接</a>
                    <a href="javascript:;">周边</a>
                </div>
                <div class="aboutlink">
                    <a href="javascript:;">联系我们</a>
                    <a href="javascript:;">加入我们</a>
                    <a href="javascript:;">官方认证</a>
                </div>
            </div>
            <div class="link">
                <h6 class="linktitle">传送门</h6>
                <div class="help">
                    <a href="javascript:;">帮助中心</a>
                    <a href="javascript:;">高级弹幕</a>
                    <a href="javascript:;">活动专题页</a>
                </div>
                <div class="help">
                    <a href="javascript:;">侵权申诉</a>
                    <a href="javascript:;">分院帽计划</a>
                    <a href="javascript:;">活动中心</a>
                </div>
                <div class="help">
                    <a href="javascript:;">用户反馈论坛</a>
                    <a href="javascript:;">壁纸墙</a>
                    <a href="javascript:;">名人堂</a>
                </div>
            </div>
            <div class="other">
                <a href="javascript:;" class="phone">
                    <i></i>
                    <span>手机端下载</span>
                    <img src="../../assets/images/app-qrcode.png" alt="">
                </a>
                <a href="javascript:;" class="weibo">
                    <i></i>
                    <span>新浪微博</span>
                    <img src="../../assets/images/weibo-qrcode.png" alt="">
                </a>
                <a href="javascript:;" class="weixin">
                    <i></i>
                    <span>官方微信</span>
                    <img src="../../assets/images/weixin-arcode.gif" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'appfooter',
    data() {
        return {}
    },
    components: {}
}
</script>

<style lang="less" scoped>
.g-foot{
    width: 100%;
    height: 192px;
    background-color: #f6f9fa;
    .g-pagewrap{
    	width: 60%;
        display: flex;
        flex-direction: row;
        margin: 0 20%;
        padding: 40px 0;
        font-size: 14px;
        >.about{
            width: 33.3%;
            height: 112px;
            .abouttitle{
                padding-bottom: 22px;
                color: #99a2aa;
            }
            .aboutlink{
                display: flex;
                flex-direction: row;
                >a{
                    position: relative;
                    width: 33.3%;
                    padding-bottom: 16px;
                    font-size: 14px;
                }
            }
        }
        >.link{
            width: 33.3%;
            height: 112px;
            border-left: 1px solid #e5e9ef;
            border-right: 1px solid #e5e9ef;
            padding-left:24px; 
            .linktitle{
                padding-bottom: 22px;
                color: #99a2aa;
            }
            .help{
                display: flex;
                flex-direction: row;
                >a{
                    width: 33.3%;
                    padding-bottom: 16px;
                    font-size: 14px;
                }
            }
        }
        >.other{
            height: 112px;
            width: 33.3%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            text-align: center;
            .phone{
                position: relative;
                display: flex;
                flex-direction: column;
                >i{
                    display: block;
                    width: 60px;
                    height: 60px;
                    background: url(../../assets/images/page_icons.png) no-repeat;
                    background-position: -1090px -194px;
                }
                >span{
                    padding-top: 10px;
                }
                >img{
                    position: absolute;
                    right: -23px;
                    top: -143px;
                    display: none;
                    width: 98px;
                    height: 98px;
                    padding: 16px;
                    // border: 1px solid #e5e9ef;
                    background-color: #fff;
                }
                &::after{
                    position: absolute;
                    left: 17px;
                    bottom: 114px;
                    content: "";
                    width: 0;
                    height: 0;
                    border-top: 10px solid #ffffff;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    // border: 1px solid #e5e9ef;
                    display: none;
                }
                &:hover{
                    >img{
                        display: block
                    }
                    &::after{
                        display: block
                    }
                }
            }
            .weibo{
                display: flex;
                flex-direction: column;
                position: relative;
                >i{
                    display: block;
                    width: 60px;
                    height: 60px;
                    background: url(../../assets/images/page_icons.png) no-repeat;
                    background-position: -1024px -322px;
                }
                >span{
                    padding-top: 10px;
                }
                >img{
                    position: absolute;
                    right: -30px;
                    top: -143px;
                    display: none;
                    width: 98px;
                    height: 98px;
                    padding: 16px;
                    // border: 1px solid #e5e9ef;
                    background-color: #fff;
                }
                &::after{
                    position: absolute;
                    left: 17px;
                    bottom: 114px;
                    content: "";
                    width: 0;
                    height: 0;
                    border-top: 10px solid #ffffff;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    // border: 1px solid #e5e9ef;
                    display: none;
                }
                &:hover{
                    >img{
                        display: block
                    }
                    &::after{
                        display: block
                    }
                }
            }
            .weixin{
                display: flex;
                flex-direction: column;
                position: relative;
                >i{
                    display: block;
                    width: 60px;
                    height: 60px;
                    background: url(../../assets/images/page_icons.png) no-repeat;
                    background-position: -1024px -66px;
                }
                >span{
                    padding-top: 10px;
                }
                >img{
                    position: absolute;
                    right: -23px;
                    top: -143px;
                    display: none;
                    width: 220px;
                    height: 98px;
                    padding: 16px;
                    // border: 1px solid #e5e9ef;
                    background-color: #fff;
                }
                &::after{
                    position: absolute;
                    left: 17px;
                    bottom: 114px;
                    content: "";
                    width: 0;
                    height: 0;
                    border-top: 10px solid #ffffff;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    // border: 1px solid #e5e9ef;
                    display: none;
                }
                &:hover{
                    >img{
                        display: block
                    }
                    &::after{
                        display: block
                    }
                }
            }
        }
    }
    
}

a{
	color: black;
	&:hover{
		color:#00B4E5;
	}
}
h6{
	color: #49483E;
	font-weight: 500;
}
</style>
