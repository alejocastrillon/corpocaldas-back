package co.gov.corpocaldas.AccessLayerRequest.dto;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.google.common.base.Preconditions;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class WorkSpaceDto {

    private long id;
    private String name;
    @JsonBackReference
    private WorkSpaceDto parent;
    private Long idParent;
    private String nameParent;
    private List<WorkSpaceDto> childrens;
    private List<LayerDto> layers;

    public Long getIdParent() {
        return this.parent != null ? this.parent.getId() : null;
    }

    public String getNameParent() {
        return this.parent != null ? this.parent.getName() : null;
    }

    public void setIdParent(Long idParent) {
        this.idParent = idParent;
        if (idParent != null) {
            this.parent = new WorkSpaceDto();
            this.parent.id = idParent;
        }
    }
}