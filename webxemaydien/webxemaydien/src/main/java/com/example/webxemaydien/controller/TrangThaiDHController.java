package com.example.webxemaydien.controller;

import com.example.webxemaydien.entity.TrangThaiDH;
import com.example.webxemaydien.service.TrangThaiDHService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trangthaidonhang")
@CrossOrigin(origins = { "http://localhost:3000"})
public class TrangThaiDHController {

    @Autowired
    private TrangThaiDHService trangThaiDHService;

    @GetMapping
    public List<TrangThaiDH> getAllTrangThaiDH() {
        return trangThaiDHService.getAllTrangThaiDH();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TrangThaiDH> getTrangThaiDHById(@PathVariable Long id) {
        TrangThaiDH trangThaiDH = trangThaiDHService.getTrangThaiDHById(id);
        if (trangThaiDH != null) {
            return ResponseEntity.ok(trangThaiDH);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public TrangThaiDH createTrangThaiDH(@RequestBody TrangThaiDH trangThaiDH) {
        return trangThaiDHService.createTrangThaiDH(trangThaiDH);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTrangThaiDH(@PathVariable Long id) {
        trangThaiDHService.deleteTrangThaiDH(id);
        return ResponseEntity.noContent().build();
    }
}
