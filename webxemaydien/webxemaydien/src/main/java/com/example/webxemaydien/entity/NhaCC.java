package com.example.webxemaydien.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "NhaCC")
public class NhaCC {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idNhaCungCap;

    @Column(nullable = false, length = 100)
    private String tenNhaCungCap;

    @Column(length = 200)
    private String diaChi;

    @Column(length = 10)
    private String soDienThoai;

    @Column(length = 100)
    private String email;
}
