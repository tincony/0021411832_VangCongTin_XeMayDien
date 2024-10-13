package com.example.webxemaydien.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "TaiKhoan")
public class TaiKhoan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTaiKhoan;

    @Column(length = 50)
    private String tenTK;

    @Column(length = 100)
    private String matKhau; // Mật khẩu sẽ được mã hóa

    @Column(length = 100)
    private String email;

    @Column(length = 20)
    private String vaiTro; // Vai trò có thể là ADMIN hoặc USER
}
