package co.gov.corpocaldas.AccessLayerRequest.controller;

import co.gov.corpocaldas.AccessLayerRequest.dto.LoginAccessGrantedDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.UserDto;
import co.gov.corpocaldas.AccessLayerRequest.service.UserService;
import co.gov.corpocaldas.AccessLayerRequest.service.ValidateAccessService;
import io.swagger.annotations.Api;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.base.url}/users")
@Api
public class UserController {

    private final UserService userService;

    private final ValidateAccessService validateAccessService;

    public UserController(UserService userService, ValidateAccessService validateAccessService) {
        this.userService = userService;
        this.validateAccessService = validateAccessService;
    }

    @PostMapping()
    public ResponseEntity<UserDto> saveUser(@RequestHeader(value = "authorization-token", required = false) String token,
                                            @RequestHeader(value = "authorization-user", required = false) Integer userId,
                                            @RequestBody UserDto user) {
        //validateAccessService.validateAccess(token, userId);
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<Void> updateUser(@RequestHeader(value = "authorization-token", required = false) String token,
                                           @RequestHeader(value = "authorization-user", required = false) Integer authUserId,
                                           @PathVariable("userId") int userId, @RequestBody UserDto user) {
        //validateAccessService.validateAccess(token, authUserId);
        userService.updateUser(userId, user);
        return ResponseEntity.noContent().build();
    }

    @GetMapping()
    public ResponseEntity<PaginatorDto> getUsers(
            @RequestHeader(value = "authorization-token", required = false) String token,
            @RequestHeader(value = "authorization-user", required = false) Integer userId,
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "lastname", required = false) String lastname,
            @RequestParam(value = "email", required = false) String email,
            @RequestParam(value = "username", required = false) String username,
            @RequestParam(value = "is_enabled", required = false) Boolean isEnabled,
            @RequestParam(value = "page", required = false, defaultValue = "0") int page,
            @RequestParam(value = "size", required = false, defaultValue = "10") int size) {
        return new ResponseEntity<>(userService.getUsers(name, lastname, email, username, isEnabled, page, size), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginAccessGrantedDto> login(
            @RequestParam(value = "username") String username, @RequestParam(value = "password") String password) {
        return new ResponseEntity<>(userService.login(username, password), HttpStatus.OK);
    }


}
