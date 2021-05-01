package co.gov.corpocaldas.AccessLayerRequest.entity;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Entity class for access request's information")
public class AccessRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String email;
    private String observacion;
    @ManyToOne
    private Layer layer;
    private String token;
    private Boolean approved;

}
