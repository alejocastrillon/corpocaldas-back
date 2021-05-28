package co.gov.corpocaldas.AccessLayerRequest.config;

import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Value;

public class WebConfig implements WebMvcConfigurer {

    private final String baseApiPath;

    public WebConfig(@Value("${api.base.url}") String baseApiPath) {
        this.baseApiPath = baseApiPath;
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
                .addResourceHandler("/**/*.css", "/**/*.html", "/**/*.js", "/**/*.jsx", "/**/*.png", "/**/*.ttf", "/**/*.woff", "/**/*.woff2")
                .setCachePeriod(0)
                .addResourceLocations("classpath:/static/");

        registry.addResourceHandler("/", "/**")
                .setCachePeriod(0)
                .addResourceLocations("classpath:/static/index.html")
                .resourceChain(true)
                .addResolver(new PathResourceResolver() {
                    @Override
                    protected Resource getResource(String resourcePath, Resource location) throws IOException {
                        if (resourcePath.startsWith(baseApiPath) || resourcePath.startsWith(baseApiPath.substring(1)) || resourcePath.startsWith("/swagger-ui.html")) {
                            return null;
                        }

                        return location.exists() && location.isReadable() ? location : null;
                    }
                });
    }
}
