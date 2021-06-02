package co.gov.corpocaldas.AccessLayerRequest.service;

import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.SaveWorkSpaceDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.WorkSpaceDto;

/**
 * Workspaces service
 */
public interface WorkSpaceService {

    /**
     * Persist the information of the workspace.
     * @param workSpace Information of the workspace
     * @return Persisted information of the workspace
     */
    WorkSpaceDto saveWorkSpace(SaveWorkSpaceDto workSpace);

    /**
     * Update the information of an specific workspace for searching by its identifier.
     * @param workspaceId Identifier of the workspace
     * @param workSpace Updated information of the workspace
     * @return Updated workspace's information
     */
    void updateWorkSpace(long workspaceId, SaveWorkSpaceDto workSpace);

    /**
     * Obtain all the information of the workspaces and apply filter on the name field.
     * @param name Field name value
     * @param page Number page
     * @param size Size page
     * @return List of workspaces
     */
    PaginatorDto getWorkspaces(String name, int page, int size);

    /**
     * Obtain the information of an specific workspace for searching by its identifier.
     * @param workspaceId Identifier of the workspace
     * @return Information of the resultant workspace
     */
    WorkSpaceDto getWorkspace(long workspaceId);

    /**
     * Delete the information of an specific workspace for searching by its identifier.
     * @param workspaceId Identifier of the workspace
     */
    void deleteWorkspace(long workspaceId);
}
