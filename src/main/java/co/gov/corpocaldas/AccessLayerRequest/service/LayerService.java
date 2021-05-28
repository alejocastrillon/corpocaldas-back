package co.gov.corpocaldas.AccessLayerRequest.service;

import co.gov.corpocaldas.AccessLayerRequest.dto.LayerDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;

public interface LayerService {

    /**
     * Persist the information of the layer on db.
     * @param layer Information of the layer
     * @return Persisted information of the layer
     */
    LayerDto saveLayer(String token, Integer userId, LayerDto layer);

    /**
     * Update the information of the layer on db.
     * @param layerId Identifier of the layer
     * @param layer Information of the layer
     * @return Update layer's information
     */
    void updateLayer(String token, Integer userId, int layerId, LayerDto layer);

    /**
     * Obtain all the information of the layers that are persisted.
     * @return List of information of the layers
     */
    PaginatorDto getLayers(String name, String workspace, Integer accessGranted, Boolean visible, int page, int size);

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
