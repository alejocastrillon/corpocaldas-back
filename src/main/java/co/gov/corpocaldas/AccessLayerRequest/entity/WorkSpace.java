package co.gov.corpocaldas.AccessLayerRequest.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class WorkSpace {

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
