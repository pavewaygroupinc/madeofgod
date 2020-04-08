import Vue from 'vue'

import moment from 'moment'

export function timeAgo(time) {
  const timeDiff = moment(time).fromNow()

  return timeDiff
} 

export function minutes(value) { 
   	if (!value || typeof value !== "number") return "00:00"
	let min = parseInt(value / 60), sec = parseInt(value % 60)
	min = min < 10 ? "0" + min : min
	sec = sec < 10 ? "0" + sec : sec
	value = min + ":" + sec
	return value 
}

export function formatSecondsAsTime(secs, format) {
  var hr  = Math.floor(secs / 3600);
  var min = Math.floor((secs - (hr * 3600))/60);
  var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

  if (min < 10){ 
    min = "0" + min; 
  }
  if (sec < 10){ 
    sec  = "0" + sec;
  }

  return min + ':' + sec;
}

const filters = { timeAgo, minutes, formatSecondsAsTime } 

export default Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})