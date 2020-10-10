package com.etisvita.tvshop.entity.services;

import java.util.List;

import com.etisvita.tvshop.entity.models.TV;

public interface ITVService {
	
	List<TV> getAll();

	TV findById(int id);

	void addTV(TV tv);

	void deleteTV(int id);

	void updateTV(int id, TV tv);
	
}
