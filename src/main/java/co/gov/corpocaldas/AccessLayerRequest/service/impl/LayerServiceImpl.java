package co.gov.corpocaldas.AccessLayerRequest.service.impl;

import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.entity.Layer;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.LayerNotFoundException;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.LayerUpdateBadRequestException;
import co.gov.corpocaldas.AccessLayerRequest.repository.LayerRepository;
import co.gov.corpocaldas.AccessLayerRequest.service.LayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

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
    public PaginatorDto getLayers(String name, String url, String workspace, Integer accessGranted, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Layer> pageResult = repository.getAll(name, url, workspace, accessGranted, pageable);
        if (pageResult.hasContent()) {
            return new PaginatorDto(pageResult.getContent(), pageResult.getTotalElements());
        } else {
            return new PaginatorDto();
        }
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
