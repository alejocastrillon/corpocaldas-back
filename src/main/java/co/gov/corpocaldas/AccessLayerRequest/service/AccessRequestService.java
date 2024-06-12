package co.gov.corpocaldas.AccessLayerRequest.service;

import co.gov.corpocaldas.AccessLayerRequest.dto.AccessRequestDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.service.util.AccessRequestExcelExporter;
import co.gov.corpocaldas.AccessLayerRequest.service.util.AccessRequestPdfExporter;
import jakarta.mail.MessagingException;


public interface AccessRequestService {

    /**
     * Persist the information of access request to a specific layer.
     *
     * @param accessRequest Information of the access request
     * @return Persisted information of the access request
     * @throws javax.mail.MessagingException Error al enviar correo de
     * notificación.
     */
    AccessRequestDto saveRequestAccess(AccessRequestDto accessRequest)
            throws MessagingException;

    /**
     * Update the information of a specific access request.
     *
     * @param accessRequestId Request access identifier
     * @param accessRequest   Information of the access request
     * @return Updated information of the access request
     * @throws javax.mail.MessagingException Error al enviar correo de
     * notificación.
     */
    AccessRequestDto updateRequestAccess(int accessRequestId,
            AccessRequestDto accessRequest) throws MessagingException;


    /**
     * Filter the access request by the params selected.
     * @param name Name of user that request the access
     * @param company Name of company or entity associated to request
     * @param email Email of the user that request the access
     * @param layername Layer name associated to request
     * @param layeraccessgranted Layer access granted associated to request
     * @param numberPage Number of page
     * @param pageSize Size of page
     * @return Access request list
     */
    PaginatorDto filterAccessRequests(String name, String company, String email,
            String layername, Integer layeraccessgranted, int numberPage,
            int pageSize);
    
    /**
     * Export the access request by the params selected.
     * @param name Name of user that request the access
     * @param company Name of company or entity associated to request
     * @param email Email of the user that request the access
     * @param layername Layer name associated to request
     * @param layeraccessgranted Layer access granted associated to request
     * @return Excel export instance
     */
    AccessRequestExcelExporter exportExcelAccessRequest(String name, String company, String email,
            String layername, Integer layeraccessgranted);

    AccessRequestPdfExporter exportPdfAccessRequest(String name, String company, String email,
            String layername, Integer layeraccessgranted);
}
