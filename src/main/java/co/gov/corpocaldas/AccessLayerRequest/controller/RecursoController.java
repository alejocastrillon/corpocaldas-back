package co.gov.corpocaldas.AccessLayerRequest.controller;

import co.gov.corpocaldas.AccessLayerRequest.service.RecursoService;
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
public class RecursoController {

    private final RecursoService recursoService;

    public RecursoController(RecursoService recursoService) {
        this.recursoService = recursoService;
    }

    @GetMapping("/{fileName:.+}")
    public void getFile(@PathVariable("fileName") String fileName, HttpServletResponse response) throws IOException {
        Resource resource = recursoService.downloadFile(fileName);
        response.setContentType(MediaType.ALL_VALUE);
        IOUtils.copy(resource.getInputStream(), response.getOutputStream());
    }
}
