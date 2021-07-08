package co.gov.corpocaldas.AccessLayerRequest.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class LiteWorkspaceDto {

    private long id;
    private String name;
    @JsonBackReference
    private LiteWorkspaceDto parent;
    private Long idParent;
    private String nameParent;
    @JsonBackReference
    private List<WorkSpaceDto> childrens;
    @JsonBackReference
    private List<LayerDto> layers;
    private boolean hasChildren;

    public Long getIdParent() {
        return this.parent != null ? this.parent.getId() : null;
    }

    public String getNameParent() {
        return this.parent != null ? this.parent.getName() : null;
    }

    public void setIdParent(Long idParent) {
        this.idParent = idParent;
        if (idParent != null) {
            this.parent = new LiteWorkspaceDto();
            this.parent.id = idParent;
        }
    }

    public boolean isHasChildren() {
        return (this.childrens != null && !this.childrens.isEmpty())
                || (this.layers != null && !this.layers.isEmpty());
    }
}
