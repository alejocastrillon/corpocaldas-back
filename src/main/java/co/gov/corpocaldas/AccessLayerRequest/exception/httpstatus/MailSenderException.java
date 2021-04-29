package co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class MailSenderException extends RuntimeException {

    public MailSenderException(String message) {
        super(message);
    }

}
