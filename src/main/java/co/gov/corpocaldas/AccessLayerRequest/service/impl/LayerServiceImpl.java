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

    @Override
    public Layer saveLayer(Layer layer) {
        return repository.save(layer);
    }

    @Override
    public Layer updateLayer(int layerId, Layer layer) {
        if (layerId == layer.getId()) {
            return saveLayer(layer);
        } else {
            throw new LayerUpdateBadRequestException("The identifier of the layer provided mismatch with the identifier" +
                    " that is inside the information");
        }
    }

    @Override
    public List<Layer> getLayers() {
        return repository.findAll();
    }

    @Override
    public Layer getLayer(int id) {
        return repository.findById(id).orElseThrow(() -> new LayerNotFoundException("No fue encontrada capa asociada" +
                " con el identificador " + id));
    }

    @Override
    public Layer getLayerByName(String name) {
        return repository.findByName(name).orElseThrow(() -> new LayerNotFoundException("No fue encontrada capa" +
                " asociada al nombre " + name));
    }

    @Override
    public boolean deleteLayer(int id) {
        repository.delete(getLayer(id));
        return true;
    }
}
