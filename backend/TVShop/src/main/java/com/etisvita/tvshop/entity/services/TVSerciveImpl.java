package com.etisvita.tvshop.entity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etisvita.tvshop.entity.dao.ITVDao;
import com.etisvita.tvshop.entity.models.TV;
import com.etisvita.tvshop.entity.services.ITVService;


@Service
public class TVSerciveImpl implements ITVService{
	
	@Autowired
	ITVDao TVDao;
	
	@Override
	public List<TV> getAll() {
        // TODO Auto-generated method stub
		return (List<TV>) TVDao.findAll();
    }



	@Override
	public void addTV(TV tv) {
		// TODO Auto-generated method stub
		TVDao.save(tv);
	}

	@Override
	public void deleteTV(int id) {
		// TODO Auto-generated method stub
	TVDao.deleteById(id);
	}

	@Override
	public void updateTV(int id, TV tv) {
		// TODO Auto-generated method stub
        Optional<TV> t = TVDao.findById(id);
		
		if (t.isPresent()) {
			tv.setId(id);
			TVDao.save(tv);
		}
	}
	
	
	@Override
	public TV findById(int id) {
		// TODO Auto-generated method stub
		 Optional<TV> t = TVDao.findById(id);
		 if (t.isPresent()) {
			 return t.get();
		 }
		return null;
	}



	



	
}