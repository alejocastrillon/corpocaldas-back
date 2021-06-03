package co.gov.corpocaldas.AccessLayerRequest.entity;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.ManyToOne;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Entity class for access request's information")
public class AccessRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotNull(message = ModelValidationError.NAME_NULL)
    @NotBlank(message = ModelValidationError.NAME_NULL)
    private String name;
    @NotNull(message = ModelValidationError.NAME_COMPANY_NULL)
    @NotBlank(message = ModelValidationError.NAME_COMPANY_NULL)
    private String company;
    @NotNull(message = ModelValidationError.EMAIL_ACCESS_REQUEST_NULL)
    @NotBlank(message = ModelValidationError.EMAIL_ACCESS_REQUEST_NULL)
    private String email;
    @NotNull(message = ModelValidationError.DESCRIPTION_ACCESS_REQUEST_NULL)
    @NotBlank(message = ModelValidationError.DESCRIPTION_ACCESS_REQUEST_NULL)
    private String description;
    @ManyToOne(optional = false)
    private Layer layer;

}
