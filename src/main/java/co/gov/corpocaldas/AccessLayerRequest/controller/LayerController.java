package co.gov.corpocaldas.AccessLayerRequest.controller;

import co.gov.corpocaldas.AccessLayerRequest.dto.LayerDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.service.LayerService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.base.url}/layers")
@Api
public class LayerController {

    @Autowired
    private LayerService layerService;

    /**
     * Endpoint that persist the information of a layer.
     * @param layer Information of the layer
     * @return Response entity with status and body generated by request
     */
    @ApiOperation(value = "Endpoint that persist the information of a layer", response = LayerDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "The information of the layer was persisted successfully"),
            @ApiResponse(code = 400, message = "The information of the layer contains error")
    })
    @PostMapping()
    public ResponseEntity<LayerDto> saveLayer(@RequestHeader("authorization-token") String token,
                                              @RequestHeader("authorization-user") int userId,
                                              @ApiParam(value = "Information of the layer", required = true)
                                               @RequestBody LayerDto layer) {
        return new ResponseEntity<>(layerService.saveLayer(token, userId, layer), HttpStatus.CREATED);
    }

    /**
     * Endpoint that update the information of an existent layer.
     * @param layerId Identifier of the layer to update
     * @param layer Updated information of the layer
     * @return Response entity with status and body generated by request
     */
    @ApiOperation(value = "Endpoint that update the information of an existent layer")
    @ApiResponses(value = {
            @ApiResponse(code = 202, message = "The layer has been updated successfully"),
            @ApiResponse(code = 404, message = "The information of the layer is invalidate or the identifier provided" +
                    " on the path mismatch with the information's identifier")
    })
    @PutMapping("/{layerId}")
    public ResponseEntity updateLayer(@RequestHeader("authorization-token") String token,
                                      @RequestHeader("authorization-user") int userId,
                                      @ApiParam(value = "Identifier of the layer to update", required = true)
                                          @PathVariable("layerId") int layerId,
                                      @ApiParam(value = "Updated information of the layer", required = true)
                                          @RequestBody LayerDto layer) {
        layerService.updateLayer(token, userId, layerId, layer);
        return ResponseEntity.noContent().build();
    }

    /**
     * Endpoint that returns all the layers registered.
     * @param name Value for name field search
     * @param workspace Value for workspace field search
     * @param accessGranted Value for access granted field search
     * @param visible Value for visibility field search
     * @param page Value for number page
     * @param size Quantity of elements returned into the page
     * @return Response entity with the layer obtained
     */
    @ApiOperation(value = "Endpoint that returns all the layers registered", response = PaginatorDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "All the layers was obtained successfully")
    })
    @GetMapping()
    public ResponseEntity<PaginatorDto> getLayers(
            @ApiParam(value = "Value for name field search") @RequestParam(value = "name", required = false) String name,
            @ApiParam(value = "Value for workspace field search") @RequestParam(value = "workspace", required = false) String workspace,
            @ApiParam(value = "Value for access granted field search") @RequestParam(value = "access_granted", required = false) Integer accessGranted,
            @ApiParam(value = "Value for visibility field search") @RequestParam(value = "visible", required = false) Boolean visible,
            @ApiParam(value = "Value for number page") @RequestParam(value = "page", defaultValue = "0") int page,
            @ApiParam(value = "Quantity of elements returned into the page") @RequestParam(value = "size", defaultValue = "10") int size) {
        return new ResponseEntity<>(layerService.getLayers(name, workspace, accessGranted, visible, page, size), HttpStatus.OK);
    }

    /**
     * Endpoint that returns the information of a specific layer for searching by its identifier.
     * @param id Identifier of the layer
     * @return Information of the layer associated to this identifier
     */
    @ApiOperation(value = "Endpoint that returns the information of a specific layer for searching by its identifier",
        response = LayerDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "The information of the layer was obtained successfully"),
            @ApiResponse(code = 404, message = "No layer was obtained")
    })
    @GetMapping("/{id}")
    public ResponseEntity<LayerDto> getLayer(@ApiParam(value = "Identifier of the layer", required = true)
                                              @PathVariable("id") int id) {
        return new ResponseEntity<>(layerService.getLayer(id), HttpStatus.OK);
    }

    /**
     * Endpoint that returns the information of a specific layer for searching by its name.
     * @param name Name of the layer
     * @return Information of the layer associated to this name
     */
    @ApiOperation(value = "Endpoint that returns the information of a specific layer for searching by its name",
            response = LayerDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "The information of the layer was obtained successfully"),
            @ApiResponse(code = 404, message = "No layer was obtained")
    })
    @GetMapping("/name/{name}")
    public ResponseEntity<LayerDto> getLayerByName(@ApiParam(value = "Name of the layer", required = true)
                                                    @PathVariable("name") String name) {
        return new ResponseEntity<>(layerService.getLayerByName(name), HttpStatus.OK);
    }

    /**
     * Endpoint that delete the information of a specific layer for searching by its identifier.
     * @param id Identifier of the layer
     * @return Response entity with the status of action
     */
    @ApiOperation(value = "Endpoint that delete the information of a specific layer for searching by its identifier")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "The information of the layer was deleted successfully"),
            @ApiResponse(code = 404, message = "No layer was found with this identifier")
    })
    @DeleteMapping("/{id}")
    public ResponseEntity deleteLayer(@ApiParam(value = "Identifier of the layer", required = true) @PathVariable("id") int id) {
        layerService.deleteLayer(id);
        return ResponseEntity.noContent().build();
    }
}
