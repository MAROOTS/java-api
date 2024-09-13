package com.maroots.backendecommerce.service;

import com.maroots.backendecommerce.model.Category;
import com.maroots.backendecommerce.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }
}
