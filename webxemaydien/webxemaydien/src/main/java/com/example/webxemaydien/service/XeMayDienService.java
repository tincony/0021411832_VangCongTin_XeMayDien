package com.example.webxemaydien.service;

import com.example.webxemaydien.entity.XeMayDien;
import com.example.webxemaydien.repository.XeMayDienRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class XeMayDienService {

    @Autowired
    private XeMayDienRepository xeMayDienRepository;

    public List<XeMayDien> getAllXeMayDien() {
        return xeMayDienRepository.findAll();
    }

    public XeMayDien getXeMayDienById(Long id) {
        return xeMayDienRepository.findById(id).orElse(null);
    }

    public XeMayDien createXeMayDien(XeMayDien xeMayDien) {
        return xeMayDienRepository.save(xeMayDien);
    }

    public void deleteXeMayDien(Long id) {
        xeMayDienRepository.deleteById(id);
    }
}
