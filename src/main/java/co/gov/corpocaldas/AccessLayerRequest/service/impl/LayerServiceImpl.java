package co.gov.corpocaldas.AccessLayerRequest.service.impl;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
import co.gov.corpocaldas.AccessLayerRequest.dto.LayerDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.entity.Layer;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.CorpocaldasNotFoundException;
import co.gov.corpocaldas.AccessLayerRequest.repository.LayerRepository;
import co.gov.corpocaldas.AccessLayerRequest.repository.LoginAccessGrantedRepository;
import co.gov.corpocaldas.AccessLayerRequest.service.LayerService;
import co.gov.corpocaldas.AccessLayerRequest.service.ValidateAccessService;
import co.gov.corpocaldas.AccessLayerRequest.service.util.Utility;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LayerServiceImpl implements LayerService {

    private final LayerRepository repository;

    private final ValidateAccessService validateAccessService;

    public LayerServiceImpl(LayerRepository repository, ValidateAccessService validateAccessService) {
        this.repository = repository;
        this.validateAccessService = validateAccessService;
    }

    private final ModelMapper mapper = new ModelMapper();

    @Override
    public LayerDto saveLayer(String token, int userId, LayerDto layer) {
        validateAccessService.validateAccess(token, userId);
        return mapper.map(repository.save(mapper.map(layer, Layer.class)), LayerDto.class);
    }

    @Override
    public void updateLayer(String token, int userId, int layerId, LayerDto layer) {
        if (layerId == layer.getId()) {
            saveLayer(token, userId, layer);
        } else {
            throw new CorpocaldasNotFoundException(ModelValidationError.MISMATCH_ID_MESSAGE);
        }
    }

    @Override
    public PaginatorDto getLayers(String name, String workspace, Integer accessGranted, Boolean visible, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Layer> pageResult = repository.getAll(name, workspace, accessGranted, visible, pageable);
        if (pageResult.hasContent()) {
            return new PaginatorDto((List<LayerDto>) Utility.parseList(pageResult.getContent(), LayerDto.class),
                    pageResult.getTotalElements());
        } else {
            return new PaginatorDto();
        }
    }

    @Override
    public LayerDto getLayer(int id) {
        return mapper.map(repository.findById(id).orElseThrow(() -> new CorpocaldasNotFoundException("No fue encontrada capa asociada" +
                " con el identificador " + id)), LayerDto.class);
    }

    @Override
    public LayerDto getLayerByName(String name) {
        return mapper.map(repository.findByName(name).orElseThrow(() -> new CorpocaldasNotFoundException("No fue encontrada capa" +
                " asociada al nombre " + name)), LayerDto.class);
    }

    @Override
    public void deleteLayer(int id) {
        repository.delete(mapper.map(getLayer(id), Layer.class));
    }
}
