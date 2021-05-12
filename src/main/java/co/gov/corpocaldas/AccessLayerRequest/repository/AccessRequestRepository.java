package co.gov.corpocaldas.AccessLayerRequest.repository;

import co.gov.corpocaldas.AccessLayerRequest.entity.AccessRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AccessRequestRepository extends JpaRepository<AccessRequest, Integer> {

    @Query("SELECT a FROM AccessRequest a WHERE (:name IS NULL OR a.name LIKE %:name%)" +
            " AND (:company IS NULL OR a.company LIKE %:company%) AND (:email IS NULL OR a.email LIKE %:email%)" +
            " AND (:layername IS NULL OR a.layer.name LIKE %:layername%)" +
            " AND (:layeraccessgranted IS NULL OR a.layer.accessGranted = :layeraccessgranted)" +
            " AND (:approved IS NULL OR a.approved = :approved ")
    Page<AccessRequest> getAll(@Param("name") String name, @Param("company") String company,
                               @Param("email") String email, @Param("layername") String layername,
                               @Param("layeraccessgranted") Integer layeraccessgranted,
                               @Param("approved") Boolean approved, Pageable pageable);

    Optional<AccessRequest> findByEmailAndTokenAndLayerIdAndApprovedTrue(String email, String token, int layerId);

    List<AccessRequest> findByLayerAccessGrantedAndApprovedIsNull(int accessGranted);

}
