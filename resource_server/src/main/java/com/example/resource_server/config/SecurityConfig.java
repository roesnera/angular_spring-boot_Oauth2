package com.example.resource_server.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final CORSCustomizer corsCustomizer;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        corsCustomizer.corsCustomizer(http);
        http.oauth2ResourceServer(j -> j.jwt(jwtConfigurer -> jwtConfigurer.jwkSetUri("http://localhost:8080/oauth2/jwks")))
                .authorizeHttpRequests(auth -> auth.anyRequest().authenticated());

        return http.build();
    }

    // http://localhost:8080/oauth2/authorize?response_type=code&client_id=client&scope=openid&redirect_uri=http://127.0.0.1:3000/authorized&code_challenge=QYPAZ5NU8yvtlQ9erXrUYR-T5AGCjCF47vN-KsaI2A8&code_challenge_method=S256
}
