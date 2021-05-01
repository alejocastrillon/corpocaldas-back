package co.gov.corpocaldas.AccessLayerRequest.entity;

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
    @ApiModelProperty(notes = "Layer name", required = true)
    private String name;
    @ApiModelProperty(notes = "Layer url that redirect to the info", required = true)
    private String url;
    @ApiModelProperty(notes = "Access granted to the layer\n 1. Public layer with loss sensitivity \n 2. Public layer" +
            " with medium sensitivity \n 3. Private layer", required = true)
    private int accessGranted;

}
