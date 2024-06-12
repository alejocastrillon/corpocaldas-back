/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.gov.corpocaldas.AccessLayerRequest.service.util;

import co.gov.corpocaldas.AccessLayerRequest.entity.AccessRequest;
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
public class AccessRequestPdfExporter {
     
    private final List<AccessRequest> access;

    public AccessRequestPdfExporter(List<AccessRequest> access) {
        this.access = access;
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
         
        cell.setPhrase(new Phrase("Correo Electrónico", font));
        table.addCell(cell);
         
        cell.setPhrase(new Phrase("Compañía", font));
        table.addCell(cell);
         
        cell.setPhrase(new Phrase("Descripción de uso", font));
        table.addCell(cell);
        
        cell.setPhrase(new Phrase("Fecha de realización", font));
        table.addCell(cell);
    }
     
    private void writeTableData(PdfPTable table) {
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
        access.forEach(acceso -> {
            table.addCell(String.valueOf(acceso.getId()));
            table.addCell(acceso.getName());
            table.addCell(acceso.getEmail());
            table.addCell(acceso.getCompany());
            table.addCell(acceso.getDescription());
            table.addCell(dateFormat.format(acceso.getRealizationDate()));
        });
    }
     
    public void export(HttpServletResponse response) throws DocumentException, IOException {
        Document document = new Document(PageSize.A4.rotate());
        PdfWriter.getInstance(document, response.getOutputStream());
         
        document.open();
        Font font = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        font.setSize(18);
        font.setColor(Color.BLUE);
         
        Paragraph p = new Paragraph("Peticiones de Acceso", font);
        p.setAlignment(Paragraph.ALIGN_CENTER);
         
        document.add(p);
         
        PdfPTable table = new PdfPTable(6);
        table.setWidthPercentage(100f);
        table.setWidths(new float[] {0.8f, 2.0f, 3.0f, 2.0f, 2.5f, 1.5f});
        table.setSpacingBefore(10);
         
        writeTableHeader(table);
        writeTableData(table);
         
        document.add(table);
         
        document.close();
         
    }
    
}
