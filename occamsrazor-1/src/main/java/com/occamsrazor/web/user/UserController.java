 package com.occamsrazor.web.user;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.occamsrazor.web.admin.Admin;
import com.occamsrazor.web.util.Messenger;


@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired UserService userservice;
	
	

	@GetMapping("")
	public List<User> list() {
		
		return userservice.findAll();
	}
	



	
	
	
}

