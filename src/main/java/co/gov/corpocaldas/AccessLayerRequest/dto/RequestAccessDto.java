package co.gov.corpocaldas.AccessLayerRequest.dto;

import co.gov.corpocaldas.AccessLayerRequest.entity.Layer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RequestAccessDto {

    private int id;
    private String email;
    private String observacion;
    private int idLayer;
    private String nameLayer;
    private String token;
    private Boolean approved;

}
