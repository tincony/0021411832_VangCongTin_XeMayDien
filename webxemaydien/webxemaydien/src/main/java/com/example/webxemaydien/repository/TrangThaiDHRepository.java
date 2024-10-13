package com.example.webxemaydien.repository;

import com.example.webxemaydien.entity.TrangThaiDH;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrangThaiDHRepository extends JpaRepository<TrangThaiDH, Long> {
}
