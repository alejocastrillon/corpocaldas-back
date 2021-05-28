package co.gov.corpocaldas.AccessLayerRequest.repository;

import co.gov.corpocaldas.AccessLayerRequest.entity.LoginAccessGranted;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LoginAccessGrantedRepository extends JpaRepository<LoginAccessGranted, Integer> {

    Optional<LoginAccessGranted> findByTokenAndUserId(String token, int userId);

}
