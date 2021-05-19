package co.gov.corpocaldas.AccessLayerRequest.constants;

public class ModelValidationError {

    public static final String NAME_NULL = "El nombre del usuario no debe estar vacío";

    public static final String NAME_COMPANY_NULL = "El nombre de la compañia o entidad no debe estar vacío";

    public static final String EMAIL_ACCESS_REQUEST_NULL = "El correo electrónico no debe estar vacío";

    public static final String EMAIL_BAD_FORMAT = "El correo electrónico es invalido";

    public static final String EMAIL_REGEX = "^(.+)@(.+)$";

    public static final String DESCRIPTION_ACCESS_REQUEST_NULL = "La observación no debe estar vacía";

    public static final String NAME_LAYER_NULL = "El nombre de la capa no debe estar vacío";

    public static final String URL_LAYER_NULL = "La URL de la capa no debe estar vacía";

    public static final String WORKSPACE_NULL = "El espacio de trabajo asociado a la capa no debe estar vacío";

    public static final String WORKSPACE_NAME_NULL = "El nombre del espacio de trabajo no debe estar vacío";

    public static final String WORKSPACE_MISMATCH_MESSAGE = "El identificador proveído por la ruta no coincide con el" +
            " identificador interno";

    public static final String WORKSPACE_NOT_FOUND = "No se encontró espacio de trabajo con el identificador %d";

}
