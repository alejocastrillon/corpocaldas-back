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

    public static final String USER_NAME_NOT_NULL = "El nombre del usuario no puede estar vacío";

    public static final String USER_LASTNAME_NOT_NULL = "El apellido del usuario no puede estar vacío";

    public static final String USER_EMAIL_NOT_NULL = "El correo electrónico del usuario no puede estar vacío";

    public static final String USER_USERNAME_NOT_NULL = "El username del usuario no puede estar vacío";

    public static final String USER_PASSWORD_NOT_NULL = "La contraseña del usuario no puede estar vacía";

    public static final String USER_ROLE_NOT_NULL = "El rol del usuario no puede estar vacío";

    public static final String LOGIN_ACCESS_TOKEN_NULL = "El token de acceso no puede estar vacío";

    public static final String LOGIN_CONNECTION_STARTED_NULL = "El dia y hora en la cual que comenzó la conexión no" +
            " puede estar vacío";

}
