package ch.javaee.dbrowse;

import org.springframework.jdbc.support.DatabaseMetaDataCallback;
import org.springframework.stereotype.Service;

import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 * Created by marcomolteni on 02.05.17.
 */
@Service
public class ReadTablesImpl implements DatabaseMetaDataCallback {

    public Object processMetaData(DatabaseMetaData dbmd) throws SQLException {
        ResultSet rs = dbmd.getTables(null, null, null, new String[]{"TABLE"});
        ArrayList l = new ArrayList();
        while (rs.next()) {
            l.add(rs.getString(3));
        }
        return l;
    }
}
