package com.calacutar;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("arithimatic")
@CrossOrigin("http://localhost:4200/")
public class Controller {
    
    @PostMapping("add")
    public int addition(@RequestBody Request request) 
    {
        return request.getNum1() + request.getNum2();
    }
    
    @PostMapping("sub")
    public int subtraction(@RequestBody Request request) 
    {
        return request.getNum1() - request.getNum2();
    }
    
    @PostMapping("mult")
    public int multiplication(@RequestBody Request request) 
    {
        return request.getNum1() * request.getNum2();
    }
    
    @PostMapping("div")
    public double division(@RequestBody Request request) 
    {
        if (request.getNum2() == 0) {
            throw new IllegalArgumentException("Division by zero");
        }
        return (double) request.getNum1() / request.getNum2();
    }
}
