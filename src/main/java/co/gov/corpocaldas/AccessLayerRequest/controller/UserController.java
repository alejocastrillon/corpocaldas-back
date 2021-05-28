package co.gov.corpocaldas.AccessLayerRequest.controller;

import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.UserDto;
import co.gov.corpocaldas.AccessLayerRequest.service.UserService;
import io.swagger.annotations.Api;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.base.url}/users")
@Api
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping()
    public ResponseEntity<UserDto> saveUser(@RequestBody UserDto user) {
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<Void> updateUser(@PathVariable("userId") int userId, @RequestBody UserDto user) {
        userService.updateUser(userId, user);
        return ResponseEntity.noContent().build();
    }

    @GetMapping()
    public ResponseEntity<PaginatorDto> getUsers(@RequestParam(value = "name", required = false) String name,
                                                 @RequestParam(value = "lastname", required = false) String lastname,
                                                 @RequestParam(value = "email", required = false) String email,
                                                 @RequestParam(value = "username", required = false) String username,
                                                 @RequestParam(value = "is_enabled", required = false) Boolean isEnabled,
                                                 @RequestParam(value = "page", required = false, defaultValue = "0") int page,
                                                 @RequestParam(value = "size", required = false, defaultValue = "10") int size) {
        return new ResponseEntity<>(userService.getUsers(name, lastname, email, username, isEnabled, page, size), HttpStatus.OK);
    }


}