package co.gov.corpocaldas.AccessLayerRequest.service.impl;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
import co.gov.corpocaldas.AccessLayerRequest.dto.LayerDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.entity.Layer;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.CorpocaldasNotFoundException;
import co.gov.corpocaldas.AccessLayerRequest.repository.LayerRepository;
import co.gov.corpocaldas.AccessLayerRequest.service.LayerService;
import co.gov.corpocaldas.AccessLayerRequest.service.RecursoService;
import co.gov.corpocaldas.AccessLayerRequest.service.util.Utility;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class LayerServiceImpl implements LayerService {

    private final LayerRepository repository;

    private final RecursoService recursoService;
    
    private final ModelMapper mapper;

    public LayerServiceImpl(LayerRepository repository,
            RecursoService recursoService, ModelMapper mapper) {
        this.repository = repository;
        this.recursoService = recursoService;
        this.mapper = mapper;
    }

    @Override
    public LayerDto saveLayer(Integer id, String name, String referenceName,
            int idWorkspace, int accessGranted, boolean visible, MultipartFile file) {
        LayerDto layer = new LayerDto();
        if (id != null) {
            layer.setId(id);
        }
        layer.setName(name);
        layer.setReferenceName(referenceName);
        layer.setIdWorkspace(idWorkspace);
        layer.setAccessGranted(accessGranted);
        layer.setVisible(visible);
        if (id == null) {
            layer.setMetadataUrl(recursoService.uploadFile(file));
        } else {
            LayerDto layerUpload = getLayer(id);
            if (file != null) {
                layer.setMetadataUrl(recursoService.uploadFile(file));
            } else {
                layer.setMetadataUrl(layerUpload.getMetadataUrl());
            }
        }
        return mapper.map(repository.save(mapper.map(layer, Layer.class)),
                LayerDto.class);
    }

    @Override
    public void updateLayer(int layerId, int id, String name,
            String referenceName, int idWokspace, int accessGranted,
            boolean visible, MultipartFile file) {
        if (layerId == id) {
            saveLayer(id, name, referenceName, idWokspace, accessGranted,
                    visible, file);
        } else {
            throw new CorpocaldasNotFoundException(ModelValidationError
                    .MISMATCH_ID_MESSAGE);
        }
    }

    @Override
    public PaginatorDto getLayers(String name, String workspace,
            Integer accessGranted, Boolean visible, int page, int size) {
        name = name != null ? name.toUpperCase() : null;
        workspace = workspace != null ? workspace.toUpperCase() : null;
        Pageable pageable = PageRequest.of(page, size);
        Page<Layer> pageResult = repository.getAll(name, workspace,
                accessGranted, visible, pageable);
        if (pageResult.hasContent()) {
            return new PaginatorDto((List<LayerDto>) Utility
                    .parseList(pageResult.getContent(), LayerDto.class),
                    pageResult.getTotalElements());
        } else {
            return new PaginatorDto();
        }
    }

    @Override
    public LayerDto getLayer(int id) {
        return mapper.map(repository.findById(id).orElseThrow(()
                -> new CorpocaldasNotFoundException("No fue encontrada capa"
                        + " asociada" + " con el identificador " + id)),
                LayerDto.class);
    }

    @Override
    public LayerDto getLayerByName(String name) {
        return mapper.map(repository.findByName(name).orElseThrow(()
                -> new CorpocaldasNotFoundException("No fue encontrada capa" +
                " asociada al nombre " + name)), LayerDto.class);
    }

    @Override
    public void deleteLayer(int id) {
        repository.delete(mapper.map(getLayer(id), Layer.class));
    }
}
