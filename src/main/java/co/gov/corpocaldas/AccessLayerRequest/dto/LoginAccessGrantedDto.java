package co.gov.corpocaldas.AccessLayerRequest.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Calendar;

/**
 * DTO class to handle login access authorized information.
 */
@Getter
@Setter
@NoArgsConstructor
@ApiModel(description = "DTO class to handle login access authorized information")
public class LoginAccessGrantedDto {

    /**
     * Token access.
     */
    @ApiModelProperty(notes = "Token access")
    private String token;
    /**
     * Date in that connection has started.
     */
    @ApiModelProperty(notes = "Date in that connection has started")
    private Calendar connectionStart;
    /**
     * Date in that connection has finished.
     */
    @ApiModelProperty(notes = "Date in that connection has finished")
    private Calendar connectionFinished;
    /**
     * User identifier associated to the login access.
     */
    @ApiModelProperty(notes = "User identifier associated to the login access")
    private int userId;

}
