package co.gov.corpocaldas.AccessLayerRequest.service.util;

import org.modelmapper.ModelMapper;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

public abstract class Utility {

    private Utility() {}

    private static final ModelMapper mapper = new ModelMapper();

    public static List<?> parseList(List<?> dataSource, Type destination) {
        List<?> dataParsed = null;
        if (dataSource != null && !dataSource.isEmpty()) {
            dataParsed = new ArrayList<>();
            for (Object data: dataSource) {
                dataParsed.add(mapper.map(data, destination));
            }
        }
        return dataParsed;
    }
}
