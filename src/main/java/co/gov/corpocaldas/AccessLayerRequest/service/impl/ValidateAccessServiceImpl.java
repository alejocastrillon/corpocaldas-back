package co.gov.corpocaldas.AccessLayerRequest.service.impl;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.CorpocaldasUnauthorizedException;
import co.gov.corpocaldas.AccessLayerRequest.repository.LoginAccessGrantedRepository;
import co.gov.corpocaldas.AccessLayerRequest.service.ValidateAccessService;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ValidateAccessServiceImpl implements ValidateAccessService {

    private final LoginAccessGrantedRepository loginAccessGrantedRepository;

    public ValidateAccessServiceImpl(LoginAccessGrantedRepository loginAccessGrantedRepository) {
        this.loginAccessGrantedRepository = loginAccessGrantedRepository;
    }

    @Override
    public void validateAccess(String token, Integer userId) {
        if (token != null && userId != null) {
            loginAccessGrantedRepository.validateAccess(token, userId,
                    new Date()).orElseThrow(
                    () -> new CorpocaldasUnauthorizedException(
                            ModelValidationError.UNAUTHORIZED_REQUEST_MESSAGE));
        } else {
            throw new CorpocaldasUnauthorizedException(ModelValidationError
                    .UNAUTHORIZED_REQUEST_MESSAGE);
        }

    }
}
