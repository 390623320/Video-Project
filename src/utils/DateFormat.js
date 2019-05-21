Date.prototype.toLocaleString = function() {
			    function addZero(num) {
			        if(num<10)
			            return "0" + num;
			        return num;
			    }
			    return addZero(this.getMonth() + 1) + "-" + addZero(this.getDate()) + " " +
			        addZero(this.getHours()) + ":" + addZero(this.getMinutes());
			};
export function DateFormat(timeparam){
			var date = new Date(timeparam).toLocaleString();
			return date
		}