
package com.occamsrazor.web.admin;

import java.util.Date;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	AdminDao adminDao;

	@Override
	public void register(Admin admin) {
		/*
		 * employNumber, passwd ,name , position, profile, email, phoneNumber,
		 * registerDate
		 */
		System.out.println(admin);
		admin.setEmployNumber(createEmployNumber());// 4가지 랜덤
		admin.setPasswd("1"); //
		admin.setRegisterDate(createCurrentDate());// 현재 날짜
		adminDao.insert(admin);

	}

	// 날짜
	private String createCurrentDate() {

		System.out.println(new SimpleDateFormat("yyyy-MM-dd-").format(LocalDate.now()));

		return new SimpleDateFormat("yyyy-MM-dd").format(new Date());

	}

	// 랜덤
	private String createEmployNumber() {

		String startNum = "";
		for (int i = 0; i < 4; i++) {
			startNum += (int) (Math.random() * 10);
		}
		return startNum;

	}

	@Override
	public List<Admin> list() {

		return adminDao.selectAll();
	}

	@Override
	public Admin findOne(String employNumber) {

		return adminDao.selectOne(employNumber);
	}

	@Override
	public void modify(Admin admin) {

		adminDao.update(admin);
	}

	@Override
	public void remove(Admin admin) {

		adminDao.delete(admin);
	}

	

}
