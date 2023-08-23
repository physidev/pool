document.addEventListener("DOMContentLoaded", function() {
    const departSelect = document.querySelector("#depart");
    const schoolSelect = document.querySelector("#school");

    if (departSelect && schoolSelect) {
        schoolSelect.addEventListener("change", function() {
            const selectedSchool = schoolSelect.value;
            updateDepartOptions(selectedSchool);
        });
    }

    function updateDepartOptions(selectedSchool) {
        // Define the options for each school
        const schoolOptions = {
            "UChicago": ["North", "Max P", "Snell-Hitchcock", "South", "Woodlawn", "iHouse"],
            "Harvard": ["Dorm A", "Dorm B", "Dorm C"],
            // Add options for other schools here...
        };

        // Clear existing options
        departSelect.innerHTML = "";

        // Populate with options for the selected school
        const options = schoolOptions[selectedSchool];
        options.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option;
            departSelect.appendChild(optionElement);
        });
    }
});
