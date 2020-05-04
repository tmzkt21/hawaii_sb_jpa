"use strict"

var user = user ||{}

  user = (()=>{
	  const WHEN_ERROR = '호출하는 js 파일을 찾지 못했습니다.'
		  let admin_vue
	let init = () => {
		admin_vue = '/resources/vue/admin_vue.js'
		onCreate()
	}
	let onCreate = () => {
		setContentView()
		$('#register_a').click(e=>{
		$('#content').empty()
		$('#content').html(adminVue.join())
		$(`<inpt type = " button"/>`)
		.attr({value:'등록'})
		.css({w})
		})
		
	}
	let setContentView = () => {
		
	}
	
	return {init}
	
})()