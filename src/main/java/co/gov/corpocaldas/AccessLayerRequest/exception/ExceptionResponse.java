package co.gov.corpocaldas.AccessLayerRequest.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class ExceptionResponse {

    private String message;
    private Date timeStamp;
    private List<String> details;
    private String requestUrl;

}
