"use strict"

var admin = admin || {}

admin = (() => {
	const WHEN_ERROR = `호출하는 JS 파일을 찾지 못했습니다.`
	let user_vue
	let init = () => {
		user_vue = `/resources/vue/user_vue.js`
		onCreate()
	}
	let onCreate = () => {
		$.when(
			$.getScript(user_vue)
		).done(()=>{
			setContentView()
			$.getJSON('/users', d => {
				$('#total_count').text('총회원수  : '+d.length)
				$.each(d, (i, j) => {
					$(`<tr>
	                        	<td>
	                                <span>${i+1}</span>
	                            </td>
	                            <td>
	                                <span>${j.userid}</span>
	                            </td>
	                            <td>
	                                <span id="user_`+(i+1)+`"></span>
	                            </td>
	                             <td>
	                                <span>${j.ssn}</span>
	                            </td>
	                           <td>
	                                <span>${j.email}</span>
	                            </td>
	                            <td>
	                                <span>${j.phoneNumber}</span>
	                            </td>
	                            <td>
	                                <span>${j.registerDate}</span>
	                            </td>
	                            
	                        </tr>`).appendTo('#userData')
	                        
                        $(`<a>${j.name}</a>`)
                        .css({cursor: 'pointer',color: 'blue'})
                        .appendTo("#user_"+(i+1))
                        .click(e => {
                        	$('#userData').empty()
                        	$(userVue.detail())
                        	.appendTo('#userData')
                        	  $.getJSON(`/users/${j.userid}`, d => {
                        		  	$('#userId').text(d.userid)
                        		  	$('#userName').text(d.userName)
	                        		$('#userSSN').text(d.userSSN)
	                        		$('#userAddr').text(d.userAddr)
	                        		$('#userEmail').text(d.userEmail)
	                        		$('#userPhoneNumber').text(d.userPhoneNumber)
	                        		$('#registerDate').text(d.registerDate)
                        	 })
                        	
                        	
	               })
				}) // each
			}) // getJSON
			
		}).fail(()=>{
			alert(WHEN_ERROR)
		})
		
	}
	let setContentView = () => {
		$('#userData tr').first().css({'background-color':'yellow'})
	}
	return {init}
	
})()
