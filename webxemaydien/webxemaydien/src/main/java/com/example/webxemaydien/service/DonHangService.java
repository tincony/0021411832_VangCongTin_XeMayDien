package com.example.webxemaydien.service;

import com.example.webxemaydien.entity.DonHang;
import com.example.webxemaydien.repository.DonHangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonHangService {

    @Autowired
    private DonHangRepository donHangRepository;

    public List<DonHang> getAllDonHang() {
        return donHangRepository.findAll();
    }

    public DonHang getDonHangById(Long id) {
        return donHangRepository.findById(id).orElse(null);
    }

    public DonHang createDonHang(DonHang donHang) {
        return donHangRepository.save(donHang);
    }

    public DonHang updateDonHang(Long id, DonHang donHang) {
        if (donHangRepository.existsById(id)) {
            donHang.setIdDonHang(id); // Đảm bảo ID không thay đổi
            return donHangRepository.save(donHang);
        }
        return null; // Trả về null nếu không tìm thấy DonHang với ID đã cho
    }

    public void deleteDonHang(Long id) {
        donHangRepository.deleteById(id);
    }
}
