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
    private WorkSpaceDto parent;
    private Long idParent;
    private String nameParent;
    private List<WorkSpaceDto> childrens;

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
