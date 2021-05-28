package co.gov.corpocaldas.AccessLayerRequest.controller;

import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.WorkSpaceDto;
import co.gov.corpocaldas.AccessLayerRequest.service.ValidateAccessService;
import co.gov.corpocaldas.AccessLayerRequest.service.WorkSpaceService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.base.url}/workspaces")
@Api
public class WorkSpaceController {

    private final WorkSpaceService workSpaceService;

    private final ValidateAccessService validateAccessService;

    public WorkSpaceController(WorkSpaceService workSpaceService, ValidateAccessService validateAccessService) {
        this.workSpaceService = workSpaceService;
        this.validateAccessService = validateAccessService;
    }

    @PostMapping()
    public ResponseEntity<WorkSpaceDto> saveWorkspace(
            @RequestHeader(value = "authorization-token", required = false) String token,
            @RequestHeader(value = "authorization-user", required = false) Integer userId,
            @RequestBody WorkSpaceDto workspace) {
        validateAccessService.validateAccess(token, userId);
        return new ResponseEntity<>(workSpaceService.saveWorkSpace(workspace), HttpStatus.OK);
    }

    @PutMapping("/{workspaceId}")
    public ResponseEntity updateWorkspace(@RequestHeader(value = "authorization-token", required = false) String token,
                                          @RequestHeader(value = "authorization-user", required = false) Integer userId,
                                          @PathVariable("workspaceId") long workspaceId,
                                          @RequestBody WorkSpaceDto workspace) {
        validateAccessService.validateAccess(token, userId);
        workSpaceService.updateWorkSpace(workspaceId, workspace);
        return ResponseEntity.noContent().build();
    }

    @GetMapping()
    public ResponseEntity<PaginatorDto> getWorkspaces(
            @RequestHeader(value = "authorization-token", required = false) String token,
            @RequestHeader(value = "authorization-user", required = false) Integer userId,
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "10") int size) {
        validateAccessService.validateAccess(token, userId);
        return new ResponseEntity<>(workSpaceService.getWorkspaces(name, page, size), HttpStatus.OK);
    }

    @GetMapping("/{workspaceId}")
    public ResponseEntity<WorkSpaceDto> getWorkspace(
            @RequestHeader(value = "authorization-token", required = false) String token,
            @RequestHeader(value = "authorization-user", required = false) Integer userId,
            @PathVariable("workspaceId") long workspaceId) {
        validateAccessService.validateAccess(token, userId);
        return new ResponseEntity<>(workSpaceService.getWorkspace(workspaceId), HttpStatus.OK);
    }

    @DeleteMapping("/{workspaceId}")
    public ResponseEntity deleteWorkspace(@RequestHeader(value = "authorization-token", required = false) String token,
                                          @RequestHeader(value = "authorization-user", required = false) Integer userId,
                                          @PathVariable("workspaceId") long workspaceId) {
        validateAccessService.validateAccess(token, userId);
        workSpaceService.deleteWorkspace(workspaceId);
        return ResponseEntity.noContent().build();
    }
}
