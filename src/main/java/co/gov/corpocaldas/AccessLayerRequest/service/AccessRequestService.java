package co.gov.corpocaldas.AccessLayerRequest.service;

import co.gov.corpocaldas.AccessLayerRequest.dto.AccessRequestDto;

import java.util.List;

public interface AccessRequestService {

    /**
     * Persist the information of access request to a specific layer.
     * @param accessRequest Information of the access request
     * @return Persisted information of the access request
     */
    AccessRequestDto saveRequestAccess(AccessRequestDto accessRequest);

    /**
     * Update the information of a specific access request.
     * @param accessRequestId Request access identifier
     * @param accessRequest Information of the access request
     * @return Updated information of the access request
     */
    AccessRequestDto updateRequestAccess(int accessRequestId, AccessRequestDto accessRequest);

    /**
     * Validate that the access token is enable to access to a specific layer and these are associated to the user
     * email.
     * @param layerId Identifier of the layer
     * @param email User's email
     * @param token Access token
     * @return Transaction state
     */
    AccessRequestDto validateAccess(int layerId, String email, String token);

    /**
     * Obtains the request access that need to be reviewed for generate a token access.
     * @return List of request access to be reviewed
     */
    List<AccessRequestDto> requestWaitingForApproval();

}