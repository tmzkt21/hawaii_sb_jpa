package com.occamsrazor.web.user;

import java.util.List;

import com.occamsrazor.web.util.Messenger;

public interface UserService {

	

	public List<User> findAll();

	public User findOne(String userid);

  


	
	

}