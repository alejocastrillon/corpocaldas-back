package co.gov.corpocaldas.AccessLayerRequest.controller;

import co.gov.corpocaldas.AccessLayerRequest.service.RecursoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.apache.commons.io.IOUtils;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping("${api.base.url}/files")
@Api
public class RecursoController {

    private final RecursoService recursoService;

    public RecursoController(RecursoService recursoService) {
        this.recursoService = recursoService;
    }

    /**
     * Download a specific file for searching by its name.
     * @param fileName File name
     * @param response Response to request's file
     * @throws IOException Incompatible resource
     */
    @ApiOperation(value = "Download a specific file for searching by its name")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "The file was downloaded successfully"),
        @ApiResponse(code = 404, message = "The file was not found"),
        @ApiResponse(code = 500, message = "Error while the file is converted"
                + " on resource")
    })
    @GetMapping("/{fileName:.+}")
    public void getFile(
            @ApiParam(value = "File name", required = true)
            @PathVariable("fileName") String fileName,
            @ApiParam(value = "Response to request's file")
            HttpServletResponse response) throws IOException {
        Resource resource = recursoService.downloadFile(fileName);
        response.setContentType(MediaType.ALL_VALUE);
        IOUtils.copy(resource.getInputStream(), response.getOutputStream());
    }
    
}
