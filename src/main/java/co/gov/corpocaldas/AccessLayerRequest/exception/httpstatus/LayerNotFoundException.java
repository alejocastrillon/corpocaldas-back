package co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class LayerNotFoundException extends RuntimeException {

    public LayerNotFoundException(String message) {
        super(message);
    }
}
