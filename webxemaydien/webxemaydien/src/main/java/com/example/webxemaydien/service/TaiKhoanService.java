package com.example.webxemaydien.service;

import com.example.webxemaydien.entity.TaiKhoan;
import com.example.webxemaydien.repository.TaiKhoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TaiKhoanService {

    @Autowired
    private TaiKhoanRepository taiKhoanRepository;

    // Đăng nhập
    public TaiKhoan login(String tenTK, String matKhau) {
        return taiKhoanRepository.findByTenTKAndMatKhau(tenTK, matKhau);
    }

    // Kiểm tra vai trò admin
    public boolean isAdmin(Long id) {
        TaiKhoan taiKhoan = taiKhoanRepository.findById(id).orElse(null);
        return taiKhoan != null && "admin".equals(taiKhoan.getVaiTro());
    }

    // Các phương thức CRUD hiện tại
    public List<TaiKhoan> getAllTaiKhoan() {
        return taiKhoanRepository.findAll();
    }

    public TaiKhoan getTaiKhoanById(Long id) {
        return taiKhoanRepository.findById(id).orElse(null);
    }

    public TaiKhoan createTaiKhoan(TaiKhoan taiKhoan) {
        return taiKhoanRepository.save(taiKhoan);
    }

    public TaiKhoan updateTaiKhoan(Long id, TaiKhoan taiKhoan) {
        TaiKhoan existingTaiKhoan = taiKhoanRepository.findById(id).orElse(null);
        if (existingTaiKhoan != null) {
            existingTaiKhoan.setTenTK(taiKhoan.getTenTK());
            existingTaiKhoan.setMatKhau(taiKhoan.getMatKhau());
            existingTaiKhoan.setEmail(taiKhoan.getEmail());
            existingTaiKhoan.setVaiTro(taiKhoan.getVaiTro());
            return taiKhoanRepository.save(existingTaiKhoan);
        }
        return null;
    }

    public void deleteTaiKhoan(Long id) {
        taiKhoanRepository.deleteById(id);
    }
}
