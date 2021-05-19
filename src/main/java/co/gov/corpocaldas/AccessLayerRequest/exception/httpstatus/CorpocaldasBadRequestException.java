package co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class CorpocaldasBadRequestException extends RuntimeException {

    public CorpocaldasBadRequestException(String message) {
        super(message);
    }

}
