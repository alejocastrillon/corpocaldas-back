package co.gov.corpocaldas.AccessLayerRequest.service;

public interface ValidateAccessService {

    /**
     * Validate an access to protected endpoints.
     * @param token Access token
     * @param userId User identifier associated to this access.
     */
    void validateAccess(String token, Integer userId);

}
