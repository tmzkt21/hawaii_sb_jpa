package com.occamsrazor.web.Item;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImpl implements ItemService{
	@Autowired ItemDao itemDao;

	@Override
	public List<Item> findAll() {
		System.out.println("서비스임플");
		return itemDao.selectAll();
	}

}
