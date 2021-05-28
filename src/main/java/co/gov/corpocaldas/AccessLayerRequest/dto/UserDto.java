package co.gov.corpocaldas.AccessLayerRequest.dto;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
import com.google.common.base.Preconditions;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@ApiModel(description = "Entity class to handle user's information")
public class UserDto {

    /**
     * User identifier.
     */
    @ApiModelProperty(notes = "User identifier", required = true)
    private int id;
    /**
     * User name.
     */
    @ApiModelProperty(notes = "User name", required = true)
    private String name;
    /**
     * User's last name.
     */
    @ApiModelProperty(notes = "User's last name", required = true)
    private String lastname;
    /**
     * User email.
     */
    @ApiModelProperty(notes = "User email", required = true)
    private String email;
    /**
     * Username.
     */
    @ApiModelProperty(notes = "Username", required = true)
    private String username;
    /**
     * User password.
     */
    @ApiModelProperty(notes = "User password", required = true)
    private String password;
    /**
     * User role.
     */
    @ApiModelProperty(notes = "User role", required = true)
    private String role;
    /**
     * Determines if the user is enabled.
     */
    @ApiModelProperty(notes = "Determines if the user is enabled", required = false, value = "true")
    private boolean enabled = true;

    public void setName(String name) {
        Preconditions.checkNotNull(name, ModelValidationError.USER_NAME_NOT_NULL);
        this.name = name;
    }

    public void setLastname(String lastname) {
        Preconditions.checkNotNull(lastname, ModelValidationError.USER_LASTNAME_NOT_NULL);
        this.lastname = lastname;
    }

    public void setEmail(String email) {
        Preconditions.checkNotNull(email, ModelValidationError.USER_EMAIL_NOT_NULL);
        this.email = email;
    }

    public void setUsername(String username) {
        Preconditions.checkNotNull(username, ModelValidationError.USER_USERNAME_NOT_NULL);
        this.username = username;
    }

    public void setRole(String role) {
        Preconditions.checkNotNull(role, ModelValidationError.USER_ROLE_NOT_NULL);
        this.role = role;
    }
}
