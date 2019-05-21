import axios from 'axios'

const http = function(url,params){
			return axios(url,params).then(response =>{
							return response.data
							},err =>{
								alert(err)
							})
}

export default http
