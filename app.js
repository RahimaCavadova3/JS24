let cards = document.getElementById("cards");

function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      data.map((item) => {
        cards.innerHTML += `
                <div data-aos="fade-up" data-aos-duration="1000" class="w-full border-0 shadow-2xl rounded-3xl bg-pink-200 flex flex-col gap-2 pt-8 pb-8">
        <div class="text-center">
          <img class="w-28 mx-auto" src="user.webp" alt="user" />
          <div class="flex flex-col gap-2">
            <h3 class="text-white text-3xl font-bold">${item.name}</h3>
          <p class="text-gray-600 italic text-xl">${item.username}</p>
          </div>
        </div>
        <div class="border-0 bg-black/10 rounded-2xl mx-8 flex flex-col p-3">
          <div class="flex justify-between items-center">
            <p class="text-[white] font-semibold">Email:</p>
            <p class="text-gray-500 font-semibold text-[15px]">${item.email}</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-white font-semibold">Telefon</p>
            <p class="text-gray-500 font-semibold text-[15px]">${item.phone}</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-white font-semibold">Şirkət</p>
            <p class="text-gray-500 font-semibold text-[15px]">${item.company.name}</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-white font-semibold">Şəhər</p>
            <p class="text-gray-500 font-semibold text-[15px]">${item.address.city}</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-white font-semibold">Sayt</p>
            <p class="text-gray-500 font-semibold text-[15px]">${item.website}</p>
          </div>
        </div>
      </div>
                `;
      });
    });
}
getData();
