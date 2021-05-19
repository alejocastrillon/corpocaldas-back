package co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class CorpocaldasNotFoundException extends RuntimeException {

    public CorpocaldasNotFoundException(String message) {
        super(message);
    }
}
