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

    @Query("SELECT l FROM Layer l WHERE (:name IS NULL OR l.name LIKE %:name%) AND (:workspace IS NULL OR l.workspace LIKE %:workspace%)" +
            " AND (:accessGranted IS NULL OR l.accessGranted = :accessGranted)")
    Page<Layer> getAll(@Param("name") String name, @Param("workspace") String workspace,
                       @Param("accessGranted") Integer accessGranted, Pageable pageable);

    Optional<Layer> findByName(String name);

}
