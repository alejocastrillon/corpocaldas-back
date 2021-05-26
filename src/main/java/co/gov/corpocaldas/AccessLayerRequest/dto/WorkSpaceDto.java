package co.gov.corpocaldas.AccessLayerRequest.dto;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
import co.gov.corpocaldas.AccessLayerRequest.service.util.Utility;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.google.common.base.Preconditions;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
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
    @JsonBackReference
    private List<WorkSpaceDto> childrens;
    private boolean hasChildren;
    private List<ChildWorkSpaceDto> workspaceChildrens;
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

    public boolean isHasChildren() {
        return (this.childrens != null && !this.childrens.isEmpty()) || (this.layers != null && !this.layers.isEmpty());
    }

    public List<ChildWorkSpaceDto> getWorkspaceChildrens() {
        if (this.childrens != null) {
            List<ChildWorkSpaceDto> childrens = new ArrayList<>();
            for (WorkSpaceDto workspace: this.childrens) {
                childrens.add(new ChildWorkSpaceDto(workspace.getId(), workspace.getName(), workspace.isHasChildren()));
            }
            return childrens;
        }
        return null;
    }
}