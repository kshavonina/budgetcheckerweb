package com.example.budgetcheckerweb.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    @RequestMapping(value = "/echo")
    public String echo(@RequestParam(value = "request", defaultValue = "Hello!") String request) {
        return request;
    }

    @RequestMapping(value = "/testMethod")
    public String testMethod(@RequestParam(value = "inputText") String inputText) {
        return "Successfully tested method! " + inputText;
    }
}
