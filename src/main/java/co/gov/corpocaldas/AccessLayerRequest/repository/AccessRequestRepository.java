package co.gov.corpocaldas.AccessLayerRequest.repository;

import co.gov.corpocaldas.AccessLayerRequest.entity.AccessRequest;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface AccessRequestRepository extends JpaRepository<AccessRequest, Integer> {

    @Query("SELECT a FROM AccessRequest a WHERE (:name IS NULL OR UPPER(a.name)"
            + " LIKE %:name%) AND (:company IS NULL OR UPPER(a.company) LIKE"
            + " %:company%) AND (:email IS NULL OR UPPER(a.email) LIKE %:email%)" +
            " AND (:layername IS NULL OR UPPER(a.layer.name) LIKE %:layername%)" +
            " AND (:layeraccessgranted IS NULL OR a.layer.accessGranted = :layeraccessgranted)")
    Page<AccessRequest> getAll(@Param("name") String name, @Param("company") String company,
                               @Param("email") String email, @Param("layername") String layername,
                               @Param("layeraccessgranted") Integer layeraccessgranted, Pageable pageable);
    
    @Query("SELECT a FROM AccessRequest a WHERE (:name IS NULL OR UPPER(a.name)"
            + " LIKE %:name%) AND (:company IS NULL OR UPPER(a.company) LIKE"
            + " %:company%) AND (:email IS NULL OR UPPER(a.email) LIKE %:email%)" +
            " AND (:layername IS NULL OR UPPER(a.layer.name) LIKE %:layername%)" +
            " AND (:layeraccessgranted IS NULL OR a.layer.accessGranted = :layeraccessgranted)")
    List<AccessRequest> getAllInList(@Param("name") String name, @Param("company") String company,
                               @Param("email") String email, @Param("layername") String layername,
                               @Param("layeraccessgranted") Integer layeraccessgranted);

}
