/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package co.gov.corpocaldas.AccessLayerRequest.service.util;

import co.gov.corpocaldas.AccessLayerRequest.entity.AccessRequest;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

/**
 *
 * @author alejandroutp
 */
public class AccessRequestExcelExporter {
    
    private XSSFWorkbook workbook;
    private XSSFSheet sheet;
    private List<AccessRequest> access;

    public AccessRequestExcelExporter(List<AccessRequest> access) {
        this.access = access;
        this.workbook = new XSSFWorkbook();
    }
    
    private void writeHeaderLine() {
        sheet = workbook.createSheet("Accesos");
        Row row = sheet.createRow(0);
        CellStyle style = workbook.createCellStyle();
        XSSFFont font = workbook.createFont();
        font.setBold(true);
        font.setFontHeight(16);
        style.setFont(font);
        createCell(row, 0, "ID", style);      
        createCell(row, 1, "Nombre", style);       
        createCell(row, 2, "Correo Electronico", style);    
        createCell(row, 3, "Compañia", style);
        createCell(row, 4, "Descripción de uso", style);
        createCell(row, 5, "Fecha de realización", style);
        createCell(row, 6, "Identificador de la capa", style);
        createCell(row, 7, "Nombre de la capa", style);
        createCell(row, 8, "Tipo de información", style);
    }
     
    private void createCell(Row row, int columnCount, Object value, CellStyle style) {
        sheet.autoSizeColumn(columnCount);
        Cell cell = row.createCell(columnCount);
        if (value instanceof Integer) {
            cell.setCellValue((Integer) value);
        } else if (value instanceof Boolean) {
            cell.setCellValue((Boolean) value);
        }else {
            cell.setCellValue((String) value);
        }
        cell.setCellStyle(style);
    }
     
    private void writeDataLines() {
        int rowCount = 1;
        CellStyle style = workbook.createCellStyle();
        XSSFFont font = workbook.createFont();
        font.setFontHeight(14);
        style.setFont(font);
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
                 
        for (AccessRequest accesso  : access) {
            Row row = sheet.createRow(rowCount++);
            int columnCount = 0;
            createCell(row, columnCount++, accesso.getId(), style);
            createCell(row, columnCount++, accesso.getName(), style);
            createCell(row, columnCount++, accesso.getEmail(), style);
            createCell(row, columnCount++, accesso.getCompany(), style);
            createCell(row, columnCount++, accesso.getDescription(), style);
            createCell(row, columnCount++, dateFormat.format(accesso
                    .getRealizationDate()), style);
            createCell(row, columnCount++, accesso.getLayer().getId(), style);
            createCell(row, columnCount++, accesso.getLayer().getName(), style);
            createCell(row, columnCount++, accesso.getLayer()
                    .getAccessGranted() == 1 ? "Información Corpocaldas"
                    : "Información Externa", style);
        }
    }
     
    public void export(HttpServletResponse response) throws IOException {
        writeHeaderLine();
        writeDataLines();
         
        ServletOutputStream outputStream = response.getOutputStream();
        workbook.write(outputStream);
        workbook.close();
         
        outputStream.close();
         
    }
    
}
