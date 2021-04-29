package co.gov.corpocaldas.AccessLayerRequest.service;

import co.gov.corpocaldas.AccessLayerRequest.dto.RequestAccessDto;
import co.gov.corpocaldas.AccessLayerRequest.entity.RequestAccess;

import java.util.List;

public interface RequestAccessService {

    /**
     * Persist the information of access request to a specific layer.
     * @param requestAccess Information of the access request
     * @return Persisted information of the access request
     */
    RequestAccessDto saveRequestAccess(RequestAccessDto requestAccess);

    /**
     * Update the information of a specific access request.
     * @param requestAccessId Request access identifier
     * @param requestAccess Information of the access request
     * @return Updated information of the access request
     */
    RequestAccessDto updateRequestAccess(int requestAccessId, RequestAccessDto requestAccess);

    /**
     * Validate that the access token is enable to access to a specific layer and these are associated to the user
     * email.
     * @param layerId Identifier of the layer
     * @param email User's email
     * @param token Access token
     * @return Transaction state
     */
    RequestAccessDto validateAccess(int layerId, String email, String token);

    /**
     * Obtains the request access that need to be reviewed for generate a token access.
     * @return List of request access to be reviewed
     */
    List<RequestAccessDto> requestWaitingForApproval();

}
