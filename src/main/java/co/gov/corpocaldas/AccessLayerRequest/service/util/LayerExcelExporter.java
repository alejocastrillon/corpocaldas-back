/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.gov.corpocaldas.AccessLayerRequest.service.util;

import co.gov.corpocaldas.AccessLayerRequest.entity.Layer;
import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;
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
public class LayerExcelExporter {
    
    private XSSFWorkbook workbook;
    private XSSFSheet sheet;
    private List<Layer> layers;

    public LayerExcelExporter(List<Layer> layers) {
        this.layers = layers;
        this.workbook = new XSSFWorkbook();
    }
    
    private void writeHeaderLine() {
        sheet = workbook.createSheet("Inventarios de capas");
        Row row = sheet.createRow(0);
        CellStyle style = workbook.createCellStyle();
        XSSFFont font = workbook.createFont();
        font.setBold(true);
        font.setFontHeight(16);
        style.setFont(font);
        createCell(row, 0, "ID", style);      
        createCell(row, 1, "Nombre", style);       
        createCell(row, 2, "Espacio de trabajo", style);    
        createCell(row, 3, "Tipo de Información", style);
        createCell(row, 4, "Visibilidad", style);
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
                 
        for (Layer layer : layers) {
            Row row = sheet.createRow(rowCount++);
            int columnCount = 0;
            createCell(row, columnCount++, layer.getId(), style);
            createCell(row, columnCount++, layer.getName(), style);
            createCell(row, columnCount++, layer.getWorkspace().getName(), style);
            createCell(row, columnCount++, layer.getAccessGranted() == 1
                    ? "Información de Corpocaldas" : "Información Externa", style);
            createCell(row, columnCount++, layer.isVisible() ? "Visible"
                    : "No visible", style);
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
