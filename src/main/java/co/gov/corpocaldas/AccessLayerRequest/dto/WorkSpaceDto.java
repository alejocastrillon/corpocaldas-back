package co.gov.corpocaldas.AccessLayerRequest.dto;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
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
    private WorkSpaceDto parent;
    private List<WorkSpaceDto> childrens;

    public void setName(String name) {
        Preconditions.checkNotNull(name, ModelValidationError.WORKSPACE_NAME_NULL);
        this.name = name;
    }
}