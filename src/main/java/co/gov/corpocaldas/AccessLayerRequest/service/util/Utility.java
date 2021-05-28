package co.gov.corpocaldas.AccessLayerRequest.service.util;

import co.gov.corpocaldas.AccessLayerRequest.config.JasyptConfig;
import org.jasypt.encryption.pbe.PooledPBEStringEncryptor;
import org.jasypt.encryption.pbe.config.SimpleStringPBEConfig;
import org.modelmapper.ModelMapper;

import java.lang.reflect.Type;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

public abstract class Utility {

    private Utility() {}

    private static final ModelMapper mapper = new ModelMapper();

    public static List<?> parseList(List<?> dataSource, Type destination) {
        List<?> dataParsed = null;
        if (dataSource != null && !dataSource.isEmpty()) {
            dataParsed = new ArrayList<>();
            for (Object data: dataSource) {
                dataParsed.add(mapper.map(data, destination));
            }
        }
        return dataParsed;
    }

    public static String generateToken() {
        byte[] randomBytes = new byte[24];
        SecureRandom secureRandom = new SecureRandom();
        secureRandom.nextBytes(randomBytes);
        return Base64.getUrlEncoder().encodeToString(randomBytes);
    }

    public static String encryptKey(String plainKey) {
        final SimpleStringPBEConfig pbeConfig = JasyptConfig.getSimpleStringPBEConfig();
        final PooledPBEStringEncryptor pbeStringEncryptor = new PooledPBEStringEncryptor();
        pbeStringEncryptor.setConfig(pbeConfig);
        return pbeStringEncryptor.encrypt(plainKey);
    }

    public static String decryptKey(String encryptedKey) {
        final SimpleStringPBEConfig pbeConfig = JasyptConfig.getSimpleStringPBEConfig();
        final PooledPBEStringEncryptor pbeStringEncryptor = new PooledPBEStringEncryptor();
        pbeStringEncryptor.setConfig(pbeConfig);
        return pbeStringEncryptor.decrypt(encryptedKey);
    }
}
