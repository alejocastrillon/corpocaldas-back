package co.gov.corpocaldas.AccessLayerRequest.repository;

import co.gov.corpocaldas.AccessLayerRequest.entity.AccessRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AccessRequestRepository extends JpaRepository<AccessRequest, Integer> {

    Optional<AccessRequest> findByEmailAndTokenAndLayerIdAndApprovedTrue(String email, String token, int layerId);

    List<AccessRequest> findByLayerAccessGrantedAndApprovedIsNull(int accessGranted);

}
