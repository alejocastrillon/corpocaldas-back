package co.gov.corpocaldas.AccessLayerRequest.exception;

import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.*;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@ControllerAdvice
public class AccessLayerExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    @ExceptionHandler(value = {ConstraintViolationException.class, DataIntegrityViolationException.class})
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException e, HttpHeaders headers, HttpStatus status, WebRequest request) {
        List<String> details = new ArrayList<>();
        for (ObjectError error: e.getBindingResult().getAllErrors()) {
            details.add(error.getDefaultMessage());
        }
        ExceptionResponse exceptionResponse = new ExceptionResponse("Layer invalid information", new Date(),
                details, request.getDescription(false));
        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = {LayerNotFoundException.class})
    public ResponseEntity<ExceptionResponse> handleLayerNotFound(LayerNotFoundException e, WebRequest request) {
        List<String> details = new ArrayList<>();
        details.add(e.getLocalizedMessage());
        ExceptionResponse exceptionResponse = new ExceptionResponse("Layer not found", new Date(), details,
                request.getDescription(false));
        return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = {TokenMismatch.class})
    public ResponseEntity<ExceptionResponse> handleTokenMismatch(TokenMismatch e, WebRequest request) {
        List<String> details = new ArrayList<>();
        details.add(e.getLocalizedMessage());
        ExceptionResponse exceptionResponse = new ExceptionResponse("Token mismatch", new Date(), details,
                request.getDescription(false));
        return new ResponseEntity<>(exceptionResponse, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(value = {LayerUpdateBadRequestException.class})
    public ResponseEntity<ExceptionResponse> handleLayerUpdatedBadRequest(LayerUpdateBadRequestException e, WebRequest request) {
        List<String> details = new ArrayList<>();
        details.add(e.getLocalizedMessage());
        ExceptionResponse exceptionResponse = new ExceptionResponse("Layer update bad request", new Date(),
                details, request.getDescription(false));
        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = {RequestAccessBadRequestException.class})
    public ResponseEntity<ExceptionResponse> handleRequestAccessUpdateBadRequest(RequestAccessBadRequestException e, WebRequest request) {
        List<String> details = new ArrayList<>();
        details.add(e.getLocalizedMessage());
        ExceptionResponse exceptionResponse = new ExceptionResponse("Request access update bad request",
                new Date(), details, request.getDescription(false));
        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = {MailSenderException.class})
    public ResponseEntity<ExceptionResponse> handleRequestSendMailException(MailSenderException e, WebRequest request) {
        List<String> details = new ArrayList<>();
        details.add(e.getLocalizedMessage());
        ExceptionResponse exceptionResponse = new ExceptionResponse("Failed to send mail message", new Date(),
                details, request.getDescription(false));
        return new ResponseEntity<>(exceptionResponse,HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
