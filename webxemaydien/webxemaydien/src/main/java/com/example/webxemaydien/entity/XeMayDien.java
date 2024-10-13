package com.example.webxemaydien.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "XeMayDien")
public class XeMayDien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idXeMayDien;

    @Column(length = 100)
    private String tenXeMD;

    @Column(columnDefinition = "TEXT")
    private String hinhAnh; // Lưu đường dẫn URL đến hình ảnh

    @Column
    private double gia;

    private int soLuong;

    @Column(length = 500)
    private String moTa;

    @ManyToOne
    @JoinColumn(name = "idNhaCungCap")
    private NhaCC nhaCungCap;
}
