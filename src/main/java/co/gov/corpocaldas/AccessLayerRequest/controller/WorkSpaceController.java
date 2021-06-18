package co.gov.corpocaldas.AccessLayerRequest.controller;

import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.SaveWorkSpaceDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.WorkSpaceDto;
import co.gov.corpocaldas.AccessLayerRequest.service.ValidateAccessService;
import co.gov.corpocaldas.AccessLayerRequest.service.WorkSpaceService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("${api.base.url}/workspaces")
@Api
public class WorkSpaceController {

    private final WorkSpaceService workSpaceService;

    private final ValidateAccessService validateAccessService;

    public WorkSpaceController(WorkSpaceService workSpaceService,
            ValidateAccessService validateAccessService) {
        this.workSpaceService = workSpaceService;
        this.validateAccessService = validateAccessService;
    }

    /**
     * Persist workspace information.
     * @param token Access token
     * @param userId User identifier associated to access token
     * @param workspace Workspace information
     * @return Persisted workspace information
     */
    @ApiOperation(value = "Persist workspace information",
            response = WorkSpaceDto.class)
    @ApiResponses(value = {
        @ApiResponse(code = 201, message = "The information was persisted successful"),
        @ApiResponse(code = 400, message = "Not valid user information to be persisted"),
        @ApiResponse(code = 401, message = "Request not authenticated")
    })
    @PostMapping()
    public ResponseEntity<WorkSpaceDto> saveWorkspace(
            @ApiParam(value = "Access token", required = true)
            @RequestHeader(value = "authorization-token", required = false) String token,
            @ApiParam(value = "User identifier associated to access token", required = true)
            @RequestHeader(value = "authorization-user", required = false) Integer userId,
            @ApiParam(value = "Workspace information", required = true)
            @RequestBody SaveWorkSpaceDto workspace) {
        validateAccessService.validateAccess(token, userId);
        return new ResponseEntity<>(workSpaceService.saveWorkSpace(workspace),
                HttpStatus.CREATED);
    }

    /**
     * Update the information of a specific workspace.
     * @param token Access token
     * @param userId User identifier associated to access token
     * @param workspaceId Workspace identifier to be updated
     * @param workspace Update workspace information
     * @return Update response
     */
    @ApiOperation(value = "Update the information of a specific workspace")
    @ApiResponses(value = {
        @ApiResponse(code = 204, message = "Information was updated successful"),
        @ApiResponse(code = 400, message = "User information not valid to be updated"),
        @ApiResponse(code = 401, message = "Request not authenticated")
    })
    @PutMapping("/{workspaceId}")
    public ResponseEntity updateWorkspace(
            @ApiParam(value = "Access token", required = true)
            @RequestHeader(value = "authorization-token", required = false) String token,
            @ApiParam(value = "User identifier associated to access token", required = true)
            @RequestHeader(value = "authorization-user", required = false) Integer userId,
            @ApiParam(value = "Workspace identifier to be updated", required = true)
            @PathVariable("workspaceId") long workspaceId,
            @ApiParam(value = "Workspace information updated", required = true)
            @RequestBody SaveWorkSpaceDto workspace) {
        validateAccessService.validateAccess(token, userId);
        workSpaceService.updateWorkSpace(workspaceId, workspace);
        return ResponseEntity.noContent().build();
    }

    /**
     * Obtain workspace that matching with the filter values.
     * @param name Workspace name filter value
     * @param page Page number
     * @param size Records size page
     * @return Workspaces list
     */
    @ApiOperation(value = "Obtain workspace that matching with the filter"
            + " values", response = PaginatorDto.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Workspaces list"),
        @ApiResponse(code = 401, message = "Request not authenticated")
    })
    @GetMapping()
    public ResponseEntity<PaginatorDto> getWorkspaces(
            @ApiParam(value = "Workspace name filter value", required = true)
            @RequestParam(value = "name", required = false) String name,
            @ApiParam(value = "Page number", required = true)
            @RequestParam(value = "page", defaultValue = "0") int page,
            @ApiParam(value = "Records size page", required = true)
            @RequestParam(value = "size", defaultValue = "10") int size) {
        return new ResponseEntity<>(workSpaceService.getWorkspaces(name, page,
                size), HttpStatus.OK);
    }

    /**
     * Obtain a specific workspace information for searching by its identifier.
     * @param workspaceId Workspace identifier
     * @return Workspace information
     */
    @ApiOperation(value = "Obtain a specific workspace information for"
            + " searching by its identifier", response = WorkSpaceDto.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Workspace information was obtained"
                + " successful"),
        @ApiResponse(code = 401, message = "Request not authenticated")
    })
    @GetMapping("/{workspaceId}")
    public ResponseEntity<WorkSpaceDto> getWorkspace(
            @ApiParam(value = "Workspace identifier", required = true)
            @PathVariable("workspaceId") long workspaceId) {
        return new ResponseEntity<>(workSpaceService.getWorkspace(workspaceId),
                HttpStatus.OK);
    }

    /**
     * Delete the workspace information for searching by its identifier.
     * @param token Access token
     * @param userId User identifier associated to access token
     * @param workspaceId Workspace identifier
     * @return Delete response
     */
    @ApiOperation(value = "Delete the workspace information for searching by"
            + " its identifier")
    @ApiResponses(value = {
        @ApiResponse(code = 204, message = "The workspace was deleted successful"),
        @ApiResponse(code = 401, message = "Request not authenticated")
    })
    @DeleteMapping("/{workspaceId}")
    public ResponseEntity deleteWorkspace(
            @ApiParam(value = "Access token", required = true)
            @RequestHeader(value = "authorization-token", required = false) String token,
            @ApiParam(value = "User identifier associated to access token", required = true)
            @RequestHeader(value = "authorization-user", required = false) Integer userId,
            @ApiParam(value = "Workspace identifier", required = true)
            @PathVariable("workspaceId") long workspaceId) {
        validateAccessService.validateAccess(token, userId);
        workSpaceService.deleteWorkspace(workspaceId);
        return ResponseEntity.noContent().build();
    }
    
}
