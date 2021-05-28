package co.gov.corpocaldas.AccessLayerRequest;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableEncryptableProperties
public class AccessLayerRequestApplication {

	public static void main(String[] args) {
		SpringApplication.run(AccessLayerRequestApplication.class, args);
	}

}
