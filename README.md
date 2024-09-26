# IIT-Bombay-Task
Overview
This documentation outlines the design approach and choices made in the development of the Chemical Supplies web application. The application provides a user-friendly interface for managing chemical supply data, allowing users to view, edit, add, delete, and organize chemical entries.

Design Approach
1. User Interface (UI) Design
Table Structure: The application uses an HTML table to display chemical data. Each row represents a chemical entry with various attributes such as ID, Chemical Name, Vendor, Density, Viscosity, Packaging, Pack Size, Unit, and Quantity.

Interactive Elements: The toolbar at the top includes buttons for adding, moving, deleting, refreshing, and saving data. These buttons enhance usability by allowing users to manipulate data easily.

Modal for Editing: A modal dialog is employed for editing chemical details, allowing users to modify entries without navigating away from the main table.

2. Data Management
Data Structure: The chemical data is managed using an array of objects in JavaScript. Each object represents a chemical with its attributes, making it easy to manipulate and display.

Dynamic Updates: Functions such as loadTable, addRow, and deleteRow dynamically update the table, ensuring that changes reflect immediately in the UI.

3. User Interaction
Row Selection: Users can select a row to highlight it, which triggers the display of relevant details in the modal. A tick icon indicates the selected row, changing color to blue to enhance visibility.

Input Fields: Density, Viscosity, and Quantity columns utilize input fields for direct editing within the table, providing a seamless user experience.

4. Styling and Responsiveness
CSS Styling: The application employs CSS for styling, including:

Table and cell styling to create a clean, readable layout.
Highlighting selected rows with a contrasting color.
Styling for input fields to ensure they fit well within table cells.
Responsive Design: The layout is designed to be responsive, adapting to various screen sizes using a flexible table structure.

5. Accessibility and Usability
Semantic HTML: The use of semantic HTML elements (like <table>, <thead>, <tbody>, etc.) improves accessibility for screen readers.

Button Icons: Icons are used to replace text on buttons, improving visual appeal while maintaining functionality. Font Awesome is utilized for consistent and easily recognizable icons.

6. JavaScript Functionality
Event Handling: JavaScript event listeners manage user interactions, such as clicks on table rows and buttons.

Sorting Functionality: The sortTable function allows users to sort the table by clicking on column headers, enhancing data organization.

Data Persistence: While the saveData function is a placeholder, future implementation could involve local storage or backend integration to persist data changes.

7. Future Enhancements
Data Persistence: Implement functionality to save data permanently using local storage or a backend service.
Search and Filter: Add search and filter capabilities to quickly find specific chemicals in the table.
Improved Modal Design: Enhance the modal design for a better user experience, including validation and error handling for input fields.

Output:
![OP](https://github.com/user-attachments/assets/af49b116-7dff-4797-b87c-1015d8bd8723)


