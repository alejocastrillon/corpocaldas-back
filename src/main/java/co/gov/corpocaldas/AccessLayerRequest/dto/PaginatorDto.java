package co.gov.corpocaldas.AccessLayerRequest.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PaginatorDto {

    private List<?> data;
    private long numberRows;

}
