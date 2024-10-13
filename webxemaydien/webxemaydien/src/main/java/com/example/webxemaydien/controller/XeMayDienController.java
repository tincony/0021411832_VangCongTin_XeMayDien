package com.example.webxemaydien.controller;

import com.example.webxemaydien.entity.XeMayDien;
import com.example.webxemaydien.service.XeMayDienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/xemaydien")
@CrossOrigin(origins = { "http://localhost:3000" })
public class XeMayDienController {

    @Autowired
    private XeMayDienService xeMayDienService;

    @GetMapping
    public List<XeMayDien> getAllXeMayDien() {
        return xeMayDienService.getAllXeMayDien();
    }

    @GetMapping("/{id}")
    public ResponseEntity<XeMayDien> getXeMayDienById(@PathVariable Long id) {
        XeMayDien xeMayDien = xeMayDienService.getXeMayDienById(id);
        if (xeMayDien != null) {
            return ResponseEntity.ok(xeMayDien);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public XeMayDien createXeMayDien(@RequestBody XeMayDien xeMayDien) {
        return xeMayDienService.createXeMayDien(xeMayDien);
    }

    @PutMapping("/{id}")
    public ResponseEntity<XeMayDien> updateXeMayDien(@PathVariable Long id, @RequestBody XeMayDien updatedXeMayDien) {
        XeMayDien existingXeMayDien = xeMayDienService.getXeMayDienById(id);
        if (existingXeMayDien != null) {
            existingXeMayDien.setTenXeMD(updatedXeMayDien.getTenXeMD());
            existingXeMayDien.setHinhAnh(updatedXeMayDien.getHinhAnh());
            existingXeMayDien.setGia(updatedXeMayDien.getGia());
            existingXeMayDien.setSoLuong(updatedXeMayDien.getSoLuong());
            existingXeMayDien.setMoTa(updatedXeMayDien.getMoTa());
            existingXeMayDien.setNhaCungCap(updatedXeMayDien.getNhaCungCap());

            xeMayDienService.createXeMayDien(existingXeMayDien);
            return ResponseEntity.ok(existingXeMayDien);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteXeMayDien(@PathVariable Long id) {
        xeMayDienService.deleteXeMayDien(id);
        return ResponseEntity.noContent().build();
    }
}
