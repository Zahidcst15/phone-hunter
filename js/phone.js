const loadPhone = async (searchText, isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll);
}


const displayPhones = (phones, isShowAll) =>{
    const phoneContainer = document.getElementById('phone-container');

    phoneContainer.textContent = '';
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length >9 && !isShowAll){
         showAllContainer.classList.remove('hidden')
    }
    else{
      showAllContainer.classList.add('hidden')
    }

    // display only first 10 phone if not show all
    if(!isShowAll){
      phones = phones.slice(0, 9)
    }


    phones.forEach(phone =>{
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card p-4 bg-base-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
    // hide loading spinner
    toggleLoadingSpinner(false);
}

// handel search button
const handelSearch = (isShowAll) =>{
  toggleLoadingSpinner(true);
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadPhone(searchText, isShowAll);
}


const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
      loadingSpinner.classList.remove('hidden');
    }
    else{
      loadingSpinner.classList.add('hidden');
    }

}


// handel show all

const handelShowAll = () =>{
   handelSearch(true);
}





// loadPhone()