// portfolyo kısım

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const previewItems = document.querySelectorAll(".preview-item");
  
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });
  
      previewItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
  
    previewItems.forEach((item, i) => {
      item.addEventListener("click", () => {
        currentIndex = i;
        showSlide(currentIndex);
      });
    });
  
    showSlide(currentIndex);
  });
  

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const previewItems = document.querySelectorAll(".preview-item");
  
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });
  
      previewItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
  
    previewItems.forEach((item, i) => {
      item.addEventListener("click", () => {
        currentIndex = i;
        showSlide(currentIndex);
      });
    });
  
    showSlide(currentIndex);
  });
  


// maaliyet hesaplama

document.getElementById('form').addEventListener('input', function() {
    var siteType = document.getElementById('siteType').value;
    var deliveryTime = parseInt(document.getElementById('deliveryTime').value);
    var pageCount = parseInt(document.getElementById('pageCount').value);
    
    var basePrice = 0;
    var pricePerDay = 0;
    var pricePerPage = 0;
    
    if (siteType === 'onlineSatis') {
        basePrice = 40000;
        pricePerDay = -500;
        pricePerPage = 5000;
    } else if (siteType === 'blog') {
        basePrice = 20000;
        pricePerDay = -250;
        pricePerPage = 2500;
    } else if (siteType === 'haber') {
        basePrice = 30000;
        pricePerDay = -300;
        pricePerPage = 3000;
    }  else if (siteType === 'oyun') {
        basePrice = 60000;
        pricePerDay = -750;
        pricePerPage = 7500;
    }  else if (siteType === 'tanitim') {
        basePrice = 20000;
        pricePerDay = -250;
        pricePerPage = 2500;
    }  else if (siteType === 'kurumsal') {
        basePrice = 30000;
        pricePerDay = -300;
        pricePerPage = 3000;
    }  else if (siteType === 'forum') {
        basePrice = 20000;
        pricePerDay = -250;
        pricePerPage = 2500;
    }


    var deliveryCost = deliveryTime * pricePerDay;
    var pageCountCost = pageCount * pricePerPage;
    
    var totalCost = basePrice + deliveryCost + pageCountCost;
    
    document.getElementById('totalCost').innerHTML = 'Toplam Maliyet: TL ' + totalCost.toFixed(2);
});