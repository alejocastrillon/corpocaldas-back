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
public class ShowWorkSpaceDto {

    private long id;
    private String name;
    @JsonBackReference
    private ShowWorkSpaceDto parent;
    private Long idParent;
    private String nameParent;
    private List<ShowWorkSpaceDto> childrens;
    private List<LayerDto> layers;

    public void setName(String name) {
        Preconditions.checkNotNull(name, ModelValidationError.WORKSPACE_NAME_NULL);
        this.name = name;
    }

    public Long getIdParent() {
        return this.parent != null ? this.parent.getId() : null;
    }

    public String getNameParent() {
        return this.parent != null ? this.parent.getName() : null;
    }

    public void setIdParent(Long idParent) {
        this.idParent = idParent;
    }
}