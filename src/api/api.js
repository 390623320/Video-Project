import http from "../utils/axios"
import orangeJsonp from 'jsonp'

//轮播图+广告位
export function getLocs(data) {
    return http('/api/locs',{
        params: {
            pf: data.pf,
            ids: data.ids
        }
    })
}
//搜索框默认关键词
export function getSearchDefaultWords(){
    return http('/api/search_value')
}
//搜索框搜索建议
export function getSuggest(term){
    return http('/api/suggest',{
        params: {
            term
        }
    })
}
////菜单右侧gif
export function getMenuIcon(){
    return http('/api/menu_gif')
}
////首页推荐排行
export function getRankingIndex(day){
    return http('/api/ranking/index',{
        params: {
            day: day//1,3,7
        }
    })
}
//当前在线数
export function getOnline(){
    return http('/api/online')
}
////正在直播
export function getLiveling(){
    return http('/api/liveling')
}
////模块新动态
export function getDynamicRegion(data){
    return http('/api/dynamic/region',{
        params: {
//          ps: data.ps,
//          rid: data.rid
            ps: 10,
            rid: 13  //168
        }
    })
}
////模块最新投稿
export function getNewlist(data){
    return http('/api/newlist',{
        params: {
//          ps: data.ps,
//          rid: data.rid
 			ps: 10,
            rid: 13  //168
        }
    })
}

 // id，rid模块ID，day天数，original是否原创 0-1
 //rid 13 168 
////模块 三日/一周 排行 全部/原创
export function getRankingRegion(data){
    return http('/api/ranking/region',{
        params: {
            rid: 13,
            day: 7,
            original: 0
        }
    })
}
////番剧更新时间表
export function getTimelineGlobal(){
    return http('/api/timeline_v2_global')
}

////国创更新时间表
export function getTimelineCn(){
    return http('/api/timeline_v2_cn')
}


////排行榜数据
////全站、原创、新人排行榜
//['all','origin','bangumi','cinema','rookie']
export function getRanking(){
    return http('/api/ranking',{
        params: {
            rid:1,
            day:30,
            type:'cinema',
            arc_type:0
        }
    })
}


