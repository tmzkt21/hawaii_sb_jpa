package com.occamsrazor.web.Item;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/items")
public class ItemController {
	@Autowired ItemService itemService;
	
	@GetMapping("")
	public List<Item> list(){
		System.out.println("컨트롤러");
		return itemService.findAll();
	}

}
