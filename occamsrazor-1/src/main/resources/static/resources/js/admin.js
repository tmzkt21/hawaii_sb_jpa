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
                       })	
	               })
				}) // each
			}) // getJSON
		$('#lost').click(e=>{
				e.preventDefault()
			$('#content').empty()
			$('#content').html(`<table id="items">
                        <tr>
                        
                            <td>
                                <span>분실물 </span>
                            </td>
                            
                            <td>
                                 <span>습득물품명</span>
                            </td>
                            
                             <td>
                                <span>습득물분류</span>
                            </td>
                            
                           <td>
                               <span>그외</span>
                            </td>
                            
                            <td>
                               	<span>습득위치(지하철)</span>
                            </td>
                            
                         
                        </tr>
                        
                    </table>`)
      
                    $.getJSON(`/items`,d=>{
                    $.each(d, (i, j)=>{
                    	$(` <tr>
                    		<td>
                                <span>${j.Number} </span>
                            </td>
                            
                            <td>
                                 <span>${j.Thing} </span>
                            </td>
                            
                             <td>
                                <span>${j.Date} </span>
                            </td>
                            
                           <td>
                               <span>${j.Besides} </span>
                            </td>
                            
                            <td>
                               	<span>${j.Train} </span>
                            </td>
                            
                         
                        </tr>`).appendTo('#items')
                    	
                    })
			    })
			})
			
		}).fail(()=>{
			alert(WHEN_ERROR)
		})
		
	}
	let setContentView = () => {
		$('#userData tr').first().css({'background-color':'yellow'})
	}
	return {init}
	
})()