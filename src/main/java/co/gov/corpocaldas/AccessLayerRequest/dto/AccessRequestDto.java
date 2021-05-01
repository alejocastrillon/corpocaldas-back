package co.gov.corpocaldas.AccessLayerRequest.dto;

import co.gov.corpocaldas.AccessLayerRequest.entity.Layer;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "DTO class for access request's information")
public class AccessRequestDto {

    @ApiModelProperty(notes = "Access request identifier")
    private int id;
    @ApiModelProperty(notes = "Email that request the access", required = true)
    private String email;
    @ApiModelProperty(notes = "Description of the use that the user will give the layer")
    private String observacion;
    @ApiModelProperty(notes = "Layer identifier that the user wants to access", required = true)
    private int idLayer;
    @ApiModelProperty(notes = "Layer name", required = true)
    private String nameLayer;
    @ApiModelProperty(notes = "Token generated and provided by the platform")
    private String token;
    @ApiModelProperty(notes = "Determine if the access request has been approved")
    private Boolean approved;

}
