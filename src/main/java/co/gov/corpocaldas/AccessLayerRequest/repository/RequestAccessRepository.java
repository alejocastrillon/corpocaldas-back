package co.gov.corpocaldas.AccessLayerRequest.repository;

import co.gov.corpocaldas.AccessLayerRequest.entity.RequestAccess;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RequestAccessRepository extends JpaRepository<RequestAccess, Integer> {

    Optional<RequestAccess> findByEmailAndTokenAndLayerIdAndApprovedTrue(String email, String token, int layerId);

    List<RequestAccess> findByLayerAccessGrantedAndApprovedIsNull(int accessGranted);

}
