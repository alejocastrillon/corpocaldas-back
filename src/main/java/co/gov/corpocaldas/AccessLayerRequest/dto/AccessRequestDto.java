package co.gov.corpocaldas.AccessLayerRequest.dto;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
import com.google.common.base.Preconditions;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.regex.Pattern;


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
    @ApiModelProperty(notes = "Name of the user that require the access", required = true)
    private String name;
    @ApiModelProperty(notes = "Name of company or entity associated to the request", required = true)
    private String company;
    @ApiModelProperty(notes = "Description of the use that the user will give the layer", required = true)
    private String description;
    @ApiModelProperty(notes = "Layer identifier that the user wants to access", required = true)
    private int idLayer;
    @ApiModelProperty(notes = "Layer name", required = true)
    private String nameLayer;
    @ApiModelProperty(notes = "Layer access granted")
    private int accessGrantedLayer;
    @ApiModelProperty(notes = "Token generated and provided by the platform")
    private String token;
    @ApiModelProperty(notes = "Determine if the access request has been approved")
    private Boolean approved;

    public void setName(String name) {
        Preconditions.checkNotNull(name, ModelValidationError.NAME_NULL);
        this.name = name;
    }

    public void setCompany(String company) {
        Preconditions.checkNotNull(company, ModelValidationError.NAME_COMPANY_NULL);
        this.company = company;
    }

    public void setEmail(String email) {
        Pattern pattern = Pattern.compile(ModelValidationError.EMAIL_REGEX);
        Preconditions.checkNotNull(email, ModelValidationError.EMAIL_ACCESS_REQUEST_NULL);
        Preconditions.checkArgument(pattern.matcher(email).matches(), ModelValidationError.EMAIL_BAD_FORMAT);
        this.email = email;
    }

    public void setDescription(String description) {
        Preconditions.checkNotNull(description, ModelValidationError.DESCRIPTION_ACCESS_REQUEST_NULL);
        this.description = description;
    }

    public void setNameLayer(String nameLayer) {
        Preconditions.checkNotNull(nameLayer, ModelValidationError.NAME_LAYER_NULL);
        this.nameLayer = nameLayer;
    }
}
