
// Togle class active untuk hamburger menu
const navbarNav = document.querySelector 
    ('.navbar-nav')
// Ketika humberger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// Togle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click' , function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
      searchForm.classList.remove('active');
    }

    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
      shoppingCart.classList.remove('active');
    }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display ='flex';
    e.preventDefault();
  }
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

 //klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};

// Modals Box
const itemDetailModals = document.querySelector('#item-detail-modals');
const itemDetailKliks = document.querySelectorAll('.item-detail-klik');

itemDetailKliks.forEach((klk) => {
  klk.onclick = (e) => {
    itemDetailModals.style.display ='flex';
    e.preventDefault();
  }
});

// klik tombol close modals
document.querySelector('.modals .close-icon').onclick = (e) => {
  itemDetailModals.style.display = 'none';
  e.preventDefault();
};


// Modale Box
const itemDetailModale = document.querySelector('#item-detail-modale');
const itemDetailItems = document.querySelectorAll('.item-detail-item');

itemDetailItems.forEach((itm) => {
  itm.onclick = (e) => {
    itemDetailModale.style.display ='flex';
    e.preventDefault();
  }
});

// klik tombol close modale
document.querySelector('.modale .close-icon').onclick = (e) => {
  itemDetailModale.style.display = 'none';
  e.preventDefault();
};

// Modali Box
const itemDetailModali = document.querySelector('#item-detail-modali');
const itemDetailWings = document.querySelectorAll('.item-detail-wing');

itemDetailWings.forEach((wng) => {
  wng.onclick = (e) => {
    itemDetailModali.style.display ='flex';
    e.preventDefault();
  }
});

// klik tombol close modali
document.querySelector('.modali .close-icon').onclick = (e) => {
  itemDetailModali.style.display = 'none';
  e.preventDefault();
};




