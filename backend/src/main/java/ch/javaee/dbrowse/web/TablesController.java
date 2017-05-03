package ch.javaee.dbrowse.web;

import ch.javaee.dbrowse.HandleTableServiceImpl;
import ch.javaee.dbrowse.ReadTablesImpl;
import ch.javaee.dbrowse.model.Table;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.logging.Logger;

/**
 * Created by marcomolteni on 02.05.17.
 */
@RestController
public class TablesController {

    private static final Logger LOGGER = Logger.getLogger(TablesController.class.getName());

    @Autowired
    private HandleTableServiceImpl handleTableService;

    @RequestMapping(value = "/tables", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Table> getTables() {
        LOGGER.info("getTables()");
        return handleTableService.demo();
    }

    @RequestMapping(value = "/tables/data/{tableName}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List getTablesData(@PathVariable ("tableName") String tableName) {
        LOGGER.info("getTablesData()");
        return handleTableService.queryTable(tableName);
    }

}
