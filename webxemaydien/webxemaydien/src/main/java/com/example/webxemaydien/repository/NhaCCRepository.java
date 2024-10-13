package com.example.webxemaydien.repository;

import com.example.webxemaydien.entity.NhaCC;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NhaCCRepository extends JpaRepository<NhaCC, Long> {
}
