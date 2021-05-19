package co.gov.corpocaldas.AccessLayerRequest.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

/**
 *
 */
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
