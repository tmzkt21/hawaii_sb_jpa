package com.occamsrazor.web.user;

import java.io.BufferedReader;


import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.swing.JOptionPane;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.occamsrazor.web.util.Data;
import com.occamsrazor.web.util.Messenger;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired UserDao userDao;
	
	

	@Override
	public List<User> findAll() {
	
		
		return userDao.selectall();
	}



	@Override
	public User findOne(String userid) {

		return userDao.selectOne(userid);
	}




	
	
	


}