package com.example.webxemaydien.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "TrangThaiDH")
public class TrangThaiDH {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTrangThai;

    @Column(length = 20)
    private String ten;
}
