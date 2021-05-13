package co.gov.corpocaldas.AccessLayerRequest.entity;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
import com.google.common.base.Preconditions;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
@ApiModel(description = "Entity class to layer information")
public class Layer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @ApiModelProperty(notes = "Layer identifier")
    private int id;
    @NotNull(message = ModelValidationError.NAME_LAYER_NULL)
    @NotBlank(message = ModelValidationError.NAME_LAYER_NULL)
    @ApiModelProperty(notes = "Layer name", required = true)
    private String name;
    @NotNull(message = ModelValidationError.URL_LAYER_NULL)
    @NotBlank(message = ModelValidationError.URL_LAYER_NULL)
    @ApiModelProperty(notes = "Layer url that redirect to the info", required = true)
    private String url;
    @NotNull(message = ModelValidationError.WORKSPACE_NULL)
    @NotBlank(message = ModelValidationError.WORKSPACE_NULL)
    @ApiModelProperty(notes = "Workspace associated to the layer", required = true)
    private String workspace;
    @ApiModelProperty(notes = "Access granted to the layer\n 1. Public layer with loss sensitivity \n 2. Public layer" +
            " with medium sensitivity \n 3. Private layer", required = true)
    private int accessGranted;

    public void setName(String name) {
        Preconditions.checkNotNull(name, ModelValidationError.NAME_LAYER_NULL);
        this.name = name;
    }

    public void setUrl(String url) {
        Preconditions.checkNotNull(url, ModelValidationError.URL_LAYER_NULL);
        this.url = url;
    }

    public void setWorkspace(String workspace) {
        Preconditions.checkNotNull(workspace, ModelValidationError.WORKSPACE_NULL);
        this.workspace = workspace;
    }
}
