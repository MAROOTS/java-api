package com.maroots.backendecommerce.service;

import com.maroots.backendecommerce.model.Product;
import com.maroots.backendecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    public Optional<Product> getProductById(String id) {
        return productRepository.findById(id);
    }
    public List<Product>getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }
    public List<Product>searchProducts(String keyword) {
        return productRepository.findByNameContaining(keyword);
    }
    public  Product saveProduct(Product product) {
        return productRepository.save(product);
    }
    public void deleteProduct(String id) {
        productRepository.deleteById(id);
    }
}
