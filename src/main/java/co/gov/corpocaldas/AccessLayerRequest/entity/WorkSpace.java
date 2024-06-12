package co.gov.corpocaldas.AccessLayerRequest.entity;

import java.io.Serializable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class WorkSpace implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @ManyToOne
    private WorkSpace parent;
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "parent")
    private List<WorkSpace> childrens;
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "workspace")
    private List<Layer> layers;

}
