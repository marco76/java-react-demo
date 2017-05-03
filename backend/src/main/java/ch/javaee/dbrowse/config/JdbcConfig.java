package ch.javaee.dbrowse.config;

import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;

/**
 * Created by marcomolteni on 02.05.17.
 */
@Configuration
public class JdbcConfig {

    String url = "jdbc:mysql://localhost:3306/demo";
    String driverClassName= "com.mysql.jdbc.Driver";
    String username = "root";
    String password ="password";


    @Bean
    JdbcTemplate jdbcTemplateBean() {
        JdbcTemplate jdbcTemplate = new JdbcTemplate(createDatasource());
        return jdbcTemplate;
    }

    @Bean
    public DataSource createDatasource(){

        DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create().url(url).password(password).username(username);
        dataSourceBuilder.driverClassName(driverClassName);
        return dataSourceBuilder.build();
    }
}
