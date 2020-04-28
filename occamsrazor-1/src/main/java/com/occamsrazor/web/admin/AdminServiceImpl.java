package com.occamsrazor.web.admin;

import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService{
	private Admin[] members;
	private int count;
	
	public AdminServiceImpl() {
		members = new Admin[5];
		count = 0;
	}

	@Override
	public void add(Admin member) {
		members[count] = member;
		count++;
	}

	@Override
	public Admin[] list(Admin member) {
		return members;
	}

	@Override
	public Admin detail(String userid) {
		Admin member = null;
		for(int i=0; i<count; i++) {
			if(userid.equals(members[i].getUserid())) {
				member = members[i];
			}
		}
		return member;
	}

	@Override
	public int count() {
		return count;
	}

	@Override
	public void update(Admin member) {
		for(int i=0; i<count; i++) {
			if(member.getUserid().equals(members[i].getUserid())) {
				members[i].setPasswd(member.getPasswd());
				break;
			}
		}
	}

	@Override
	public void delete(Admin member) {
		for(int i=0; i<count; i++) {
			if(member.getUserid().equals(members[i].getUserid())
					&&
					member.getPasswd().equals(members[i].getPasswd())) {
				members[i] = members[count-1];
				members[count-1]=null;
				count--;
			}
		}
	}

	@Override
	public boolean login(Admin member) {
		boolean ok = false;
		for(int i=0; i<count; i++) {
			if(member.getUserid().equals(members[i].getUserid())
					&&
					member.getPasswd().equals(members[i].getPasswd())) {
				ok = true;
				break;
			}
		}
		return ok;
	}
	
}