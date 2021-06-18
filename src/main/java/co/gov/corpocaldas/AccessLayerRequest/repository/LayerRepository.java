package co.gov.corpocaldas.AccessLayerRequest.repository;

import co.gov.corpocaldas.AccessLayerRequest.entity.Layer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LayerRepository extends JpaRepository<Layer, Integer> {

    @Query("SELECT l FROM Layer l WHERE (:name IS NULL OR UPPER(l.name) LIKE %:name%)" +
            " AND (:workspace IS NULL OR UPPER(l.workspace.name) LIKE %:workspace%)" +
            " AND (:accessGranted IS NULL OR l.accessGranted = :accessGranted)" +
            " AND (:visible IS NULL OR l.visible = :visible)")
    Page<Layer> getAll(@Param("name") String name, @Param("workspace") String workspace,
                       @Param("accessGranted") Integer accessGranted,
                       @Param("visible") Boolean visible, Pageable pageable);

    Optional<Layer> findByName(String name);

}
