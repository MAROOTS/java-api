package com.maroots.backendecommerce.repository;

import com.maroots.backendecommerce.model.Category;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CategoryRepository extends MongoRepository<Category,String> {
}
