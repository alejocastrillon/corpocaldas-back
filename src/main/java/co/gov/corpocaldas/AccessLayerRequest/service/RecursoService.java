package co.gov.corpocaldas.AccessLayerRequest.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface RecursoService {

    /**
     * Upload file to server.
     * @param file File
     * @return File name
     */
    String uploadFile(MultipartFile file);

    /**
     * Download a specific file by searching for its name.
     * @param fileName File name
     * @return File
     */
    Resource downloadFile(String fileName);

}
