package ch.javaee.dbrowse;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.GenericApplicationContext;

/**
 * Created by marcomolteni on 02.05.17.
 */
public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext("ch.javaee.dbrowse");
        HandleTableServiceImpl tableService = (HandleTableServiceImpl) context.getBean("handleTableServiceImpl");

        tableService.demo();


    }
}
