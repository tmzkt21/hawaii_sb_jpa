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
                                <span>${j.itemid} </span>
                            </td>
                            
                            <td>
                                 <span>${j.itemName} </span>
                            </td>
                            
                             <td>
                                <span>${j.takenDate} </span>
                            </td>
                            
                           <td>
                               <span>${j.category} </span>
                            </td>
                            
                            <td>
                               	<span>${j.takenPostion} </span>
                            </td>
                            
                         
                        </tr>`).appendTo('#items')
                    	
                    })
			    })
			})
			
			$('#admin').click(e=>{
				e.preventDefault()
				$('#content').empty()
				$('#content').html(`
				<table id="admins">
				<tr>
                    		<td>
                                <span>순번</span>
                            </td>
                            
                            <td>
                                 <span>비밀번호</span>
                            </td>
                            
                             <td>
                                <span>이름</span>
                            </td>
                            
                           <td>
                               <span>직급</span>
                            </td>
                            
                            <td>
                               	<span>프로필</span>
                            </td>
                             <td>
                               	<span>이메일</span>
                            </td>
                             <td>
                               	<span>전화번호</span>
                            </td>
                             <td>
                               	<span>등록날짜</span>
                            </td>
                            
                         
                        </tr>`)
                        
                        $.getJSON(`/admins`, d=>{
                        	$.each(d, (i ,j)=>{
                        		alert('겟제이슨')
                        		$(`<tr>
                    		<td>
                                <span>{j.employNumber}</span>
                            </td>
                            
                            <td>
                                 <span>{j.passwd}</span>
                            </td>
                            
                             <td>
                                <span>{j.name}</span>
                            </td>
                            
                           <td>
                               <span>{j.position}</span>
                            </td>
                            
                            <td>
                               	<span>{j.profile}</span>
                            </td>
                             <td>
                               	<span>{j.email}</span>
                            </td>
                             <td>
                               	<span>{j.phoneNumber}</span>
                            </td>
                             <td>
                               	<span>{j.registerDate}</span>
                            </td>
                            
                         
                        </tr>`).appendTo('#admins')
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