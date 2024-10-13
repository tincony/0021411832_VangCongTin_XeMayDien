package com.example.webxemaydien.repository;

import com.example.webxemaydien.entity.XeMayDien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface XeMayDienRepository extends JpaRepository<XeMayDien, Long> {
}
