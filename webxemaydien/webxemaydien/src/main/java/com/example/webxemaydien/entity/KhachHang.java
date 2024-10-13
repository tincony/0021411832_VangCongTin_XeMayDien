package com.example.webxemaydien.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "KhachHang")
public class KhachHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idKhachHang;

    @Column(length = 100)
    private String tenKhachHang;

    @Column(length = 200)
    private String diaChi;

    @Column(length = 10)
    private String soDienThoai;

    @Column(length = 100)
    private String email;
}
