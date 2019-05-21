import { DateFormat } from './DateFormat'

export function resetBsData(arr){
			var BSdata = []
			arr.forEach((item,index)=>{
				var obj = {}
				var sendData = item._p.split(",")[4] + "000"
				var min = parseInt(item._p.split(",")[0]/60)
				var second = parseInt(item._p.split(",")[0]%60)
				min = min>9?min:"0"+min
				second = second>9?second:"0"+second
				var BSduration = min + ":" + second
				obj.sendData = DateFormat(parseInt(sendData))
				obj.BSduration = BSduration
				obj.BSdurationAll = parseInt(item._p.split(",")[0])
				obj.content = item.__text	
				BSdata.splice(0,0,obj)
			})
			return BSdata
		}

//同值只取其一
export function dataClassify(arr){
		var map = {},
	    	dest = [];
		for(var i = 0; i < arr.length; i++){
		    var ai = arr[i];
		    if(!map[ai.BSdurationAll]){
		        dest.push({
		            time: ai.BSdurationAll,
		            content: ai.content
		        });
		        map[ai.BSdurationAll] = ai;
		    }else{
		        for(var j = 0; j < dest.length; j++){
		            var dj = dest[j];
		            if(dj.BSdurationAll == ai.BSdurationAll){
		                dj.data.push(ai);
		                break;
		            }
		        }
		    }
		}
		return dest
}
