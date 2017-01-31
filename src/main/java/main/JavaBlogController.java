package main;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class JavaBlogController {
    @RequestMapping(method = RequestMethod.GET,value = "/test")
    public List<Article> blog() {
        List<Article> resultList = new ArrayList<Article>();
        resultList.add(new Article("First title", "First content"));
        resultList.add(new Article("Second title", "Second content"));
        return resultList;
    }
}
