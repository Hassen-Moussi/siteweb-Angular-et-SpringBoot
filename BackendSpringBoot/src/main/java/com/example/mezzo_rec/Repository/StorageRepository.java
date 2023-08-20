package com.example.mezzo_rec.Repository;

import com.example.mezzo_rec.Entites.ImageData;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StorageRepository extends JpaRepository<ImageData,Long> {


    Optional<ImageData> findByName(String fileName);
}
