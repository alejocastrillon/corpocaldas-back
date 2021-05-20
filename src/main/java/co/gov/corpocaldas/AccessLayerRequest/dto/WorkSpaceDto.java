package co.gov.corpocaldas.AccessLayerRequest.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class WorkSpaceDto {

    private long id;
    private String name;
    private WorkSpaceDto parent;
}
