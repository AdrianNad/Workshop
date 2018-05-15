package com.workshop.workshopApp.utils;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.List;

public class AuthorityUtils {

    public static List<? extends GrantedAuthority> getAuthorities(String role) {
        List<GrantedAuthority> list = new ArrayList<>();
        if (role != null && !role.equals("")) {
            list.add(new SimpleGrantedAuthority(role));
        }
        return list;
    }
}
