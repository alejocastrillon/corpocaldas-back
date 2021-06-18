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
    public AccessRequestDto saveRequestAccess(AccessRequestDto accessRequest) throws MessagingException {
        accessRequest.getAccessGrantedLayer() == 2 ? sendNotificationMail(accessRequest) : null;
        return mapper.map(accessRequestRepository.save(mapper.map(accessRequest, AccessRequest.class)),
                AccessRequestDto.class);
    }



    private void sendNotificationMail(AccessRequestDto accessRequest) throws MessagingException {
        String message = "Cordial Saludo<br><br>Usted acaba de descargar la capa "
                + accessRequest.getNameLayer() + ", tenga en cuenta que:"
                + "<br><b><i>La información geográfica a descargar pertenece a otras" +
                " instituciones diferentes a CORPOCALDAS y  por ende la propiedad intelectual y derechos de autor. Si" +
                " se tiene alguna inquietud frente al contenido técnico de la cobertura geográfica, se requiere una" +
                " versión actualizada o histórica, se debe remitir directamente a la fuente oficial del dato, la cual" +
                " se detalla en el metadato respectivo.</i></b>";
        MimeMessage mail = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(mail, true);
        messageHelper.setTo(accessRequest.getEmail());
        messageHelper.setSubject("Petición de acceso aprobada a la capa " + accessRequest.getNameLayer()
                + " - Corpocaldas");
        messageHelper.setText(message, true);
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
    public AccessRequestDto updateRequestAccess(int accessRequestId, AccessRequestDto accessRequest) throws MessagingException {
        if (accessRequestId == accessRequest.getId()) {
            return saveRequestAccess(accessRequest);
        } else {
            throw new CorpocaldasBadRequestException("El identificador proveido no coincide con el identificador de" +
                    " la petición de acceso que quiere modificar");
        }
    }

    @Override
    public PaginatorDto filterAccessRequests(String name, String company, String email, String layername,
                                             Integer layeraccessgranted, int numberPage, int pageSize) {
        Pageable pageable = PageRequest.of(numberPage, pageSize);
        Page<AccessRequest> pageResult = accessRequestRepository.getAll(name, company, email, layername,
                layeraccessgranted, pageable);
        if (pageResult.hasContent()) {
            //return (List<AccessRequestDto>) utility.parseList(pageResult.getContent(), AccessRequestDto.class);
            return new PaginatorDto((List<AccessRequestDto>) Utility.parseList(pageResult.getContent(),
                    AccessRequestDto.class), pageResult.getTotalElements());
        } else {
            return new PaginatorDto();
        }
    }
}
