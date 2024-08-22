function showModal(){
    const categoryElement = document.getElementById("category");
    const selectedCategory = categoryElement.options[categoryElement.selectedIndex].text;
    const selectedValue = categoryElement.options[categoryElement.selectedIndex].value;

    const dialog = document.querySelector("dialog");
    
    const overlay = document.getElementById("modalOverlay");
    console.log(selectedValue);
    if(selectedValue !== "0"){
        categoryElement.selectedIndex = 0;
        const dialogWrapper = document.getElementById("categoryDialog__wrapper");

        dialogWrapper.innerHTML = "";

        dialogWrapper.classList.add("categoryDialog__wrapper--category");

        const firstRow = document.createElement("div");
        firstRow.className = "categoryDialog__header";
        
        const header =  document.createElement("p");

        const icon = document.createElement("i");
        icon.className = "bi bi-3-circle-fill";
        icon.style.color = "orange";
        firstRow.appendChild(icon);
        header.textContent = "Which " + selectedCategory + " Law issue(s) apply to your case?";
        firstRow.appendChild(header)
    
        const secondRow = document.createElement("div");
        secondRow.className = "categoryDialog__list";
        
        const familyLawIssues = [
            "Adoptions",
            "Child Support",
            "Guardianship",
            "Separations",
            "Child Custody and Visitation",
            "Divorce",
            "Paternity",
            "Spousal Support or Alimony"
        ]

        const issueList = document.createElement("ul");

        familyLawIssues.forEach(issue => {
            let item = document.createElement("li");
            item.textContent = issue;
            issueList.appendChild(item);
        });

        secondRow.appendChild(issueList);
    
        const thirdRow = document.createElement("div");
        thirdRow.className = "categoryDialog__actions";

        const button = document.createElement("button");
        button.textContent = "FIND A LAWYER NOW";
        button.className = "find-lawyer-btn";
        button.onclick = function() {
            dialog.close();
            overlay.style.display = "none"; 
        };

        thirdRow.appendChild(button);
    
        console.log(firstRow);
        dialogWrapper.appendChild(firstRow);
        dialogWrapper.appendChild(secondRow);
        dialogWrapper.appendChild(thirdRow);
    }else{

    }

    dialog.showModal();
    overlay.style.display = "block";
}