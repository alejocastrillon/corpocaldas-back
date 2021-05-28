package co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class CorpocaldasUnauthorizedException extends RuntimeException {

    public CorpocaldasUnauthorizedException(String message) {
        super(message);
    }
}
