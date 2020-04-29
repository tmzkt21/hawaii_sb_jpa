package com.occamsrazor.web.user;

import java.util.List;

public interface UserDao {

	public void insert(User user);

	public List<User> selectall();

	public User selectone();

	public void update();

	public void delete();

}
