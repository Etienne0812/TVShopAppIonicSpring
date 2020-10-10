package com.etisvita.tvshop.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.etisvita.tvshop.entity.models.TV;

public interface ITVDao extends CrudRepository<TV, Integer> {

	
	
}