package co.gov.corpocaldas.AccessLayerRequest.service;

import co.gov.corpocaldas.AccessLayerRequest.dto.LayerDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.service.util.LayerExcelExporter;
import co.gov.corpocaldas.AccessLayerRequest.service.util.LayerPdfExporter;
import org.springframework.web.multipart.MultipartFile;

public interface LayerService {

    /**
     * Persist the information of the layer on db.
     * @param id Layer identifier
     * @param name Layer name
     * @param referenceName Reference layer name
     * @param idWorkspace Workspace identifier associated to the layer
     * @param accessGranted Access granted associated to the layer (1. public,
     * 2 another sources)
     * @param visible Determine if the layer is visible on the map
     * @param metadataFile Metadata file associated to the layer
     * @return Persisted information of the layer
     */
    LayerDto saveLayer(Integer id, String name, String referenceName,
            int idWorkspace, int accessGranted, boolean visible,
            MultipartFile metadataFile);

    /**
     * Update the information of the layer on db.
     * @param layerId Identifier of the layer
     * @param id Layer identifier
     * @param name Layer name
     * @param referenceName Reference layer name
     * @param idWorkspace Workspace identifier associated to the layer
     * @param accessGranted Access granted associated to the layer (1. public,
     * 2 another sources)
     * @param visible Determine if the layer is visible on the map
     * @param metadataFile Metadata file associated to the layer
     */
    void updateLayer(int layerId, int id, String name, String referenceName,
            int idWorkspace, int accessGranted, boolean visible,
            MultipartFile metadataFile);

    /**
     * Obtain all the information of the layers that are persisted.
     * @param name Layer name value filter
     * @param workspace Workspace name value filter
     * @param accessGranted Access granted value filter
     * @param visible Layer visibility value filter
     * @param page Page number
     * @param size Records quantity for page
     * @return List of information of the layers
     */
    PaginatorDto getLayers(String name, String workspace, Integer accessGranted,
            Boolean visible, int page, int size);
    
    /**
     * Export the layers by params selected in excel file.
     * @param name Layer name value filter
     * @param workspace Workspace name value filter
     * @param accessGranted Access granted value filter
     * @param visible Layer visibility value filter
     * @return 
     */
    LayerExcelExporter exportExcelLayer(String name, String workspace,
            Integer accessGranted, Boolean visible);
    
    /**
     * Export the layers by params selected in pdf file.
     * @param name Layer name value filter
     * @param workspace Workspace name value filter
     * @param accessGranted Access granted value filter
     * @param visible Layer visibility value filter
     * @return 
     */
    LayerPdfExporter exportPdfLayer(String name, String workspace,
            Integer accessGranted, Boolean visible);

    /**
     * Obtain the information of a specific layer by searching for its identifier.
     * @param id Identifier of the layer
     * @return Information of the resultant layer
     */
    LayerDto getLayer(int id);

    /**
     * Obtain the information of a specific layer by searching for its name.
     * @param name Name of the layer
     * @return Information of the resultant layer
     */
    LayerDto getLayerByName(String name);

    /**
     * Remove the information of a specific layer by searching for its identifier.
     * @param id Identifier of the layer
     */
    void deleteLayer(int id);
    
}
