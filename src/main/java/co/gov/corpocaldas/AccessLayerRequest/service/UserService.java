package co.gov.corpocaldas.AccessLayerRequest.service;

import co.gov.corpocaldas.AccessLayerRequest.dto.LoginAccessGrantedDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.UserDto;

/**
 * User service interface.
 */
public interface UserService {

    /**
     * Record user information.
     * @param user User information
     * @return User information recorded
     */
    UserDto saveUser(UserDto user);

    /**
     * Apply filter on the users information.
     * @param name Name value filter
     * @param lastname Last name value filter
     * @param email Email value filter
     * @param username Username value filter
     * @param isEnabled Enabled users value filter
     * @param page Number of page for pagination
     * @param size Quantity of items for page
     * @return Users information that have match with the values filter
     */
    PaginatorDto getUsers(String name, String lastname, String email, String username, Boolean isEnabled, int page,
                          int size);

    /**
     * Update the specific user information.
     * @param userId User identifier
     * @param user Updated user information
     */
    void updateUser(int userId, UserDto user);

    /**
     * Make login request.
     * @param username Username or email
     * @param password User's password
     * @return If login request was authorized then return true
     */
    LoginAccessGrantedDto login(String username, String password);

    /**
     * Get the information of a specific user.
     * @param userId User identifier
     * @return User's information
     */
    UserDto getUser(int userId);

    /**
     * Delete the information of a specific user.
     * @param userId User information
     */
    void deleteUser(int userId);

}
