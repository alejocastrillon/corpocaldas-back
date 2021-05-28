package co.gov.corpocaldas.AccessLayerRequest.repository;

import co.gov.corpocaldas.AccessLayerRequest.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("SELECT u FROM User u WHERE u.username = :value OR u.email = :value AND u.password = :password")
    Optional<User> getUserForLogin(@Param("value") String value, @Param("password") String password);

    @Query("SELECT u FROM User u WHERE (:name IS NULL OR u.name LIKE %:name%)" +
            " AND (:lastname IS NULL OR u.lastname LIKE %:lastname%) AND (:email IS NULL OR u.email LIKE %:email%)" +
            " AND (:username IS NULL OR u.username LIKE %:username) AND (:isEnabled IS NULL OR u.enabled = :isEnabled)")
    Page<User> getAll(@Param("name") String name, @Param("lastname") String lastname, @Param("email") String email,
                      @Param("username") String username, @Param("isEnabled") Boolean isEnabled, Pageable pageable);

}
