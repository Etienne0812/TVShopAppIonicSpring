package com.etisvita.tvshop.entity.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "tvs")
public class TV implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int id;
	
	@Column
	
	private String model;
	
	@Column 
	
	private String brand;
	
	@Column
	
	private int price;

	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public TV(int id, String model, String brand, int price) {
		super();
		this.id = id;
		this.model = model;
		this.brand = brand;
		this.price = price;
	} 
	
	public TV() {
		
	}
	
	
}
