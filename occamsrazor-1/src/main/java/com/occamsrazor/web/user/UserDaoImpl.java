package com.occamsrazor.web.user;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;


import com.occamsrazor.web.util.Data;

@Repository

public class UserDaoImpl implements UserDao{

	

	@Override
	public List<User> selectall() {
		List<User> list = new ArrayList<>();
		List<String> temp = new ArrayList<>(); 
		try {
			File file = new File(Data.ADMIN_PATH + "userlist.csv");
			BufferedReader reader = new BufferedReader(new FileReader(file));
			String message ="";
			while((message = reader.readLine())!=null) {
				temp.add(message);
				
			}
			reader.close();
			
		} catch (Exception e) {
			System.out.println("에러");
		}
		User u = null;
		for (int i = 0; i < temp.size(); i++) {
			 u = new User();
			 String[] arr =temp.get(i).split(",");
			
			 
			 /*userid,passwd,name,ssn, addr,profile, email, phoneNumber, registerDate*/
				u.setUserid(arr[0]);
				u.setPasswd(arr[1]);
				u.setName(arr[2]);
				u.setSsn(arr[3]);
				u.setAddr(arr[4]);
				u.setProfile(arr[5]);
				u.setEmail(arr[6]);
				u.setPhoneNumber(arr[7]);
				u.setRegisterDate(arr[8]);
				list.add(u);
		}
		
		
		
		
		return list;
	}



}
