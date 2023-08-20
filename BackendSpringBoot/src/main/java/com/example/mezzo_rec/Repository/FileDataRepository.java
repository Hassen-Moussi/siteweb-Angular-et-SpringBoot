package com.example.mezzo_rec.Repository;

import com.example.mezzo_rec.Entites.FileData;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FileDataRepository extends JpaRepository<FileData,Integer> {
    Optional<FileData> findByName(String fileName);
}
