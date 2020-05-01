"user strict"

var admin = admin|| {} //네임스페이스

admin = (()=>{ // 이파이패턴
	let init = () => {
		alert('1')
		onCreat()
	}
	let onCreat = () => {
		alert('2')
		setContentView()
	}
	let setContentView = () => {
		alert('3')
	}
	return {init}
})()