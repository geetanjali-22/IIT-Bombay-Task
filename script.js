let chemicals = [
  {
    id: 1,
    ChemicalName: "Acetone",
    Vendor: "ChemCorp",
    Density: "0.784",
    Viscosity: "0.32",
    Packaging: "Bottle",
    PackSize: "1L",
    Unit: "L",
    Quantity: 100,
  },
  {
    id: 2,
    ChemicalName: "Benzene",
    Vendor: "ChemLab",
    Density: "0.876",
    Viscosity: "0.65",
    Packaging: "Drum",
    PackSize: "200L",
    Unit: "L",
    Quantity: 50,
  },
  {
    id: 3,
    ChemicalName: "Chloroform",
    Vendor: "LabSupply",
    Density: "1.489",
    Viscosity: "0.56",
    Packaging: "Bottle",
    PackSize: "500mL",
    Unit: "mL",
    Quantity: 75,
  },
  {
    id: 4,
    ChemicalName: "Ethanol",
    Vendor: "SolvChem",
    Density: "0.789",
    Viscosity: "1.2",
    Packaging: "Bottle",
    PackSize: "1L",
    Unit: "L",
    Quantity: 120,
  },
  {
    id: 5,
    ChemicalName: "Hexane",
    Vendor: "ChemStore",
    Density: "0.654",
    Viscosity: "0.37",
    Packaging: "Canister",
    PackSize: "5L",
    Unit: "L",
    Quantity: 30,
  },
  {
    id: 6,
    ChemicalName: "Methanol",
    Vendor: "MethylChem",
    Density: "0.791",
    Viscosity: "0.54",
    Packaging: "Bottle",
    PackSize: "1L",
    Unit: "L",
    Quantity: 150,
  },
  {
    id: 7,
    ChemicalName: "Toluene",
    Vendor: "AromaticsInc",
    Density: "0.866",
    Viscosity: "0.59",
    Packaging: "Drum",
    PackSize: "200L",
    Unit: "L",
    Quantity: 40,
  },
  {
    id: 8,
    ChemicalName: "Acetic Acid",
    Vendor: "AceticChem",
    Density: "1.049",
    Viscosity: "0.89",
    Packaging: "Bottle",
    PackSize: "1L",
    Unit: "L",
    Quantity: 80,
  },
  {
    id: 9,
    ChemicalName: "Formaldehyde",
    Vendor: "FormChem",
    Density: "0.812",
    Viscosity: "0.45",
    Packaging: "Bottle",
    PackSize: "500mL",
    Unit: "mL",
    Quantity: 60,
  },
  {
    id: 10,
    ChemicalName: "Hydrochloric Acid",
    Vendor: "AcidSupplies",
    Density: "1.19",
    Viscosity: "0.89",
    Packaging: "Bottle",
    PackSize: "1L",
    Unit: "L",
    Quantity: 110,
  },
  {
    id: 11,
    ChemicalName: "Sodium Hydroxide",
    Vendor: "BaseCorp",
    Density: "2.13",
    Viscosity: "1.2",
    Packaging: "Bag",
    PackSize: "50kg",
    Unit: "kg",
    Quantity: 25,
  },
  {
    id: 12,
    ChemicalName: "Sulfuric Acid",
    Vendor: "AcidLabs",
    Density: "1.84",
    Viscosity: "24",
    Packaging: "Drum",
    PackSize: "200L",
    Unit: "L",
    Quantity: 15,
  },
  {
    id: 13,
    ChemicalName: "Nitric Acid",
    Vendor: "NitroChem",
    Density: "1.41",
    Viscosity: "1.2",
    Packaging: "Bottle",
    PackSize: "1L",
    Unit: "L",
    Quantity: 70,
  },
  {
    id: 14,
    ChemicalName: "Potassium Chloride",
    Vendor: "PotashCorp",
    Density: "1.98",
    Viscosity: "1.3",
    Packaging: "Bag",
    PackSize: "25kg",
    Unit: "kg",
    Quantity: 40,
  },
  {
    id: 15,
    ChemicalName: "Calcium Carbonate",
    Vendor: "CalciumInc",
    Density: "2.71",
    Viscosity: "0.5",
    Packaging: "Bag",
    PackSize: "20kg",
    Unit: "kg",
    Quantity: 50,
  },
];

let currentRow = -1;

function loadTable() {
  const tbody = document.getElementById("chemicalBody");
  tbody.innerHTML = "";
  chemicals.forEach((chemical, index) => {
    const row = tbody.insertRow();
    row.onclick = () => {
      highlightRow(row);
      openModal(index);
    };
    Object.values(chemical).forEach((value, colIndex) => {
      const cell = row.insertCell();

      // Create input fields for Density, Viscosity, and Quantity
      if (colIndex === 3 || colIndex === 4 || colIndex === 8) {
        // Check for Density, Viscosity, Quantity
        const input = document.createElement("input");
        input.type = colIndex === 8 ? "number" : "text"; // Quantity should be a number input
        input.value = value;
        input.className = "input-field";
        input.onchange = () => {
          if (colIndex === 3) {
            chemical.Density = input.value;
          } else if (colIndex === 4) {
            chemical.Viscosity = input.value;
          } else if (colIndex === 8) {
            chemical.Quantity = input.value;
          }
        };
        cell.appendChild(input);
      } else {
        cell.innerText = value;
      }
    });
  });
}

function highlightRow(selectedRow) {
  const rows = document.querySelectorAll("#chemicalBody tr");
  rows.forEach((row) => {
    row.classList.remove("highlight");
    const tickIcon = row.querySelector(".tick-icon");
    if (tickIcon) {
      tickIcon.classList.remove("selected");
    }
  });
  selectedRow.classList.add("highlight");
  const selectedTickIcon = selectedRow.querySelector(".tick-icon");
  if (selectedTickIcon) {
    selectedTickIcon.classList.add("selected"); // Add class to change color when selected
  }
}

function highlightRow(selectedRow) {
  const rows = document.querySelectorAll("#chemicalBody tr");
  rows.forEach((row) => {
    row.classList.remove("highlight");
    const tickIcon = row.querySelector(".tick-icon");
    if (tickIcon) {
      tickIcon.classList.remove("selected");
    }
  });
  selectedRow.classList.add("highlight");
  const selectedTickIcon = selectedRow.querySelector(".tick-icon");
  if (selectedTickIcon) {
    selectedTickIcon.classList.add("selected"); // Add class to change color when selected
  }
}

function sortTable(colIndex) {
  const table = document.getElementById("chemicalTable");
  const rows = Array.from(table.rows).slice(1); // Exclude header
  const isAscending =
    table.rows[0].cells[colIndex].getAttribute("data-sort") === "asc";
  rows.sort((a, b) => {
    const aText = a.cells[colIndex].innerText;
    const bText = b.cells[colIndex].innerText;
    return isAscending
      ? aText.localeCompare(bText)
      : bText.localeCompare(aText);
  });
  rows.forEach((row) => table.tBodies[0].appendChild(row));
  table.rows[0].cells[colIndex].setAttribute(
    "data-sort",
    isAscending ? "desc" : "asc"
  );
}

function openModal(index) {
  currentRow = index;
  const chemical = chemicals[index];
  document.getElementById("chemicalName").value = chemical.ChemicalName;
  document.getElementById("vendor").value = chemical.Vendor;
  document.getElementById("density").value = chemical.Density;
  document.getElementById("viscosity").value = chemical.Viscosity;
  document.getElementById("packaging").value = chemical.Packaging;
  document.getElementById("packSize").value = chemical.PackSize;
  document.getElementById("unit").value = chemical.Unit;
  document.getElementById("quantity").value = chemical.Quantity;
  document.getElementById("editModal").style.display = "block";
}

function closeModal() {
  document.getElementById("editModal").style.display = "none";
}

document.getElementById("editForm").onsubmit = function (event) {
  event.preventDefault();
  const editedChemical = {
    id: chemicals[currentRow].id,
    ChemicalName: document.getElementById("chemicalName").value,
    Vendor: document.getElementById("vendor").value,
    Density: document.getElementById("density").value,
    Viscosity: document.getElementById("viscosity").value,
    Packaging: document.getElementById("packaging").value,
    PackSize: document.getElementById("packSize").value,
    Unit: document.getElementById("unit").value,
    Quantity: document.getElementById("quantity").value,
  };
  chemicals[currentRow] = editedChemical;
  closeModal();
  loadTable();
};

function addRow() {
  const newChemical = {
    id: chemicals.length + 1,
    ChemicalName: "New Chemical",
    Vendor: "New Vendor",
    Density: "0.0",
    Viscosity: "0.0",
    Packaging: "New Packaging",
    PackSize: "1L",
    Unit: "L",
    Quantity: 0,
  };
  chemicals.push(newChemical);
  loadTable();
}

function moveRow(direction) {
  if (currentRow === -1) return;
  const newIndex = currentRow + direction;
  if (newIndex < 0 || newIndex >= chemicals.length) return;
  [chemicals[currentRow], chemicals[newIndex]] = [
    chemicals[newIndex],
    chemicals[currentRow],
  ];
  currentRow = newIndex;
  loadTable();
}

function deleteRow() {
  if (currentRow === -1) return;
  chemicals.splice(currentRow, 1);
  currentRow = -1;
  loadTable();
}

function refreshData() {
  loadTable();
}

function saveData() {
  // Placeholder for save functionality
  alert("Data saved!");
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });
}

loadTable();
