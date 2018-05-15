package com.workshop.workshopApp.config.JWT;

public class JWTSettings {
    public static final String SECRET_KEY = "ItsASecret";
    public static final long EXPIRATION_TIME = 864_000_000;
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
}
