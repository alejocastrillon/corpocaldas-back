package co.gov.corpocaldas.AccessLayerRequest.entity;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.io.Serializable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



/**
 * Entity class to handle user's information.
 */
@Entity
@Table(name = "sec_user")
@Getter
@Setter
@NoArgsConstructor
public class User implements Serializable {

    /**
     * User identifier.
     */
    @Id
    private int id;
    /**
     * User name.
     */
    @NotNull(message = ModelValidationError.USER_NAME_NOT_NULL)
    @NotBlank(message = ModelValidationError.USER_NAME_NOT_NULL)
    private String name;
    /**
     * User's last name.
     */
    @NotNull(message = ModelValidationError.USER_LASTNAME_NOT_NULL)
    @NotBlank(message = ModelValidationError.USER_LASTNAME_NOT_NULL)
    private String lastname;
    /**
     * User email.
     */
    @NotNull(message = ModelValidationError.USER_EMAIL_NOT_NULL)
    @NotBlank(message = ModelValidationError.USER_EMAIL_NOT_NULL)
    private String email;
    /**
     * Username.
     */
    @NotNull(message = ModelValidationError.USER_USERNAME_NOT_NULL)
    @NotBlank(message = ModelValidationError.USER_USERNAME_NOT_NULL)
    private String username;
    /**
     * User password.
     */
    @NotNull(message = ModelValidationError.USER_PASSWORD_NOT_NULL)
    @NotBlank(message = ModelValidationError.USER_PASSWORD_NOT_NULL)
    private String password;
    /**
     * User role.
     */
    @NotNull(message = ModelValidationError.USER_ROLE_NOT_NULL)
    @NotBlank(message = ModelValidationError.USER_ROLE_NOT_NULL)
    private String role;
    /**
     * Determines if the user is enabled.
     */
    private boolean enabled = true;

}
