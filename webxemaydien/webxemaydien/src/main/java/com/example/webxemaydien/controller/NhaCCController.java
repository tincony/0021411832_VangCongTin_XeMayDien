package com.example.webxemaydien.controller;

import com.example.webxemaydien.entity.NhaCC;
import com.example.webxemaydien.service.NhaCCService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/nhacc")
@CrossOrigin(origins = { "http://localhost:3000"})
public class NhaCCController {

    @Autowired
    private NhaCCService nhaCCService;

    @GetMapping
    public List<NhaCC> getAllNhaCC() {
        return nhaCCService.getAllNhaCC();
    }

    @GetMapping("/{id}")
    public ResponseEntity<NhaCC> getNhaCCById(@PathVariable Long id) {
        NhaCC nhaCC = nhaCCService.getNhaCCById(id);
        if (nhaCC != null) {
            return ResponseEntity.ok(nhaCC);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public NhaCC createNhaCC(@RequestBody NhaCC nhaCC) {
        return nhaCCService.createNhaCC(nhaCC);
    }

    @PutMapping("/{id}")
    public ResponseEntity<NhaCC> updateNhaCC(@PathVariable Long id, @RequestBody NhaCC updatedNhaCC) {
        NhaCC existingNhaCC = nhaCCService.getNhaCCById(id);
        if (existingNhaCC != null) {
            existingNhaCC.setTenNhaCungCap(updatedNhaCC.getTenNhaCungCap());
            existingNhaCC.setDiaChi(updatedNhaCC.getDiaChi());
            existingNhaCC.setSoDienThoai(updatedNhaCC.getSoDienThoai());
            existingNhaCC.setEmail(updatedNhaCC.getEmail());
            nhaCCService.createNhaCC(existingNhaCC); // Lưu lại thay đổi
            return ResponseEntity.ok(existingNhaCC);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNhaCC(@PathVariable Long id) {
        if (nhaCCService.getNhaCCById(id) == null) {
            return ResponseEntity.notFound().build(); // Trả về 404 nếu không tìm thấy
        }
        nhaCCService.deleteNhaCC(id);
        return ResponseEntity.noContent().build();
    }
}
