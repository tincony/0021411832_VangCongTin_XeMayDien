package com.example.webxemaydien.controller;

import com.example.webxemaydien.entity.TaiKhoan;
import com.example.webxemaydien.service.TaiKhoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/taikhoan")
@CrossOrigin(origins = { "http://localhost:3000" })
public class TaiKhoanController {

    @Autowired
    private TaiKhoanService taiKhoanService;

    // Phương thức đăng nhập
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody TaiKhoan loginData) {
        TaiKhoan taiKhoan = taiKhoanService.login(loginData.getTenTK(), loginData.getMatKhau());
        if (taiKhoan != null) {
            return ResponseEntity.ok(taiKhoan);
        } else {
            return ResponseEntity.status(401).body("Tên tài khoản hoặc mật khẩu không chính xác");
        }
    }

    // Phương thức kiểm tra vai trò Admin
    @GetMapping("/isAdmin/{id}")
    public ResponseEntity<Boolean> isAdmin(@PathVariable Long id) {
        boolean isAdmin = taiKhoanService.isAdmin(id);
        return ResponseEntity.ok(isAdmin);
    }

    // Các phương thức CRUD hiện tại
    @GetMapping
    public List<TaiKhoan> getAllTaiKhoan() {
        return taiKhoanService.getAllTaiKhoan();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaiKhoan> getTaiKhoanById(@PathVariable Long id) {
        TaiKhoan taiKhoan = taiKhoanService.getTaiKhoanById(id);
        if (taiKhoan != null) {
            return ResponseEntity.ok(taiKhoan);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public TaiKhoan createTaiKhoan(@RequestBody TaiKhoan taiKhoan) {
        return taiKhoanService.createTaiKhoan(taiKhoan);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TaiKhoan> updateTaiKhoan(@PathVariable Long id, @RequestBody TaiKhoan taiKhoan) {
        TaiKhoan updatedTaiKhoan = taiKhoanService.updateTaiKhoan(id, taiKhoan);
        return ResponseEntity.ok(updatedTaiKhoan);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTaiKhoan(@PathVariable Long id) {
        taiKhoanService.deleteTaiKhoan(id);
        return ResponseEntity.noContent().build();
    }
}
