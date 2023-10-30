package com.kapeta.sample.rest;

import io.swagger.v3.oas.annotations.Hidden;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class RedirectRestController {

    @GetMapping("/")
    @Hidden
    public  RedirectView redirectToSwaggerDocumentation() {
        return new RedirectView("/swagger-ui/index.html");
    }
}
