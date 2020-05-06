package com.occamsrazor.web.Item;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.occamsrazor.web.util.Data;

@Repository
public class ItemDaoImpl implements ItemDao{

	@Override
	public List<Item> selectAll() {
		List<Item> items = new ArrayList<>();
		List<String> temp = new ArrayList<>();
		try {
			BufferedReader reader = new BufferedReader(new FileReader(new File(Data.ITEMS.toString())));
			String message = "";
			while((message = reader.readLine()) != null) {
				temp.add(message);
			}
			reader.close();
		} catch (Exception e) {
			System.out.println("List<Item> selectAll() Error !!");
			e.printStackTrace();
		}
		Item i = null;
		for(String s : temp) {
			i = new Item();
			String[] arr = s.split(",");
			i.setItemid(arr[0]);
			i.setItemName(arr[1]);
			i.setTakenDate(arr[2]);
			i.setCategory(arr[3]);
			i.setTakenPostion(arr[4]);
			items.add(i);
		}
		return items;
	}

}