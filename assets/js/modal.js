const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");

function showModal() {
    const categoryElement = document.getElementById("category");
    const selectedCategory = categoryElement.options[categoryElement.selectedIndex].text;
    const selectedValue = categoryElement.options[categoryElement.selectedIndex].value;

    const dialogWrapper = document.getElementById("dialog__wrapper");

    if (selectedValue !== "0") {
        categoryElement.selectedIndex = 0;
        dialogWrapper.innerHTML = "";

        dialogWrapper.classList.remove("dialog__wrapper__reviews");
        dialogWrapper.classList.add("dialog__wrapper__category");

        const firstRow = document.createElement("div");
        firstRow.className = "dialog__wrapper__category--header";

        const header = document.createElement("p");

        const icon = document.createElement("i");
        icon.className = "bi bi-3-circle-fill";
        icon.style.color = "orange";
        firstRow.appendChild(icon);
        header.textContent = "Which " + selectedCategory + " Law issue(s) apply to your case?";
        firstRow.appendChild(header)

        const secondRow = document.createElement("div");
        secondRow.className = "dialog__wrapper__category--list";

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
        thirdRow.className = "dialog__wrapper__category--actions";

        const button = document.createElement("button");
        button.textContent = "FIND A LAWYER NOW";
        button.className = "find-lawyer-btn";
        button.onclick = function () {
            modal.close();
            modalOverlay.style.display = "none";
        };

        thirdRow.appendChild(button);

        dialogWrapper.appendChild(firstRow);
        dialogWrapper.appendChild(secondRow);
        dialogWrapper.appendChild(thirdRow);
    } else {
        dialogWrapper.innerHTML = "";
        dialogWrapper.classList.remove("dialog__wrapper__category");
        dialogWrapper.classList.add("dialog__wrapper__reviews");

        const firstRow = document.createElement("div");
        firstRow.className = "dialog__wrapper__reviews_header";
        const title = document.createElement("h4");

        title.textContent = "CLIENT REVIEWS";
        title.className = "dialog__wrapper__reviews_header-title";

        firstRow.appendChild(title);
        dialogWrapper.appendChild(firstRow);

        //Lawyer profile
        const secondRow = document.createElement("div");
        secondRow.className = "dialog__wrapper__reviews_profile";

        const imgColumn = document.createElement("div");

        const image = document.createElement("img");
        image.src = "../assets/images/lawyer_three.png";
        imgColumn.appendChild(image);

        const infoColumn = document.createElement("div");

        const name = document.createElement("h5");
        name.textContent = "Brigida R.";
        name.className = "dialog__wrapper__reviews_profile-name"
        infoColumn.appendChild(name);

        const location = document.createElement("p");
        location.className = "dialog__wrapper__reviews_profile-location"
        location.textContent = "Dallas, TX";
        infoColumn.appendChild(location);

        const category = document.createElement("p");
        category.className = "dialog__wrapper__reviews_profile-category"
        category.textContent = "Family Law";
        infoColumn.appendChild(category);

        secondRow.appendChild(imgColumn);
        secondRow.appendChild(infoColumn);
        dialogWrapper.appendChild(secondRow);

        const thirdRow = document.createElement("div");
        thirdRow.className = "dialog__wrapper__reviews_rating";

        const ratingHeader = document.createElement("div");
        ratingHeader.className = "dialog__wrapper__reviews_rating_header";

        const ratingHeaderTitle = document.createElement("p");
        ratingHeaderTitle.textContent = "Rating (29 users)";
        ratingHeaderTitle.className = "dialog__wrapper__reviews_rating_header-title";
        ratingHeader.append(ratingHeaderTitle);

        const ratingHeaderStars = document.createElement("div");
        ratingHeaderStars.className = "dialog__wrapper__reviews_rating_header-stars";

        for (let x = 0; x < 4; x++) {
            let star = document.createElement("i");
            star.className = "reviews__content-star bi bi-star-fill";
            ratingHeaderStars.appendChild(star);
        }
        let star = document.createElement("i");
        star.className = "reviews__content-star-empty bi bi-star-fill";
        ratingHeaderStars.appendChild(star);

        ratingHeader.appendChild(ratingHeaderStars);

        thirdRow.appendChild(ratingHeader);


        const ratingTable = document.createElement("div");
        ratingTable.className = "dialog__wrapper__reviews_rating_table";

        const criteriaList = [
            "Responded in a timely manner",
            "Answered questions clearly",
            "Understood needs",
            "Gave complete and clear information",
            "Knowledgeable in legal area",
            "Good value for money",
            "Would hire again",
            "Would recommend to a friend"
        ];

        criteriaList.forEach((criteria, index) => {
            // Create a div to represent a row
            const row = document.createElement("div");
            row.className = "dialog__wrapper__reviews_rating_table_row";

            // Create and append the criteria
            const criteriaItem = document.createElement("p");
            criteriaItem.textContent = criteria;
            row.appendChild(criteriaItem);

            // Create and append the stars
            const starRow = document.createElement("div");
            starRow.className = "dialog__wrapper__reviews_rating_table_star_row";


            for (let y = 0; y < 4; y++) {
                const star = document.createElement("i");
                star.className = "reviews__content-star bi bi-star-fill";
                starRow.appendChild(star);
            }

            if (index % 2 != 0) {
                const emptyStar = document.createElement("i");
                emptyStar.className = "reviews__content-star-empty bi bi-star-fill";
                starRow.appendChild(emptyStar);
            } else {
                const fullStar = document.createElement("i");
                fullStar.className = "reviews__content-star bi bi-star-fill";
                starRow.appendChild(fullStar);
            }

            row.appendChild(starRow);
            ratingTable.appendChild(row);
        });

        thirdRow.appendChild(ratingTable);
        dialogWrapper.appendChild(thirdRow);

        const fourthRow = document.createElement("div");
        fourthRow.className = "dialog__wrapper__reviews_rating_content";

        const reviewHeader = document.createElement("div");
        reviewHeader.className = "dialog__wrapper__reviews_rating_content-header";

        for (let x = 0; x < 5; x++) {
            let star = document.createElement("i");
            star.className = "reviews__content-star bi bi-star-fill";
            reviewHeader.appendChild(star);
        }

        const reviewHeaderLine = document.createElement("p");
        reviewHeaderLine.textContent = "by Dexter Marchal, 06/10/2016";
        reviewHeader.appendChild(reviewHeaderLine);

        fourthRow.appendChild(reviewHeader);

        const reviewBody = document.createElement("p");
        reviewBody.textContent = `Deb did a great job. Got my bench warrant set aside ... was sure I was 
        going to jail ... phew. Judge seemed to respect her and I got what I
        `
        fourthRow.appendChild(reviewBody);

        dialogWrapper.appendChild(fourthRow);

        modal.showModal();
        modalOverlay.style.display = "block";
    }


}

// Function to close the modal
function closeModalHandler() {
    modal.close();
    modalOverlay.style.display = "none";
}

// Add event listener to the close button
closeModal.addEventListener("click", closeModalHandler);