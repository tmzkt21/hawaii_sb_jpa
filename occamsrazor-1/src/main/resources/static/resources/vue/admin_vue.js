"use strict"

const adminVue ={
		join:() => {
			return` <table id="kcdc">
			 <td id="content" colspan="4">
                <table id="admin" style="width: 80%; height:80%; margin: 0 auto">
			    <tr style="width: 80%;height: 50px;">
			      <td rowspan="4">
			        <img src="https://u5b8t9w6.stackpathcdn.com/wp-content/uploads/2014/12/profile-default-300x242.jpg">
			      </td>
			      <td style="height: 20%">
			        <label>이름</label>
			      </td>
			      <td>
			        <input id="name" type="text" />
			      </td>
			    </tr>  
			    <tr style="height: 20%">
			      <td >
			        <label>직급</label>
			      </td>
			      <td>
			        <input id="position" type="text" />
			      </td>
			    </tr>
			    <tr style="height: 20%">
			      <td>
			        <label>이메일</label>
			      </td>
			      <td>
			        <input id="email" type="text" />
			      </td>
			    </tr>
			    <tr style="height: 20%">
			      <td>
			        <label>전화번호</label>
			      </td>
			      <td>
			        <input id="phoneNumber" type="text" />
			      </td>
			    </tr>
			    <tr style="height: 20%">
			      <td colspan="3">
			        <input id="admin_register" type="button" value="등록하기" style="width: 200px; height: 100px;font-size: 30px;"/>
			        
			        <input id="admin_cancel" type="button" value="취소하기" style="width: 200px; height: 100px;margin-left: 50px;font-size: 30px;"/>
			      </td>
			    </tr>
			  </table>
          </td>
        </tr>
    </table> `
			
			
		}
		
		login:() =>{
			return`
			<article>
			<form id = " login_box">
			<label>ID</laber><br>
			<form id= "userid" type="text"><br>
			<label>PASSWD</lavel><br>
			<form  id="passwd" type="text"><br>
			</form>
			</article>
			
			
			
		}
		
}