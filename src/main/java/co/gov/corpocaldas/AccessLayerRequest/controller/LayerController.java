package co.gov.corpocaldas.AccessLayerRequest.controller;

import co.gov.corpocaldas.AccessLayerRequest.entity.Layer;
import co.gov.corpocaldas.AccessLayerRequest.service.LayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/layers")
public class LayerController {

    @Autowired
    private LayerService layerService;

    @PostMapping()
    public ResponseEntity<Layer> saveLayer(@RequestBody Layer layer) {
        return new ResponseEntity<>(layerService.saveLayer(layer), HttpStatus.CREATED);
    }

    @PutMapping("/{layerId}")
    public ResponseEntity<Layer> updateLayer(@PathVariable("layerId") int layerId, @RequestBody Layer layer) {
        return new ResponseEntity<>(layerService.updateLayer(layerId, layer), HttpStatus.ACCEPTED);
    }

    @GetMapping()
    public ResponseEntity<List<Layer>> getLayers() {
        return new ResponseEntity<>(layerService.getLayers(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Layer> getLayer(@PathVariable("id") int id) {
        return new ResponseEntity<>(layerService.getLayer(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteLayer(@PathVariable("id") int id) {
        return new ResponseEntity<>(layerService.deleteLayer(id), HttpStatus.OK);
    }
}
