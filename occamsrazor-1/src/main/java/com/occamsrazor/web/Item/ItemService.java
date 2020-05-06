package com.occamsrazor.web.Item;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
@Component
public interface ItemService {

	public List<Item> findAll();

	

}
