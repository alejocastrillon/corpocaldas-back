package co.gov.corpocaldas.AccessLayerRequest.service.impl;

import co.gov.corpocaldas.AccessLayerRequest.entity.Layer;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.LayerNotFoundException;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.LayerUpdateBadRequestException;
import co.gov.corpocaldas.AccessLayerRequest.repository.LayerRepository;
import co.gov.corpocaldas.AccessLayerRequest.service.LayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LayerServiceImpl implements LayerService {

    @Autowired
    private LayerRepository repository;

    /**
     * Persist the information of the layer on db.
     *
     * @param layer Information of the layer
     * @return Persisted information of the layer
     */
    @Override
    public Layer saveLayer(Layer layer) {
        return repository.save(layer);
    }

    /**
     * Update the information of the layer on db.
     *
     * @param layerId Identifier of the layer
     * @param layer   Information of the layer
     * @return Update layer's information
     */
    @Override
    public Layer updateLayer(int layerId, Layer layer) {
        if (layerId == layer.getId()) {
            return saveLayer(layer);
        } else {
            throw new LayerUpdateBadRequestException("The identifier of the layer provided mismatch with the identifier" +
                    " that is inside the information");
        }
    }

    /**
     * Obtain all the information of the layers that are persisted.
     *
     * @return List of information of the layers
     */
    @Override
    public List<Layer> getLayers() {
        return repository.findAll();
    }

    /**
     * Obtain the information of a specific layer by searching for its identifier.
     *
     * @param id Identifier of the layer
     * @return Information of the resultant layer
     */
    @Override
    public Layer getLayer(int id) {
        return repository.findById(id).orElseGet(() -> {
            throw new LayerNotFoundException("No fue encontrada capa asociada con el identificador " + id);
        });
    }

    /**
     * Remove the information of a specific layer by searching for its identifier.
     *
     * @param id Identifier of the layer
     * @return Transaction state
     */
    @Override
    public boolean deleteLayer(int id) {
        repository.delete(getLayer(id));
        return true;
    }
}
