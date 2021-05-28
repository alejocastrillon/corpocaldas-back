package co.gov.corpocaldas.AccessLayerRequest.service.impl;

import co.gov.corpocaldas.AccessLayerRequest.entity.LoginAccessGranted;
import co.gov.corpocaldas.AccessLayerRequest.repository.LoginAccessGrantedRepository;
import co.gov.corpocaldas.AccessLayerRequest.service.ValidateAccessService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ValidateAccessServiceImpl implements ValidateAccessService {

    private LoginAccessGrantedRepository loginAccessGrantedRepository;

    public ValidateAccessServiceImpl(LoginAccessGrantedRepository loginAccessGrantedRepository) {
        this.loginAccessGrantedRepository = loginAccessGrantedRepository;
    }

    @Override
    public boolean validateAccess(String token, int userId) {
        Optional<LoginAccessGranted> optionalLoginAccessGranted = loginAccessGrantedRepository
                .findByTokenAndUserId(token, userId);
        return optionalLoginAccessGranted.isPresent();
    }
}
