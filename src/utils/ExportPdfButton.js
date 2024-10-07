import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// download dashboard report
export const ExportPdfButton = ({ data }) => {
  const handleExport = () => {
    const doc = new jsPDF();

    // Table headers
    const headers = [["S.No", "Device ID", "Deck", "Compartment", "Device Type", "Status/Alert", "Remarks"]];

    // Table rows - filter data where status_log is not empty
    const rows = data
      .filter(item => item.status_log !== "") // Filter rows with non-empty status_log
      .map((item, index) => [
        index + 1, 
        item.node_id, 
        item.deck, 
        item.compartment, 
        item.node_type, 
        item.status_log, // Use status_log instead of status
        "" // Empty remarks field
      ]);

    // Add the table to the PDF with custom row height and column widths
    doc.autoTable({
      head: headers,
      body: rows,
      startY: 20,
      theme: 'grid',
      styles: { 
        halign: 'center', // Horizontal align text to center
        valign: 'middle', // Vertical align text to middle
        lineColor: [0, 0, 0], // Border color
        lineWidth: 0.2, // Border width
        fontSize: 10, // Font size of table
        minCellHeight: 12, // Minimum cell height for rows
      },
      columnStyles: {
        0: { cellWidth: 10 },  // S.No column width
        1: { cellWidth: 18 },  // Device ID column width
        2: { cellWidth: 14 },  // Deck column width
        3: { cellWidth: 28 },  // Compartment column width
        4: { cellWidth: 26 },  // Device Type column width
        5: { cellWidth: 40 },  // Status/Alert column width
        6: { cellWidth: 54 },  // Remarks column width, increased size
      },
      margin: { top: 25 },
    });

    // Save the PDF
    doc.save("device_info.pdf");
  };

  return (
    <button onClick={handleExport} style={{width: "200px", cursor: "pointer", borderRadius: "6px", color: "#ffffff", backgroundColor: "#3f3f3f", border: "1px solid #ffffff", height: "30px", fontSize: "14px", fontWeight: "500", marginRight: "20px"}}>
      Generate Report
    </button>
  );
};

// download deck report
export const handleDownloadData = (specificDeviceChartData, deviceInfo, deckInfo, deck) => {
    const details = deckInfo.flatMap((item, index) => {
      return deviceInfo.filter(
        data => data.deck === parseInt(deck) && data.compartment === item.comp && !data.status.includes("success")
      );
    });
  
    const data = details.map(data => {
      return specificDeviceChartData.filter(item => item.node_name === data.node_name);
    }).flat(); 
  
    const doc = new jsPDF();
  
    // Create a table to store all devices
    const tableRows = [];
    
    // Loop through each device and prepare the data for the table
    data.forEach((device, idx) => {
      const tempAlerts = device.alertlogstemp && device.alertlogstemp.length > 0 
        ? device.alertlogstemp.map(log => `${log.time}: ${log.message}`).join("\n") 
        : "Fine";
      
      const batteryAlerts = device.alertlogsbattery && device.alertlogsbattery.length > 0 
        ? device.alertlogsbattery.map(log => `${log.time}: ${log.message}`).join("\n") 
        : "Fine";
  
      tableRows.push([
        idx + 1, // S.No.
        device.comp || "N/A", // Compartment
        device.node_name || "N/A", // Device Name
        tempAlerts, // Temperature Alerts
        batteryAlerts // Battery Alerts
      ]);
    });
  
    // Add Deck heading
    doc.setFont('helvetica', 'bold');
    doc.text(`Deck - ${deck}`, 10, 20); // Title for deck number
  
    // Add the table
    doc.autoTable({
      startY: 30,
      head: [['S.No', 'Comp', 'Device Name', 'Temp Alerts', 'Battery Alerts']], // Table header
      body: tableRows,
      styles: { 
        halign: 'center', // Horizontal alignment for content
        cellPadding: 5,  // Increase cell padding for more space
        minCellHeight: 10, // Row height
      },
      columnStyles: {
        0: { cellWidth: 15 },  // S.No. column width
        1: { cellWidth: 25 },  // Compartment column width
        2: { cellWidth: 40 },  // Device Name column width
        3: { cellWidth: 50, halign: 'left' },  // Temperature Alerts column width
        4: { cellWidth: 50, halign: 'left'  },  // Battery Alerts column width
      },
    });
  
    // Save the PDF file
    doc.save('downloadData.pdf');
  };


//   const handleDownloadData = () => {
//     const details = deckInfo.flatMap((item, index) => {
//       return deviceInfo.filter(
//         data => data.deck === parseInt(deck) && data.compartment === item.comp && !data.status.includes("success")
//       );
//     });
  
//     const data = details.map(data => {
//       return specificDeviceChartData.filter(item => item.node_name === data.node_name);
//     }).flat(); 
  
//     const doc = new jsPDF();
  
//     data.forEach((deviceData, index) => {
//       const node = deviceData; 
  
//       doc.setFont('helvetica', 'bold');
      
//       doc.text(`Node Name: ${node.node_name}`, 10, 10 + (index * 60)); 
//       doc.text(`Deck: ${node.deck}`, 10, 20 + (index * 60)); 
//       doc.text(`Compartment: ${node.comp}`, 10, 30 + (index * 60)); 
  
//       doc.setFont('helvetica', 'normal');
      
//       if (node.alertlogstemp && node.alertlogstemp.length > 0) {
//         doc.text('Temperature Alerts:', 10, 40 + (index * 60));
  
//         node.alertlogstemp.forEach((log, logIndex) => {
//           doc.text(`${log.time}: ${log.message}`, 10, 50 + (index * 60) + (logIndex * 10));
//         });
//       }
  
//       if (node.alertlogsbattery && node.alertlogsbattery.length > 0) {
//         doc.text('Battery Alerts:', 10, 50 + (index * 60) + (node.alertlogstemp ? node.alertlogstemp.length * 10 : 0));
  
//         node.alertlogsbattery.forEach((log, logIndex) => {
//           doc.text(`${log.time}: ${log.message}`, 10, 60 + (index * 60) + (logIndex * 10));
//         });
//       }
  
//       // new node on new page
//       if (index < data.length - 1) {
//         doc.addPage();
//       }
//     });
//     doc.save('downloadData.pdf');
//   };
