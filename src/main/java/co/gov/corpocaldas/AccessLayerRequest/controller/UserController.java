package co.gov.corpocaldas.AccessLayerRequest.controller;

import co.gov.corpocaldas.AccessLayerRequest.dto.LoginAccessGrantedDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.UserDto;
import co.gov.corpocaldas.AccessLayerRequest.service.UserService;
import co.gov.corpocaldas.AccessLayerRequest.service.ValidateAccessService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("${api.base.url}/users")
@Api
public class UserController {

    private final UserService userService;

    private final ValidateAccessService validateAccessService;

    public UserController(UserService userService,
            ValidateAccessService validateAccessService) {
        this.userService = userService;
        this.validateAccessService = validateAccessService;
    }

    /**
     * Persist the information of a user.
     * @param token Access token
     * @param userId User identifier associated to access token
     * @param user User information
     * @return User information persisted response
     */
    @ApiOperation(value = "Persist the information of a user",
            response = UserDto.class)
    @ApiResponses(value = {
        @ApiResponse(code = 201, message = "The user information was persisted"
                + " successfully"),
        @ApiResponse(code = 401, message = "Request not authenticated"),
        @ApiResponse(code = 404, message = "User information not valid to be"
                + " persisted")
    })
    @PostMapping()
    public ResponseEntity<UserDto> saveUser(
            @ApiParam(value = "User information", required = true)
            @RequestBody UserDto user) {
        //validateAccessService.validateAccess(token, userId);
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

    /**
     * Update the information of a specific user for searching by its identifier.
     * @param token Access token
     * @param authUserId User identifier associated to access token
     * @param userId User identifier to be updated
     * @param user User information updated
     * @return Response update
     */
    @ApiOperation(value = "Update the information of a specific user for"
            + " searching by its identifier")
    @ApiResponses(value = {
        @ApiResponse(code = 204, message = "User information was updated successful"),
        @ApiResponse(code = 401, message = "Request not authenticated")
    })
    @PutMapping("/{userId}")
    public ResponseEntity<Void> updateUser(
            @ApiParam(value = "Access token", required = true)
            @RequestHeader(value = "authorization-token", required = false) String token,
            @ApiParam(value = "User identifier associated to access token", required = true)
            @RequestHeader(value = "authorization-user", required = false) Integer authUserId,
            @ApiParam(value = "User identifier to be updated", required = true)
            @PathVariable("userId") int userId,
            @ApiParam(value = "User information updated", required = true)
            @RequestBody UserDto user) {
        validateAccessService.validateAccess(token, authUserId);
        userService.updateUser(userId, user);
        return ResponseEntity.noContent().build();
    }

    /**
     * Get the users that matching with the filter values.
     * @param token Access token
     * @param userId User identifier associated to access token
     * @param name Name user filter
     * @param lastname Lastname user filter
     * @param email Email user filter
     * @param username Username filter
     * @param isEnabled User is enabled filter
     * @param page Page number
     * @param size Records size page
     * @return Users list that match with filters
     */
    @ApiOperation(value = "Get the users that matching with the filter values",
            response = PaginatorDto.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Obtains the users that matching with"
                + " the filter values"),
        @ApiResponse(code = 401, message = "Request not authenticated")
    })
    @GetMapping()
    public ResponseEntity<PaginatorDto> getUsers(
            @ApiParam(value = "Access token", required = true)
            @RequestHeader(value = "authorization-token", required = false) String token,
            @ApiParam(value = "User identifier associated to access token", required = true)
            @RequestHeader(value = "authorization-user", required = false) Integer userId,
            @ApiParam(value = "User name filter", required = false)
            @RequestParam(value = "name", required = false) String name,
            @ApiParam(value = "User lastname filter", required = false)
            @RequestParam(value = "lastname", required = false) String lastname,
            @ApiParam(value = "Email user filter", required = false)
            @RequestParam(value = "email", required = false) String email,
            @ApiParam(value = "Username filter", required = false)
            @RequestParam(value = "username", required = false) String username,
            @ApiParam(value = "User is enabled filter", required = true)
            @RequestParam(value = "is_enabled", required = false) Boolean isEnabled,
            @ApiParam(value = "Page number", required = false, defaultValue = "0")
            @RequestParam(value = "page", required = false, defaultValue = "0") int page,
            @ApiParam(value = "Records size page", required = false, defaultValue = "10")
            @RequestParam(value = "size", required = false, defaultValue = "10") int size) {
        return new ResponseEntity<>(userService.getUsers(name, lastname, email,
                username, isEnabled, page, size), HttpStatus.OK);
    }

    /**
     * Login request.
     * @param username Username or email of user
     * @param password Password
     * @return Access token information
     */
    @ApiOperation(value = "Login request", response = LoginAccessGrantedDto.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "The login request was authenticated"
                + " successfully"),
        @ApiResponse(code = 401, message = "Username or password wrong")
    })
    @PostMapping("/login")
    public ResponseEntity<LoginAccessGrantedDto> login(
            @ApiParam(value = "Username or email of user", required = true)
            @RequestParam(value = "username") String username,
            @ApiParam(value = "Password", required = true)
            @RequestParam(value = "password") String password) {
        return new ResponseEntity<>(userService.login(username, password),
                HttpStatus.OK);
    }

    /**
     * Logout request.
     * @param token Access token
     * @param userId User identifier associated to access token
     * @return Void response
     */
    @ApiOperation(value = "Logout request")
    @ApiResponses(value = {
        @ApiResponse(code = 204, message = "The logout request was successful")
    })
    @GetMapping("/logout")
    public ResponseEntity<Void> logout(
            @ApiParam(value = "Access token", required = true)
            @RequestHeader("authorization-token") String token,
            @ApiParam(value = "User identifier associated to access token", required = true)
            @RequestHeader("authorization-user") Integer userId) {
        userService.logout(token, userId);
        return ResponseEntity.noContent().build();
    }

}
