package com.occamsrazor.web.user;

import java.util.List;

public interface UserDao {

	

	public List<User> selectall();

	public User selectOne(String userid);

	

}
