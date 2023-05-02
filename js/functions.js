let deviceLong, deviceLat;

// Icon for user location
let userIcon = L.icon({
  iconUrl:
    "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/6446b588d5111f8507349cde_tag-user.svg",
  iconSize: [32, 32], // size of the icon
  iconAnchor: [32, 32], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// Icon for pines.
let locationIcon = L.icon({
  iconUrl:
    "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/6446b90622a2c5144c57bb9e_pkw-pointer-outline.svg",
  iconSize: [32, 32], // size of the icon
  iconAnchor: [32, 32], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// New Simplifyed code
let menu = {
  open: false,
  current: undefined
};

let activeFilters = [];

let spotPreview = false;

// Define the filter object and the active filters array
const filterObject = {
  level: "",
  category: "",
  obstacles: []
};

// Here i link the elements from the spot card
const spotDOM = {
  element: document.querySelector('[menu="spot"]'),
  image: document.querySelector('[spot-element="image"]'),
  header: document.querySelector('[spot-element="header"]'),
  detail: document.querySelector('[spot-element="detail"]')
};

spotDOM.header.addEventListener("click", () => {
  spotDOM.image.classList.toggle("spot_section-hidden");
  spotDOM.detail.classList.toggle("spot_section-hidden");
});

const filterContainer = document.querySelector("#filterLocationCont");

// Aquí inicializo el mapa
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
let mymap = L.map("map", {
  zoomControl: false // disables the zoom buttons
});

/*  Here begins the functionality Scripts  */

// This links and open the locations menu
const locationsMenu = document
  .querySelector('[menu-option="filters"]')
  .addEventListener("click", swapMenus);

// This links and open the "Add Spot" menu
const addSpotMenu = document
  .querySelector('[menu-option="addSpot"]')
  .addEventListener("click", swapMenus);

// This centers the map on the user coordinates
const centerLocation = document
  .querySelector('[menu-option="center"]')
  .addEventListener("click", () => {
    mymap.setView([deviceLat, deviceLong], 15);
  });

//

// This function alternate between menus
function swapMenus() {
  let clickedMenu = event.currentTarget.getAttribute("menu-option");
  if (!menu.open) {
    menu.current = document.querySelector(`[menu=${clickedMenu}]`);
    menu.current.classList.add("animation_options");
    menu.open = true;
  } else if (menu.open && menu.current !== clickedMenu) {
    menu.current.classList.remove("animation_options");
    menu.current = document.querySelector(`[menu=${clickedMenu}]`);
    menu.current.classList.add("animation_options");
    menu.open = true;
  }
}

// This function generate the buttons for the filters and the pins
function generateButtons() {
  pkSpots.forEach(function (element, index) {
    // Generate button for the filter list
    const button = document.createElement("div");
    button.className = "location_option";
    button.setAttribute("data-id", index);

    // Create a filters string from pkSpots[index]
    let spotObstacles = pkSpots[index].obstacles;
    let lowerCaseObstacles = spotObstacles.map((e) => e.toLowerCase());
    const filters = [
      pkSpots[index].location.toLowerCase(),
      pkSpots[index].country.toLowerCase(),
      pkSpots[index].state.toLowerCase(),
      pkSpots[index].category.toLowerCase(),
      pkSpots[index].level.toLowerCase(),
      ...lowerCaseObstacles
    ].join(",");

    button.setAttribute("data-filters", filters);

    // Title and filter for the button.
    const buttonTitle = document.createElement("div");
    buttonTitle.innerText = pkSpots[index].location;
    buttonTitle.className = "body-5";

    // Append the title element and wrapper element to the button element
    button.append(buttonTitle);
    // Append the button element to the filter container
    filterContainer.append(button);

    // Here i add the open spot function
    button.addEventListener("click", () => {
      printLocationAndPreviewSpot(index);
    });

    // Create a marker on the map
    const marker = L.marker(
      [pkSpots[index].latitude, pkSpots[index].longitude],
      {
        index: index,
        icon: locationIcon
      }
    ).addTo(mymap);

    // Add a click listener to the marker
    marker.on("click", function (e) {
      const id = this.options.index;
      // Here i add the function when a marker is clicked
      printLocationAndPreviewSpot(id);
    });
  });
}

// This creates the filter attributes for the location filter buttons
function createFilterElement(value) {
  const filterElement = document.createElement("div");
  filterElement.innerText = value;
  return filterElement;
}

// This filter de buttons to the active filters
function filter() {
  let searchResults = [];
  let searchbarTest = document.querySelectorAll("[data-filters]");
  searchbarTest.forEach((element) => {
    let properties = element.getAttribute("data-filters");
    let matchesFilters = true;
    // Check if element matches active filters
    activeFilters.forEach((filterValue) => {
      if (!properties.includes(filterValue)) {
        matchesFilters = false;
      }
    });
    // Check if element matches search term
    if (
      filterObject.searchTerm !== "" &&
      !properties.includes(filterObject.searchTerm)
    ) {
      matchesFilters = false;
    }
    if (matchesFilters) {
      searchResults.push(element);
    }
  });
  return searchResults;
}

// This shows only matching results
function displayResults(searchResults) {
  let allElements = document.querySelectorAll("[data-filters]");
  allElements.forEach((element) => {
    if (searchResults.includes(element)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

// Preview and Print Spots
function printLocationAndPreviewSpot(id) {
  let spot = pkSpots[id];
  const spotInfo = document.querySelector('[spot-info="location"]');
  spotInfo.innerText = spot.location;
  document.querySelector('[spot-info="address"]').innerText = spot.address;
  document.querySelector('[spot-info="state"]').innerText = spot.state;
  document.querySelector('[spot-info="country"]').innerText = spot.country;
  document.querySelector('[spot-info="category"]').innerText = spot.category;
  document.querySelector('[spot-info="level"]').innerText = spot.level;
  document.querySelector('[spot-info="image"]').srcset = spot.image;
  document.querySelector(
    '[spot-info="obstacles"]'
  ).innerText = spot.obstacles.join(", ");
  document.querySelector(
    '[spot-info="navigation"]'
  ).href = `https://www.google.com/maps/dir/?api=1&destination=${spot.latitude},${spot.longitude}`;
  mymap.setView([spot.latitude, spot.longitude], 15);

  // This menu opens when clicking a location
  //menu = true;
  //menu.current = document.querySelector(`[menu="spot"]`);
  spotDOM.element.classList.add("animation_options");
  document.querySelector('[close-menu="filters"]').click();

  // This resets the preview state of the modal
  if (!spotDOM.image.classList.contains("spot_section-hidden")) {
    document.querySelector('[spot-element="header"]').click();
  }
}

/*  Here i initialice the app  */

// Inicializar ubicación del dipositivo.
navigator.geolocation.getCurrentPosition(function (position) {
  deviceLat = position.coords.latitude;
  deviceLong = position.coords.longitude;
  mymap.setView([deviceLat, deviceLong], 15);
  tiles.addTo(mymap);
  L.marker([deviceLat, deviceLong], { icon: userIcon }).addTo(mymap);
});

// This closes the menus
const closeMenus = document.querySelectorAll("[close-menu]");
closeMenus.forEach((element) => {
  element.addEventListener("click", () => {
    let menu = event.currentTarget.getAttribute("close-menu");
    document
      .querySelector(`[menu=${menu}]`)
      .classList.remove("animation_options");
    menu.open = false;
  });
});

// Here i link the filter buttons
const filterButtons = document.querySelectorAll("[filter-field]");
filterButtons.forEach((element) => {
  let filterType = element.getAttribute("filter-field");
  if (filterType == "input") {
    element.addEventListener("input", (e) => {
      filterObject.searchTerm = e.target.value.toLowerCase();
      let searchResults = filter();
      displayResults(searchResults);
    });
  } else {
    element.addEventListener("change", () => {
      switch (filterType) {
        case "level":
        case "category":
          // Remove the previous filter choice, if any
          let filterValue = filterObject[filterType];
          let filterIndex = activeFilters.indexOf(filterValue);
          if (filterIndex !== -1) {
            activeFilters.splice(filterIndex, 1);
          }

          // Set the new filter choice
          if (event.currentTarget.value !== "") {
            filterObject[filterType] = event.currentTarget.value.toLowerCase();
            activeFilters.push(filterObject[filterType]);
          }
          break;
        case "obstacle":
          let currentObstacle = event.currentTarget.innerText.toLowerCase();
          let obstacleIndex = filterObject.obstacles.indexOf(currentObstacle);
          let isObstacleActive = event.currentTarget.classList.contains(
            "is-active"
          );
          if (obstacleIndex !== -1) {
            // Remove the obstacle from the filters
            filterObject.obstacles.splice(obstacleIndex, 1);
            activeFilters.splice(activeFilters.indexOf(currentObstacle), 1);
            event.currentTarget.classList.remove("is-active");
          } else {
            // Add the obstacle to the filters
            filterObject.obstacles.push(currentObstacle);
            activeFilters.push(currentObstacle);
            event.currentTarget.classList.add("is-active");
          }
          break;
      }
      let searchResults = filter();
      displayResults(searchResults);
    });
  }
});

generateButtons();
