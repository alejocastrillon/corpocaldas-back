package co.gov.corpocaldas.AccessLayerRequest.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface RecursoService {

    String uploadFile(MultipartFile file);

    Resource downloadFile(String fileName);

}
