package com.example.webxemaydien.service;

import com.example.webxemaydien.entity.TrangThaiDH;
import com.example.webxemaydien.repository.TrangThaiDHRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrangThaiDHService {

    @Autowired
    private TrangThaiDHRepository trangThaiDHRepository;

    public List<TrangThaiDH> getAllTrangThaiDH() {
        return trangThaiDHRepository.findAll();
    }

    public TrangThaiDH getTrangThaiDHById(Long id) {
        return trangThaiDHRepository.findById(id).orElse(null);
    }

    public TrangThaiDH createTrangThaiDH(TrangThaiDH trangThaiDH) {
        return trangThaiDHRepository.save(trangThaiDH);
    }

    public void deleteTrangThaiDH(Long id) {
        trangThaiDHRepository.deleteById(id);
    }
}
