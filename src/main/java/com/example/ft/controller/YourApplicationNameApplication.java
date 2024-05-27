package com.example.ft.controller;

import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import net.minidev.json.JSONObject;

@SpringBootApplication
@RestController
public class YourApplicationNameApplication {

    public static void main(String[] args) {
        SpringApplication.run(YourApplicationNameApplication.class, args);
    }

    @PostMapping("/create")
    public String createImage(@RequestBody Map<String, String> prompt) {
    	String promptStr = prompt.get("prompt");
        RestTemplate restTemplate = new RestTemplate();
        String openaiUrl = "https://api.openai.com/v1/engines/curie/completions";
        String apiKey = ""; // your OpenAI API key

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + apiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);
        JSONObject requestJson = new JSONObject();
        requestJson.put("prompt", promptStr);
        requestJson.put("max_tokens", 50);
        HttpEntity<JSONObject> request = new HttpEntity<>(requestJson, headers);
        ResponseEntity<String> response = restTemplate.exchange(openaiUrl, HttpMethod.POST, request, String.class);
        return response.getBody();
    }
}
