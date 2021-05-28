package co.gov.corpocaldas.AccessLayerRequest.service.impl;

import co.gov.corpocaldas.AccessLayerRequest.dto.AccessRequestDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.entity.AccessRequest;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.CorpocaldasBadRequestException;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.MailSenderException;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.TokenMismatch;
import co.gov.corpocaldas.AccessLayerRequest.repository.AccessRequestRepository;
import co.gov.corpocaldas.AccessLayerRequest.service.AccessRequestService;
import co.gov.corpocaldas.AccessLayerRequest.service.LayerService;
import co.gov.corpocaldas.AccessLayerRequest.service.util.Utility;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.List;

@Service
public class AccessRequestServiceImpl implements AccessRequestService {

    @Autowired
    private AccessRequestRepository accessRequestRepository;

    @Autowired
    private LayerService layerService;

    @Autowired
    private JavaMailSender mailSender;

    private final ModelMapper mapper = new ModelMapper();

    /**
     * Persist the information of access request to a specific layer.
     *
     * @param accessRequest Information of the access request
     * @return Persisted information of the access request
     */
    @Override
    public AccessRequestDto saveRequestAccess(AccessRequestDto accessRequest) {
        return mapper.map(accessRequestRepository.save(mapper.map(accessRequest, AccessRequest.class)),
                AccessRequestDto.class);
    }



    private void sendNotificationMail(AccessRequestDto accessRequest) throws MessagingException {
        String message = "Cordial Saludo\nPor medio de la presente que su petición de acceso a la capa "
                + accessRequest.getNameLayer() + " ha sido aprobada, con el token " + accessRequest.getToken()
                + "\nMuchas gracias por la atención prestada";
        MimeMessage mail = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(mail, false);
        messageHelper.setTo(accessRequest.getEmail());
        messageHelper.setSubject("Petición de acceso aproabada a la capa " + accessRequest.getNameLayer()
                + " - Corpocaldas");
        messageHelper.setText(message);
        mailSender.send(mail);
    }

    /**
     * Update the information of a specific access request.
     *
     * @param accessRequestId Request access identifier
     * @param accessRequest   Information of the access request
     * @return Updated information of the access request
     */
    @Override
    public AccessRequestDto updateRequestAccess(int accessRequestId, AccessRequestDto accessRequest) {
        if (accessRequestId == accessRequest.getId()) {
            if (accessRequest.getToken() == null && accessRequest.getApproved()) {
                accessRequest.setToken(Utility.generateToken());
                try {
                    sendNotificationMail(accessRequest);
                } catch (MessagingException e) {
                    throw new MailSenderException("The mail could not be sent to " + accessRequest.getEmail());
                }
            }
            return saveRequestAccess(accessRequest);
        } else {
            throw new CorpocaldasBadRequestException("El identificador proveido no coincide con el identificador de" +
                    " la petición de acceso que quiere modificar");
        }
    }

    /**
     * Validate that the access token is enable to access to a specific layer and these are associated to the user
     * email.
     *
     * @param layerId Identifier of the layer
     * @param email   User's email
     * @param token   Access token
     * @return Transaction state
     */
    @Override
    public AccessRequestDto validateAccess(int layerId, String email, String token) {
        return mapper.map(accessRequestRepository.findByEmailAndTokenAndLayerIdAndApprovedTrue(email, token, layerId).orElseGet(() -> {
            throw new TokenMismatch("El token proveido no hizo match para la capa " + layerId);
        }), AccessRequestDto.class);
    }

    /**
     * Obtains the request access that need to be reviewed for generate a token access.
     *
     * @return List of request access to be reviewed
     */
    @Override
    public List<AccessRequestDto> requestWaitingForApproval() {
        return (List<AccessRequestDto>) Utility.parseList(accessRequestRepository
                .findByLayerAccessGrantedAndApprovedIsNull(3), AccessRequestDto.class);
    }

    @Override
    public PaginatorDto filterAccessRequests(String name, String company, String email, String layername,
                                             Integer layeraccessgranted, Boolean layerapproved, int numberPage,
                                             int pageSize) {
        Pageable pageable = PageRequest.of(numberPage, pageSize);
        Page<AccessRequest> pageResult = accessRequestRepository.getAll(name, company, email, layername,
                layeraccessgranted, layerapproved, pageable);
        if (pageResult.hasContent()) {
            //return (List<AccessRequestDto>) utility.parseList(pageResult.getContent(), AccessRequestDto.class);
            return new PaginatorDto((List<AccessRequestDto>) Utility.parseList(pageResult.getContent(),
                    AccessRequestDto.class), pageResult.getTotalElements());
        } else {
            return new PaginatorDto();
        }
    }
}
