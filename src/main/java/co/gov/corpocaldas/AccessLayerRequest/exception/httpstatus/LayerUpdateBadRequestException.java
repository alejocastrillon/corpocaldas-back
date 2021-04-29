package co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class LayerUpdateBadRequestException extends RuntimeException {

    public LayerUpdateBadRequestException(String message) {
        super(message);
    }
}
