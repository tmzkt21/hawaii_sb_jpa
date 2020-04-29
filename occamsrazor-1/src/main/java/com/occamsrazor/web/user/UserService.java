package com.occamsrazor.web.user;

import java.util.List;

import com.occamsrazor.web.util.Messenger;

public interface UserService {

	public void post(User user);

	public List<User> list();

	public User detail(String userid);

	public void update(User user);

	public void delete(User user);

  


	
	

}