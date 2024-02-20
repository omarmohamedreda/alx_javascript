document.addEventListener("DOMContentLoaded", function () {
    const dynamicForm = document.getElementById("dynamicForm");
    const numFieldsSelect = document.getElementById("numFields");
    const inputContainer = document.getElementById("inputContainer");

    
    numFieldsSelect.addEventListener("change", function () {
        const numFields = parseInt(numFieldsSelect.value);

        
        generateInputFields(numFields);
    });

    
    dynamicForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission

        
        if (validateForm()) {
            dynamicForm.submit(); 
        }
    });

    function generateInputFields(numFields) {
        
        inputContainer.innerHTML = "";

        
        for (let i = 1; i <= numFields; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.name = `field${i}`;
            input.placeholder = `Field ${i}`;
            inputContainer.appendChild(input);
        }
    }

    function validateForm() {
        const inputs = inputContainer.querySelectorAll("input");

        
        for (const input of inputs) {
            if (input.value.trim() === "") {
                alert("Please fill in all fields.");
                return false; 
            }
        }

        return true; 
    }
});
