package co.gov.corpocaldas.AccessLayerRequest.service.impl;

import co.gov.corpocaldas.AccessLayerRequest.dto.RequestAccessDto;
import co.gov.corpocaldas.AccessLayerRequest.entity.Layer;
import co.gov.corpocaldas.AccessLayerRequest.entity.RequestAccess;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.MailSenderException;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.RequestAccessBadRequestException;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.TokenMismatch;
import co.gov.corpocaldas.AccessLayerRequest.repository.RequestAccessRepository;
import co.gov.corpocaldas.AccessLayerRequest.service.LayerService;
import co.gov.corpocaldas.AccessLayerRequest.service.RequestAccessService;
import co.gov.corpocaldas.AccessLayerRequest.service.util.Utility;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.List;

@Service
public class RequestAccessServiceImpl implements RequestAccessService {

    @Autowired
    private RequestAccessRepository requestAccessRepository;

    @Autowired
    private LayerService layerService;

    @Autowired
    private JavaMailSender mailSender;

    private final ModelMapper mapper = new ModelMapper();

    private final Utility utility = new Utility();

    /**
     * Persist the information of access request to a specific layer.
     *
     * @param requestAccess Information of the access request
     * @return Persisted information of the access request
     */
    @Override
    public RequestAccessDto saveRequestAccess(RequestAccessDto requestAccess) {
        return mapper.map(requestAccessRepository.save(mapper.map(requestAccess, RequestAccess.class)),
                RequestAccessDto.class);
    }

    private String generateToken() {
        byte[] randomBytes = new byte[24];
        SecureRandom secureRandom = new SecureRandom();
        secureRandom.nextBytes(randomBytes);
        return Base64.getUrlEncoder().encodeToString(randomBytes);
    }

    private void sendNotificationMail(RequestAccessDto requestAccess) throws MessagingException {
        String message = "Cordial Saludo\nPor medio de la presente que su petición de acceso a la capa "
                + requestAccess.getNameLayer() + " ha sido aprobada, con el token " + requestAccess.getToken()
                + "\nMuchas gracias por la atención prestada";
        MimeMessage mail = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(mail, false);
        messageHelper.setTo(requestAccess.getEmail());
        messageHelper.setSubject("Petición de acceso aproabada a la capa " + requestAccess.getNameLayer()
                + " - Corpocaldas");
        messageHelper.setText(message);
        mailSender.send(mail);
    }

    /**
     * Update the information of a specific access request.
     *
     * @param requestAccessId Request access identifier
     * @param requestAccess   Information of the access request
     * @return Updated information of the access request
     */
    @Override
    public RequestAccessDto updateRequestAccess(int requestAccessId, RequestAccessDto requestAccess) {
        if (requestAccessId == requestAccess.getId()) {
            if (requestAccess.getToken() == null && requestAccess.getApproved()) {
                requestAccess.setToken(generateToken());
                try {
                    sendNotificationMail(requestAccess);
                } catch (MessagingException e) {
                    throw new MailSenderException("The mail could not be sent to " + requestAccess.getEmail());
                }
            }
            return saveRequestAccess(requestAccess);
        } else {
            throw new RequestAccessBadRequestException("El identificador proveido no coincide con el identificador de" +
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
    public RequestAccessDto validateAccess(int layerId, String email, String token) {
        return mapper.map(requestAccessRepository.findByEmailAndTokenAndLayerIdAndApprovedTrue(email, token, layerId).orElseGet(() -> {
            throw new TokenMismatch("El token proveido no hizo match para la capa " + layerId);
        }), RequestAccessDto.class);
    }

    /**
     * Obtains the request access that need to be reviewed for generate a token access.
     *
     * @return List of request access to be reviewed
     */
    @Override
    public List<RequestAccessDto> requestWaitingForApproval() {
        return (List<RequestAccessDto>) utility.parseList(requestAccessRepository
                .findByLayerAccessGrantedAndApprovedIsNull(3), RequestAccessDto.class);
    }
}
