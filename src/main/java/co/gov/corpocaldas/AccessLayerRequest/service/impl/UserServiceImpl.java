package co.gov.corpocaldas.AccessLayerRequest.service.impl;

import co.gov.corpocaldas.AccessLayerRequest.constants.ModelValidationError;
import co.gov.corpocaldas.AccessLayerRequest.dto.LoginAccessGrantedDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.PaginatorDto;
import co.gov.corpocaldas.AccessLayerRequest.dto.UserDto;
import co.gov.corpocaldas.AccessLayerRequest.entity.LoginAccessGranted;
import co.gov.corpocaldas.AccessLayerRequest.entity.User;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.CorpocaldasBadRequestException;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.CorpocaldasNotFoundException;
import co.gov.corpocaldas.AccessLayerRequest.exception.httpstatus.CorpocaldasUnauthorizedException;
import co.gov.corpocaldas.AccessLayerRequest.repository.LoginAccessGrantedRepository;
import co.gov.corpocaldas.AccessLayerRequest.repository.UserRepository;
import co.gov.corpocaldas.AccessLayerRequest.service.UserService;
import co.gov.corpocaldas.AccessLayerRequest.service.util.Utility;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final LoginAccessGrantedRepository loginAccessGrantedRepository;
    private final ModelMapper mapper;

    public UserServiceImpl(UserRepository userRepository, LoginAccessGrantedRepository loginAccessGrantedRepository,
                           ModelMapper mapper) {
        this.userRepository = userRepository;
        this.loginAccessGrantedRepository = loginAccessGrantedRepository;
        this.mapper = mapper;
    }

    @Override
    public UserDto saveUser(UserDto user) {
        if (user.getPassword() != null) {
            user.setPassword(Utility.encryptKey(user.getPassword()));
            return mapper.map(userRepository.save(mapper.map(user, User.class)), UserDto.class);
        } else {
            throw new CorpocaldasBadRequestException(ModelValidationError.USER_PASSWORD_NOT_NULL);
        }
    }

    @Override
    public PaginatorDto getUsers(String name, String lastname, String email, String username, Boolean isEnabled,
                                 int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<User> pageResult = userRepository.getAll(name, lastname, email, username, isEnabled, pageable);
        if (pageResult.hasContent()) {
            return new PaginatorDto((List<UserDto>) Utility.parseList(pageResult.getContent(), UserDto.class),
                    pageResult.getTotalElements());
        } else {
            return new PaginatorDto();
        }
    }

    @Override
    public void updateUser(int userId, UserDto user) {
        if (userId == user.getId()) {
            getUser(userId);
            saveUser(user);
        } else {
            throw new CorpocaldasBadRequestException(ModelValidationError.MISMATCH_ID_MESSAGE);
        }
    }

    @Override
    public LoginAccessGrantedDto login(String username, String password) {
        User user = userRepository.getUserForLogin(username, Utility.decryptKey(password)).orElseThrow(
                () -> new CorpocaldasUnauthorizedException(ModelValidationError.USER_OR_PASSWORD_WRONG));
        LoginAccessGranted login = new LoginAccessGranted();
        login.setToken(Utility.generateToken());
        login.setConnectionStart(new Date());
        login.setUser(user);
        return mapper.map(loginAccessGrantedRepository.save(login), LoginAccessGrantedDto.class);
    }

    @Override
    public UserDto getUser(int userId) {
        return mapper.map(userRepository.findById(userId).orElseThrow(() -> new CorpocaldasNotFoundException(String
                .format(ModelValidationError.USER_NOT_FOUND, userId))), UserDto.class);
    }

    @Override
    public void deleteUser(int userId) {
        userRepository.delete(mapper.map(getUser(userId), User.class));
    }

}
