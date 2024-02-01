const xlsx = require('xlsx');

const readExcelFile = async (filename, model) => {
    const workbook = xlsx.readFile(filename);
    const sheetName = workbook.SheetNames[0];
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
  
    for (const data of sheetData) {
      try {
        await model.create({
          first_name: data['First Name'],
          last_name: data['Last Name'],
          age: data['Age'],
          phone_number: data['Phone Number'],
          monthly_salary: data['Monthly Salary'],
          approved_limit: data['Approved Limit'],
          current_debt: 0, // You might want to adjust this default value
        });
      } catch (error) {
        console.error('Error creating customer:', error.message);
      }
    }
  };
  
  module.exports = readExcelFile;
  
