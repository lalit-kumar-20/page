const sampleData = [
    { image: './1img.jpg', title: 'Laundry', },
    { image: './2img.jpg', title: 'Dry Clean', },
    { image: './3img.jpg', title: 'Uphoistery', },
    { image: './4.jpeg', title: 'Stream Ironing', },
    { image: './5img.jpg', title: 'Home Cleaning', },
    { image: './6img.jpg', title: 'Products Store', }
  ];

  // Get the container element
const cardsContainer = document.getElementById('cards-container');

// Function to render cards in the container
function renderCards(data) {
    cardsContainer.innerHTML = '';
    data.forEach(product => {
        // Construct HTML markup for each card
        const cardHTML = `
            <div class="card" onclick="search('${product.title}')">
                <img src="${product?.image}" alt="${product?.title}" class="card-image">
                <h3 class="card-title">${product?.title}</h3>
            </div>
        `;
        // Append card HTML to container
        cardsContainer.innerHTML += cardHTML;
    });
}

// Function to search and display a specific product
function search(title) {
  // console.log("Lalit")
  // let title="Home Cleaning"
    // Filter the sample data to find the product with the given title
    const product = sampleData.find(item => item.title === title);
    // Render only the selected product as a searchable product
    console.log(product)
    if(product){
    cardsContainer.innerHTML = '';
    const cardHTML = `
        <div class="card">
            <img src="${product?.image}" alt="${product?.title}" class="card-image">
            <h3 class="card-title">${product?.title}</h3>
        </div>
    `;
    cardsContainer.innerHTML = cardHTML;
    }
}

// Initial rendering of all cards
renderCards(sampleData);



// Function to handle searchbar
function searchProduct() {
    const searchTerm = document.querySelector('.search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}



const slides = document.querySelectorAll('.slider .slides .slide');
slides[0].style.opacity = 1;

const radioButtons = document.querySelectorAll('.slider input[type="radio"]');
radioButtons.forEach(button => {
  button.addEventListener('change', function() {
    const slideId = this.id;
    const slideIndex = slideId.charAt(slideId.length - 1);
    slides.forEach(slide => {
      slide.style.opacity = 0;
    });
    document.querySelector(`.slider .slides .slide${slideIndex}`).style.opacity = 1;
  });
});

let currentIndex = 0;

// const radioButtons = document.querySelectorAll('.slider input[type="radio"]');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });
  // Update the radio button selection
  radioButtons[index].checked = true;
}



function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 5000);



