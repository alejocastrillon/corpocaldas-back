package co.gov.corpocaldas.AccessLayerRequest.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Class DTO for handle information about layers.
 */
@Getter
@Setter
@NoArgsConstructor
@ApiModel(description = "Class DTO for handle information about layers")
public class LayerDto {

    /**
     * Layer identifier.
     */
    @ApiModelProperty(notes = "Layer identifier")
    private int id;
    /**
     * Layer name.
     */
    @ApiModelProperty(notes = "Layer name", required = true)
    private String name;
    /**
     * Layer reference name.
     */
    @ApiModelProperty(notes = "Layer reference name", required = true)
    private String referenceName;
    /**
     * Workspace identifier associated at layer.
     */
    @ApiModelProperty(notes = "Workspace identifier associated at layer", required = true)
    private long idWorkspace;
    /**
     * Workspace name associated at layer.
     */
    @ApiModelProperty(notes = "Workspace name associated at layer")
    private String nameWorkspace;
    /**
     * Access granted to the layer.
     * 1. Public layer
     * 2. Private layer
     */
    @ApiModelProperty(notes = "Access granted to the layer\n 1. Public layer \n 2. Private layer", required = true)
    private int accessGranted;
    /**
     * Determines if the layer is visible.
     */
    @ApiModelProperty(notes = "Determines if the layer is visible", required = true)
    private boolean visible;

}
