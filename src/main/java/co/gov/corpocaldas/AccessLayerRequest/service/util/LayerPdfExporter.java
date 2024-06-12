/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.gov.corpocaldas.AccessLayerRequest.service.util;

import co.gov.corpocaldas.AccessLayerRequest.entity.Layer;
import jakarta.servlet.http.HttpServletResponse;

import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;
import java.awt.Color;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;

/**
 *
 * @author alejandroutp
 */
public class LayerPdfExporter {
     
    private final List<Layer> layers;

    public LayerPdfExporter(List<Layer> layers) {
        this.layers = layers;
    }
    
    private void writeTableHeader(PdfPTable table) {
        PdfPCell cell = new PdfPCell();
        cell.setBackgroundColor(Color.BLUE);
         
        Font font = FontFactory.getFont(FontFactory.HELVETICA);
        font.setColor(Color.WHITE);
         
        cell.setPhrase(new Phrase("ID", font));
        table.addCell(cell);
         
        cell.setPhrase(new Phrase("Nombre", font));
        table.addCell(cell);
         
        cell.setPhrase(new Phrase("Espacio de trabajo", font));
        table.addCell(cell);
         
        cell.setPhrase(new Phrase("Tipo de Información", font));
        table.addCell(cell);
         
        cell.setPhrase(new Phrase("Visibilidad", font));
        table.addCell(cell);
        
    }
     
    private void writeTableData(PdfPTable table) {
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
        layers.forEach(layer -> {
            table.addCell(String.valueOf(layer.getId()));
            table.addCell(layer.getName());
            table.addCell(layer.getWorkspace().getName());
            table.addCell(layer.getAccessGranted() == 1
                    ? "Información de Corpocaldas" : "Información externa");
            table.addCell(layer.isVisible() ? "Visible" : "No visible");
        });
    }
     
    public void export(HttpServletResponse response) throws DocumentException, IOException {
        Document document = new Document(PageSize.A4.rotate());
        PdfWriter.getInstance(document, response.getOutputStream());
         
        document.open();
        Font font = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        font.setSize(18);
        font.setColor(Color.BLUE);
         
        Paragraph p = new Paragraph("Inventarios de capas", font);
        p.setAlignment(Paragraph.ALIGN_CENTER);
         
        document.add(p);
         
        PdfPTable table = new PdfPTable(5);
        table.setWidthPercentage(100f);
        table.setWidths(new float[] {0.8f, 2.0f, 3.0f, 2.0f, 2.5f});
        table.setSpacingBefore(10);
         
        writeTableHeader(table);
        writeTableData(table);
         
        document.add(table);
         
        document.close();
         
    }
    
}
