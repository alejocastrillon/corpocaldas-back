package co.gov.corpocaldas.AccessLayerRequest.repository;

import co.gov.corpocaldas.AccessLayerRequest.entity.WorkSpace;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface WorkSpaceRepository extends JpaRepository<WorkSpace, Long> {

    @Query("SELECT DISTINCT w FROM WorkSpace w INNER JOIN w.childrens c WHERE (:name IS NULL OR w.name LIKE %:name%)" +
            " OR (:name IS NULL OR c.name LIKE %:name%) AND w.parent IS NULL")
    Page<WorkSpace> getAll(String name, Pageable pageable);

}
