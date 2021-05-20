package co.gov.corpocaldas.AccessLayerRequest.controller;

import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.ShowWorkSpaceDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.WorkSpaceDto;
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

    @Autowired
    private WorkSpaceService workSpaceService;

    @PostMapping()
    public ResponseEntity<ShowWorkSpaceDto> saveWorkspace(@RequestBody WorkSpaceDto workspace) {
        return new ResponseEntity<>(workSpaceService.saveWorkSpace(workspace), HttpStatus.OK);
    }

    @PutMapping("/{workspaceId}")
    public ResponseEntity updateWorkspace(@PathVariable("workspaceId") long workspaceId,
                                          @RequestBody WorkSpaceDto workspace) {
        workSpaceService.updateWorkSpace(workspaceId, workspace);
        return ResponseEntity.noContent().build();
    }

    @GetMapping()
    public ResponseEntity<PaginatorDto> getWorkspaces(@RequestParam(value = "name", required = false) String name,
                                                      @RequestParam(value = "page", defaultValue = "0") int page,
                                                      @RequestParam(value = "size", defaultValue = "10") int size) {
        return new ResponseEntity<>(workSpaceService.getWorkspaces(name, page, size), HttpStatus.OK);
    }

    @GetMapping("/{workspaceId}")
    public ResponseEntity<ShowWorkSpaceDto> getWorkspace(@PathVariable("workspaceId") long workspaceId) {
        return new ResponseEntity<>(workSpaceService.getWorkspace(workspaceId), HttpStatus.OK);
    }

    @DeleteMapping("/{workspaceId}")
    public ResponseEntity deleteWorkspace(@PathVariable("workspaceId") long workspaceId) {
        workSpaceService.deleteWorkspace(workspaceId);
        return ResponseEntity.noContent().build();
    }
}
