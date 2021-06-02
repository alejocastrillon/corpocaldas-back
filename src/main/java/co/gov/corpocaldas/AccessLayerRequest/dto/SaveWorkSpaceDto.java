package co.gov.corpocaldas.AccessLayerRequest.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SaveWorkSpaceDto {
    private long id;
    private String name;
    private WorkSpaceDto parent;
    private Long idParent;
    private String nameParent;
}
