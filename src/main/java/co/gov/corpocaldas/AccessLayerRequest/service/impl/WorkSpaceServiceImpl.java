package co.gov.corpocaldas.AccessLayerRequest.service.impl;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.WorkSpaceDto;
import co.gov.corpocaldas.AccessLayerRequest.entity.WorkSpace;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.CorpocaldasBadRequestException;
import co.gov.corpocaldas.AccessLayerRequest.repository.WorkSpaceRepository;
import co.gov.corpocaldas.AccessLayerRequest.service.WorkSpaceService;
import co.gov.corpocaldas.AccessLayerRequest.service.util.Utility;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkSpaceServiceImpl implements WorkSpaceService {

    @Autowired
    private WorkSpaceRepository workSpaceRepository;

    private final ModelMapper mapper = new ModelMapper();

    @Override
    public WorkSpaceDto saveWorkSpace(WorkSpaceDto workSpace) {
        return mapper.map(workSpaceRepository.save(mapper.map(workSpace, WorkSpace.class)), WorkSpaceDto.class);
    }

    @Override
    public void updateWorkSpace(long workspaceId, WorkSpaceDto workSpace) {
        if (workspaceId == workSpace.getId()) {
            getWorkspace(workspaceId);
            saveWorkSpace(workSpace);
        } else {
            throw new CorpocaldasBadRequestException(ModelValidationError.WORKSPACE_MISMATCH_MESSAGE);
        }
    }

    @Override
    public PaginatorDto getWorkspaces(String name, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<WorkSpace> pageResult = workSpaceRepository.getAll(name, pageable);
        if (pageResult.hasContent()) {
            return new PaginatorDto((List<WorkSpaceDto>) Utility.parseList(pageResult.getContent(), WorkSpaceDto.class),
                    pageResult.getTotalElements());
        } else {
            return new PaginatorDto();
        }
    }

    @Override
    public WorkSpaceDto getWorkspace(long workspaceId) {
        return mapper.map(workSpaceRepository.findById(workspaceId).orElseThrow(() ->
                new CorpocaldasBadRequestException(String.format(ModelValidationError.WORKSPACE_NOT_FOUND,
                        workspaceId))), WorkSpaceDto.class);
    }

    @Override
    public void deleteWorkspace(long workspaceId) {
        workSpaceRepository.delete(mapper.map(getWorkspace(workspaceId), WorkSpace.class));
    }
}
