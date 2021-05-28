package co.gov.corpocaldas.AccessLayerRequest.repository;

import co.gov.corpocaldas.AccessLayerRequest.entity.LoginAccessGranted;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.Optional;

@Repository
public interface LoginAccessGrantedRepository extends JpaRepository<LoginAccessGranted, Integer> {

    @Query("SELECT l FROM LoginAccessGranted l WHERE l.token = ?1 AND l.user.id = ?2 AND" +
            " ?3 BETWEEN l.connectionStart AND l.connectionFinished")
    Optional<LoginAccessGranted> validateAccess(String token, int userId, Date moment);

}
