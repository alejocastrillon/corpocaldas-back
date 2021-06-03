package co.gov.corpocaldas.AccessLayerRequest.entity;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
import com.google.common.base.Preconditions;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(notes = "Layer identifier")
    private int id;
    @NotNull(message = ModelValidationError.NAME_LAYER_NULL)
    @NotBlank(message = ModelValidationError.NAME_LAYER_NULL)
    @ApiModelProperty(notes = "Layer name", required = true)
    private String name;
    @NotNull(message = ModelValidationError.URL_LAYER_NULL)
    @NotBlank(message = ModelValidationError.URL_LAYER_NULL)
    @ApiModelProperty(notes = "Layer reference name", required = true)
    private String referenceName;
    @ApiModelProperty(notes = "Workspace associated to the layer", required = true)
    @ManyToOne(optional = false)
    private WorkSpace workspace;
    @ApiModelProperty(notes = "Access granted to the layer\n 1. Public layer with loss sensitivity \n 2. Public layer" +
            " with medium sensitivity \n 3. Private layer", required = true)
    private int accessGranted;
    @ApiModelProperty(notes = "Determines if the layer is visible", required = true)
    private boolean visible = true;
    private String metadataUrl;

    public void setName(String name) {
        Preconditions.checkNotNull(name, ModelValidationError.NAME_LAYER_NULL);
        this.name = name;
    }

    public void setReferenceName(String referenceName) {
        Preconditions.checkNotNull(referenceName, ModelValidationError.URL_LAYER_NULL);
        this.referenceName = referenceName;
    }

    public void setWorkspace(WorkSpace workspace) {
        Preconditions.checkNotNull(workspace, ModelValidationError.WORKSPACE_NULL);
        this.workspace = workspace;
    }
}
