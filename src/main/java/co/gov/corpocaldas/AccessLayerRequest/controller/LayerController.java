package co.gov.corpocaldas.AccessLayerRequest.controller;

import co.gov.corpocaldas.AccessLayerRequest.dto.LayerDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.service.LayerService;
import co.gov.corpocaldas.AccessLayerRequest.service.ValidateAccessService;
import co.gov.corpocaldas.AccessLayerRequest.service.util.LayerExcelExporter;
import co.gov.corpocaldas.AccessLayerRequest.service.util.LayerPdfExporter;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("${api.base.url}/layers")
@Api
public class LayerController {

    private final LayerService layerService;

    private final ValidateAccessService validateAccessService;

    public LayerController(LayerService layerService,
            ValidateAccessService validateAccessService) {
        this.layerService = layerService;
        this.validateAccessService = validateAccessService;
    }

    /**
     * Endpoint that persist the information of a layer.
     * @param token Access token
     * @param userId User identifier associated to access token
     * @param name Layer name
     * @param referenceName Layer reference name
     * @param idWorkspace Workspace identifier associated to layer
     * @param accessGranted Access granted associated to layer (1. Corpocaldas
     * info, 2. Another resources)
     * @param visible Determines if the layer is visible on the map
     * @param file JSON metadata file associated to the layer
     * @return Response entity with status and body generated by request
     */
    @ApiOperation(value = "Endpoint that persist the information of a layer",
            response = LayerDto.class)
    @ApiResponses(value = {
        @ApiResponse(code = 201, message = "The information of the layer was"
                + " persisted successfully"),
        @ApiResponse(code = 401, message = "Request not authenticated"),
        @ApiResponse(code = 400, message = "The information of the layer"
                + " contains error")
    })
    @PostMapping()
    public ResponseEntity<LayerDto> saveLayer(
            @ApiParam(value = "Access token", required = true) @RequestHeader(
                    value = "authorization-token", required = false) String token,
            @ApiParam(value = "User identifier associated to access token",
                    required = true)
            @RequestHeader(value = "authorization-user", required = false) Integer userId,
            @ApiParam(value = "Layer name", required = true)
            @RequestParam("name") String name, @RequestParam("reference_name") String referenceName,
            @ApiParam(value = "Workspace identifier associated to layer", required = true)
            @RequestParam("id_workspace") int idWorkspace,
            @ApiParam(value = "Access granted associated to layer (1. "
                    + "Corpocaldas info, 2. Another resources)", required = true)
            @RequestParam("access_granted") int accessGranted,
            @ApiParam(value = "Determines if the layer is visible on the map", required = true)
            @RequestParam("visible") boolean visible,
            @ApiParam(value = "JSON metadata file associated to the layer", required = true)
            @RequestParam("metadata") MultipartFile file) {
        validateAccessService.validateAccess(token, userId);
        return new ResponseEntity<>(layerService.saveLayer(null, name,
                referenceName, idWorkspace, accessGranted, visible, file),
                HttpStatus.CREATED);
    }

    /**
     * Endpoint that update the information of an existent layer.
     * @param token Access token
     * @param userId User identifier associated to access token
     * @param layerId Identifier of the layer to update
     * @param id Layer identifier
     * @param name Layer name
     * @param referenceName Layer reference name
     * @param idWorkspace Workspace identifier associated to layer
     * @param accessGranted Access granted associated to layer (1. Corpocaldas
     * info, 2. Another resources)
     * @param visible Determines if the layer is visible on the map
     * @param file JSON metadata file associated to the layer
     * @return Response entity with status and body generated by request
     */
    @ApiOperation(value = "Endpoint that update the information of an existent "
            + "layer")
    @ApiResponses(value = {
        @ApiResponse(code = 202, message = "The layer has been updated"
                + " successfully"),
        @ApiResponse(code = 401, message = "Request not authenticated"),
        @ApiResponse(code = 404, message = "The information of the layer is"
                + " invalidate or the identifier provided on the path mismatch"
                + " with the information's identifier")
    })
    @PutMapping("/{layerId}")
    public ResponseEntity updateLayer(
            @ApiParam(value = "Access token", required = true, readOnly = true)
            @RequestHeader(value = "authorization-token", required = false) String token,
            @ApiParam(value = "User identifier associated to access token", required = true)
            @RequestHeader(value = "authorization-user", required = false) Integer userId,
            @ApiParam(value = "Identifier of the layer to update", required = true)
            @PathVariable("layerId") int layerId,
            @ApiParam(value = "Layer identifier", required = true)
            @RequestParam("id") int id,
            @ApiParam(value = "Layer name", required = true)
            @RequestParam("name") String name,
            @ApiParam(value = "Layer reference name", required = true)
            @RequestParam("reference_name") String referenceName,
            @ApiParam(value = "Workspace identifier associated to layer", required = true)
            @RequestParam("id_workspace") int idWorkspace,
            @ApiParam(value = "Access granted associated to layer (1. "
                    + "Corpocaldas info, 2. Another resources)", required = true)
            @RequestParam("access_granted") int accessGranted,
            @ApiParam(value = "Determines if the layer is visible on the map",
                    required = true) @RequestParam("visible") boolean visible,
            @ApiParam(value = "JSON metadata file associated to layer",
                    required = false)
            @RequestParam(value ="metadata", required = false) MultipartFile file) {
        validateAccessService.validateAccess(token, userId);
        layerService.updateLayer(layerId, id, name, referenceName, idWorkspace,
                accessGranted, visible, file);
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
    @ApiOperation(value = "Endpoint that returns all the layers registered",
            response = PaginatorDto.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "All the layers was obtained successfully")
    })
    @GetMapping()
    public ResponseEntity<PaginatorDto> getLayers(
            @ApiParam(value = "Value for name field search")
            @RequestParam(value = "name", required = false) String name,
            @ApiParam(value = "Value for workspace field search")
            @RequestParam(value = "workspace", required = false) String workspace,
            @ApiParam(value = "Value for access granted field search")
            @RequestParam(value = "access_granted", required = false) Integer accessGranted,
            @ApiParam(value = "Value for visibility field search")
            @RequestParam(value = "visible", required = false) Boolean visible,
            @ApiParam(value = "Value for number page")
            @RequestParam(value = "page", defaultValue = "0") int page,
            @ApiParam(value = "Quantity of elements returned into the page")
            @RequestParam(value = "size", defaultValue = "10") int size) {
        return new ResponseEntity<>(layerService.getLayers(name, workspace,
                accessGranted, visible, page, size), HttpStatus.OK);
    }

    /**
     * Endpoint that returns the information of a specific layer for searching
     * by its identifier.
     * @param id Identifier of the layer
     * @return Information of the layer associated to this identifier
     */
    @ApiOperation(value = "Endpoint that returns the information of a specific"
            + " layer for searching by its identifier", response = LayerDto.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "The information of the layer was"
                + " obtained successfully"),
        @ApiResponse(code = 404, message = "No layer was obtained")
    })
    @GetMapping("/{id}")
    public ResponseEntity<LayerDto> getLayer(@ApiParam(value = "Identifier of"
            + " the layer", required = true) @PathVariable("id") int id) {
        return new ResponseEntity<>(layerService.getLayer(id), HttpStatus.OK);
    }

    /**
     * Endpoint that returns the information of a specific layer for searching
     * by its name.
     * @param name Name of the layer
     * @return Information of the layer associated to this name
     */
    @ApiOperation(value = "Endpoint that returns the information of a specific"
            + " layer for searching by its name", response = LayerDto.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "The information of the layer was"
                + " obtained successfully"),
        @ApiResponse(code = 404, message = "No layer was obtained")
    })
    @GetMapping("/name/{name}")
    public ResponseEntity<LayerDto> getLayerByName(@ApiParam(value = "Name of"
            + " the layer", required = true) @PathVariable("name") String name) {
        return new ResponseEntity<>(layerService.getLayerByName(name),
                HttpStatus.OK);
    }

    /**
     * Endpoint that delete the information of a specific layer for searching
     * by its identifier.
     * @param token Access token
     * @param userId User identifier associated to access token
     * @param id Identifier of the layer
     * @return Response entity with the status of action
     */
    @ApiOperation(value = "Endpoint that delete the information of a specific"
            + " layer for searching by its identifier")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "The information of the layer was"
                + " deleted successfully"),
        @ApiResponse(code = 401, message = "Request not authenticated"),
        @ApiResponse(code = 404, message = "No layer was found with this"
                + " identifier")
    })
    @DeleteMapping("/{id}")
    public ResponseEntity deleteLayer(
            @ApiParam(value = "Access token", required = true)
            @RequestHeader(value = "authorization-token", required = false) String token,
            @ApiParam(value = "User identifier associated to access token", required = true)
            @RequestHeader(value = "authorization-user", required = false) Integer userId,
            @ApiParam(value = "Identifier of the layer", required = true) @PathVariable("id") int id) {
        validateAccessService.validateAccess(token, userId);
        layerService.deleteLayer(id);
        return ResponseEntity.noContent().build();
    }
    
    /**
     * Export on excel file the layers info.
     * @param name Value for name field search
     * @param workspace Value for workspace field search
     * @param accessGranted Value for access granted field search
     * @param visible Value for visibility field search
     * @param response Response instance
     */
    @ApiOperation(value = "Export on excel file the layers info")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "All the layers was obtained successfully")
    })
    @GetMapping("/export-excel")
    public void exportExcelLayers(
            @RequestHeader(value = "authorization-token", required = false) String token,
            @RequestHeader(value = "authorization-user", required = false) Integer userId,
            @ApiParam(value = "Value for name field search")
            @RequestParam(value = "name", required = false) String name,
            @ApiParam(value = "Value for workspace field search")
            @RequestParam(value = "workspace", required = false) String workspace,
            @ApiParam(value = "Value for access granted field search")
            @RequestParam(value = "access_granted", required = false) Integer accessGranted,
            @ApiParam(value = "Value for visibility field search")
            @RequestParam(value = "visible", required = false) Boolean visible,
            @ApiParam(value = "Response instance", hidden = true)
                    HttpServletResponse response) throws IOException {
        validateAccessService.validateAccess(token, userId);
        response.setContentType("application/octet-stream");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());
        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=capas_" + currentDateTime + ".xlsx";
        response.setHeader(headerKey, headerValue);
        LayerExcelExporter excelExporter = layerService.exportExcelLayer(name,
                workspace, accessGranted, visible);
        excelExporter.export(response);
    }
    
    /**
     * Export on pdf file the layers info.
     * @param name Value for name field search
     * @param workspace Value for workspace field search
     * @param accessGranted Value for access granted field search
     * @param visible Value for visibility field search
     * @param response Response instance
     */
    @ApiOperation(value = "Export on pdf file the layers info")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "All the layers was obtained successfully")
    })
    @GetMapping("/export-pdf")
    public void exportPdfLayers(
            @RequestHeader(value = "authorization-token", required = false) String token,
            @RequestHeader(value = "authorization-user", required = false) Integer userId,
            @ApiParam(value = "Value for name field search")
            @RequestParam(value = "name", required = false) String name,
            @ApiParam(value = "Value for workspace field search")
            @RequestParam(value = "workspace", required = false) String workspace,
            @ApiParam(value = "Value for access granted field search")
            @RequestParam(value = "access_granted", required = false) Integer accessGranted,
            @ApiParam(value = "Value for visibility field search")
            @RequestParam(value = "visible", required = false) Boolean visible,
            @ApiParam(value = "Response instance", hidden = true)
                    HttpServletResponse response) throws IOException {
        validateAccessService.validateAccess(token, userId);
        response.setContentType("application/octet-stream");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());
        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=capas_" + currentDateTime + ".pdf";
        response.setHeader(headerKey, headerValue);
        LayerPdfExporter pdfExporter = layerService.exportPdfLayer(name,
                workspace, accessGranted, visible);
        pdfExporter.export(response);
    }
    
}
