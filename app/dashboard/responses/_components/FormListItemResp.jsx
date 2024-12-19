import { Button } from "@/components/ui/button";
import { db } from "@/configs";
import { userResponses } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import ExcelJS from "exceljs"; // Import ExcelJS

function FormListItemResp({ jsonForm, formRecord }) {
  const [loading, setLoading] = useState(false);

  const ExportData = async () => {
    let jsonData = [];
    setLoading(true);
    const result = await db
      .select()
      .from(userResponses)
      .where(eq(userResponses.formRef, formRecord.id));

    console.log(result);
    if (result) {
      result.forEach((item) => {
        const jsonItem = JSON.parse(item.jsonResponse);
        jsonData.push(jsonItem);
      });
      setLoading(false);
    }
    console.log(jsonData);
    exportToExcel(jsonData);
  };

  /**
   * Convert Json to Excel and then Download it using ExcelJS
   */
  const exportToExcel = async (jsonData) => {
    // Create a new workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

    // Add header row
    if (jsonData.length > 0) {
      worksheet.columns = Object.keys(jsonData[0]).map((key) => ({
        header: key,
        key: key,
        width: 20, // Adjust the column width as needed
      }));
    }

    // Add data rows
    jsonData.forEach((item) => {
      worksheet.addRow(item);
    });

    // Generate and download the file
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${jsonForm?.formTitle}.xlsx`;
    link.click();
  };

  return (
    <div className="border shadow-sm rounded-lg p-4 my-5">
      <h2 className="text-lg text-black">{jsonForm?.formTitle}</h2>
      <h2 className="text-sm text-gray-500">{jsonForm?.formHeading}</h2>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <h2 className="text-sm">
          <strong>69</strong> Responses
        </h2>
        <Button
          className=""
          size="sm"
          onClick={() => ExportData()}
          disabled={loading}
        >
          {loading ? <Loader2 className="animate-spin" /> : "Export"}
        </Button>
      </div>
    </div>
  );
}

export default FormListItemResp;
