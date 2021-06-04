package co.gov.corpocaldas.AccessLayerRequest.service.impl;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.CorpocaldasBadRequestException;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.CorpocaldasNotFoundException;
import co.gov.corpocaldas.AccessLayerRequest.service.RecursoService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.Objects;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class RecursoServiceImpl implements RecursoService {

    private final String urlFolder;

    private final Logger logger = Logger.getLogger(RecursoServiceImpl.class.getName());

    public RecursoServiceImpl(@Value("${url.folder}") String urlFolder) {
        this.urlFolder = urlFolder;
    }

    @Override
    public String uploadFile(MultipartFile file) {
        if (!file.isEmpty()) {
            String typeFile = file.getContentType().substring(0, file.getContentType().indexOf("/"));
            logger.log(Level.INFO, typeFile);
            File folder = createFolder();
            return copyFileIntoFolder(folder, file);
        } else {
            throw new CorpocaldasBadRequestException(ModelValidationError.FILE_EMPTY_EXCEPTION_MESSAGE);
        }
    }

    private File createFolder() {
        File folder = new File(this.urlFolder);
        if (!folder.exists()) {
            folder.mkdir();
        }
        return folder;
    }

    private String copyFileIntoFolder(File folder, MultipartFile file) {
        String fileName = file.getOriginalFilename();
        Objects.requireNonNull(fileName);
        if (new File(folder, fileName).exists()) {
            String name = String.valueOf(new Date().getTime());
            String extension = fileName.substring(fileName.indexOf("."));
            fileName = name + extension;
        }
        Path pathFile = Paths.get(folder.toURI()).resolve(fileName).toAbsolutePath();
        try {
            Files.copy(file.getInputStream(), pathFile);
            return fileName;
        } catch (IOException e) {
            logger.log(Level.SEVERE, ModelValidationError.FILE_COPY_EXCEPTION_MESSAGE, e);
            throw new CorpocaldasBadRequestException(ModelValidationError.FILE_COPY_EXCEPTION_MESSAGE);
        }
    }

    @Override
    public Resource downloadFile(String fileName) {
        if (fileName != null) {
            Path pathFile = Paths.get(urlFolder).resolve(fileName).toAbsolutePath();
            try {
                Resource resource = new UrlResource(pathFile.toUri());
                if (!resource.exists()) {
                    throw new CorpocaldasNotFoundException(ModelValidationError.FILE_NOT_FOUND_EXCEPTION_MESSAGE);
                } else {
                    return resource;
                }
            } catch (MalformedURLException e) {
                logger.log(Level.SEVERE, ModelValidationError.FILE_NOT_FOUND_EXCEPTION_MESSAGE, e);
                throw new CorpocaldasNotFoundException(ModelValidationError.FILE_NOT_FOUND_EXCEPTION_MESSAGE);
            }
        } else {
            throw new CorpocaldasBadRequestException(ModelValidationError.FILE_NAME_NULL_EXCEPTION_MESSAGE);
        }
    }
}
