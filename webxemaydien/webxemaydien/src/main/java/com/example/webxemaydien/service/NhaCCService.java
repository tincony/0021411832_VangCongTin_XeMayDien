package com.example.webxemaydien.service;

import com.example.webxemaydien.entity.NhaCC;
import com.example.webxemaydien.repository.NhaCCRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NhaCCService {

    @Autowired
    private NhaCCRepository nhaCCRepository;

    public List<NhaCC> getAllNhaCC() {
        return nhaCCRepository.findAll();
    }

    public NhaCC getNhaCCById(Long id) {
        return nhaCCRepository.findById(id).orElse(null);
    }

    public NhaCC createNhaCC(NhaCC nhaCC) {
        return nhaCCRepository.save(nhaCC);
    }

    public void deleteNhaCC(Long id) {
        nhaCCRepository.deleteById(id);
    }
}
