package co.gov.corpocaldas.AccessLayerRequest.entity;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * Entity class to handle the information of the login access authorized.
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
public class LoginAccessGranted {

    /**
     * Identifier of the login access authorized.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    /**
     * Token associated to the login access authorized.
     */
    @NotNull(message = ModelValidationError.LOGIN_ACCESS_TOKEN_NULL)
    @NotBlank(message = ModelValidationError.LOGIN_ACCESS_TOKEN_NULL)
    private String token;
    /**
     * Date and time that the login access was requested.
     */
    @NotNull(message = ModelValidationError.LOGIN_CONNECTION_STARTED_NULL)
    @NotBlank(message = ModelValidationError.LOGIN_CONNECTION_STARTED_NULL)
    private Date connectionStart;
    /**
     * Date and time that the login access was finished.
     */
    private Date connectionFinished;
    /**
     * User associated to the login access authorized.
     */
    @ManyToOne(optional = false)
    private User user;

}
