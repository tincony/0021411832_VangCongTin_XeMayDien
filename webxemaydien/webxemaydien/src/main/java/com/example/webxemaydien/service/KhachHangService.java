package com.example.webxemaydien.service;

import com.example.webxemaydien.entity.KhachHang;
import com.example.webxemaydien.repository.KhachHangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KhachHangService {

    @Autowired
    private KhachHangRepository khachHangRepository;

    public List<KhachHang> getAllKhachHang() {
        return khachHangRepository.findAll();
    }

    public KhachHang getKhachHangById(Long id) {
        return khachHangRepository.findById(id).orElse(null);
    }

    public KhachHang createKhachHang(KhachHang khachHang) {
        return khachHangRepository.save(khachHang);
    }

    public KhachHang updateKhachHang(Long id, KhachHang khachHang) {
        KhachHang existingKhachHang = khachHangRepository.findById(id).orElse(null);
        if (existingKhachHang != null) {
            existingKhachHang.setTenKhachHang(khachHang.getTenKhachHang());
            existingKhachHang.setDiaChi(khachHang.getDiaChi());
            existingKhachHang.setSoDienThoai(khachHang.getSoDienThoai());
            existingKhachHang.setEmail(khachHang.getEmail());
            return khachHangRepository.save(existingKhachHang);
        }
        return null;
    }

    public void deleteKhachHang(Long id) {
        khachHangRepository.deleteById(id);
    }
}
