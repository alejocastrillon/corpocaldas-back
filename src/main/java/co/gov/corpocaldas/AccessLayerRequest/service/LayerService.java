package co.gov.corpocaldas.AccessLayerRequest.service;

import co.gov.corpocaldas.AccessLayerRequest.entity.Layer;

import java.util.List;

public interface LayerService {

    /**
     * Persist the information of the layer on db.
     * @param layer Information of the layer
     * @return Persisted information of the layer
     */
    Layer saveLayer(Layer layer);

    /**
     * Update the information of the layer on db.
     * @param layerId Identifier of the layer
     * @param layer Information of the layer
     * @return Update layer's information
     */
    Layer updateLayer(int layerId, Layer layer);

    /**
     * Obtain all the information of the layers that are persisted.
     * @return List of information of the layers
     */
    List<Layer> getLayers();

    /**
     * Obtain the information of a specific layer by searching for its identifier.
     * @param id Identifier of the layer
     * @return Information of the resultant layer
     */
    Layer getLayer(int id);

    /**
     * Remove the information of a specific layer by searching for its identifier.
     * @param id Identifier of the layer
     * @return Transaction state
     */
    boolean deleteLayer(int id);
}
