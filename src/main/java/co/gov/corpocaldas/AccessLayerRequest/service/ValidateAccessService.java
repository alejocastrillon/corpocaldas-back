package co.gov.corpocaldas.AccessLayerRequest.service;

public interface ValidateAccessService {

    /**
     * Validate an access to protected endpoints.
     * @param token Access token
     * @param userId User identifier associated to this access.
     * @return If the access token and user identifier has match then returns true
     */
    boolean validateAccess(String token, int userId);

}
