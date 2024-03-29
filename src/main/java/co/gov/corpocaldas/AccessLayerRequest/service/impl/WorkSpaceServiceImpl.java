package co.gov.corpocaldas.AccessLayerRequest.service.impl;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
import co.gov.corpocaldas.AccessLayerRequest.dto.LiteWorkspaceDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.SaveWorkSpaceDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.WorkSpaceDto;
import co.gov.corpocaldas.AccessLayerRequest.entity.WorkSpace;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.CorpocaldasBadRequestException;
import co.gov.corpocaldas.AccessLayerRequest.repository.WorkSpaceRepository;
import co.gov.corpocaldas.AccessLayerRequest.service.WorkSpaceService;
import co.gov.corpocaldas.AccessLayerRequest.service.util.Utility;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkSpaceServiceImpl implements WorkSpaceService {

    private final WorkSpaceRepository workSpaceRepository;

    private final ModelMapper mapper;

    public WorkSpaceServiceImpl(WorkSpaceRepository workSpaceRepository,
            ModelMapper mapper) {
        this.workSpaceRepository = workSpaceRepository;
        this.mapper = mapper;
    }

    @Override
    public WorkSpaceDto saveWorkSpace(SaveWorkSpaceDto workSpace) {
        if (workSpace.getParent().getId() == 0) {
            workSpace.setParent(null);
        }
        return mapper.map(workSpaceRepository.save(mapper.map(workSpace,
                WorkSpace.class)), WorkSpaceDto.class);
    }

    @Override
    public void updateWorkSpace(long workspaceId, SaveWorkSpaceDto workSpace) {
        if (workspaceId == workSpace.getId()) {
            getWorkspace(workspaceId);
            saveWorkSpace(workSpace);
        } else {
            throw new CorpocaldasBadRequestException(ModelValidationError
                    .MISMATCH_ID_MESSAGE);
        }
    }

    @Override
    public PaginatorDto getWorkspaces(String name, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<WorkSpace> pageResult = workSpaceRepository.getAll(name, pageable);
        if (pageResult.hasContent()) {
            return new PaginatorDto((List<LiteWorkspaceDto>) Utility.parseList(
                    pageResult.getContent(), LiteWorkspaceDto.class),
                    pageResult.getTotalElements());
        } else {
            return new PaginatorDto();
        }
    }

    @Override
    public WorkSpaceDto getWorkspace(long workspaceId) {
        return mapper.map(workSpaceRepository.findById(workspaceId).orElseThrow(
                () -> new CorpocaldasBadRequestException(String.format(
                        ModelValidationError.WORKSPACE_NOT_FOUND, workspaceId)))
                , WorkSpaceDto.class);
    }

    @Override
    public void deleteWorkspace(long workspaceId) {
        workSpaceRepository.delete(mapper.map(getWorkspace(workspaceId),
                WorkSpace.class));
    }
}
