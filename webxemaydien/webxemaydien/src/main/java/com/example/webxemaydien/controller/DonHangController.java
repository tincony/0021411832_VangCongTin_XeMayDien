package com.example.webxemaydien.controller;

import com.example.webxemaydien.entity.DonHang;
import com.example.webxemaydien.service.DonHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/donhang")
@CrossOrigin(origins = { "http://localhost:3000"})
public class DonHangController {

    @Autowired
    private DonHangService donHangService;

    @GetMapping
    public List<DonHang> getAllDonHang() {
        return donHangService.getAllDonHang();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DonHang> getDonHangById(@PathVariable Long id) {
        DonHang donHang = donHangService.getDonHangById(id);
        if (donHang != null) {
            return ResponseEntity.ok(donHang);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public DonHang createDonHang(@RequestBody DonHang donHang) {
        return donHangService.createDonHang(donHang);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DonHang> updateDonHang(@PathVariable Long id, @RequestBody DonHang donHang) {
        DonHang updatedDonHang = donHangService.updateDonHang(id, donHang);
        if (updatedDonHang != null) {
            return ResponseEntity.ok(updatedDonHang);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDonHang(@PathVariable Long id) {
        donHangService.deleteDonHang(id);
        return ResponseEntity.noContent().build();
    }
}
