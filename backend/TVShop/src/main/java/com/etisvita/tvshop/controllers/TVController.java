package com.etisvita.tvshop.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etisvita.tvshop.entity.models.TV;
import com.etisvita.tvshop.entity.services.ITVService;

@CrossOrigin
@RestController
public class TVController {
	@Autowired
	ITVService TVService;
	
	@CrossOrigin
	@GetMapping("/api/tvs")
	private List<TV> getAll(){
		return TVService.getAll();
	}
	
	@GetMapping("/api/tvs/{id}")
	private TV findById(@PathVariable(value = "id") int id) {
		return TVService.findById(id);
	}
	
	@PostMapping("/api/tvs")
	private void addTV(TV tv) {
		TVService.addTV(tv);
	}
	
	
	@DeleteMapping("/api/tvs/{id}")
		private void deleteBicycle(@PathVariable(value = "id")int id) {
			TVService.deleteTV(id);
		}
	
	@PutMapping("/api/tvs/{id}")
	private void updateTV(@PathVariable(value = "id")int id, TV tv) {
		TVService.updateTV(id, tv);
	}
}
