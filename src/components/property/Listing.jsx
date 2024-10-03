import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./listing.css";
import Service from "../../config/config";
import author from "../../assets/property/author.jpg";
import hamburger from "../../assets/property/hamburger.png";
import drop from "../../assets/property/drop.png";
import location from "../../assets/property/location.png";
import cross from "../../assets/property/cross.png";
import SideOpt from "./listingComponents/SideOpt";
import SelectLocation from "./listingComponents/SelectLocation";
import Filters from "./listingComponents/Filters";
import Cards from "./listingComponents/Cards";
import Pagination from "./listingComponents/Pagination";
import ClipLoader from "react-spinners/ClipLoader"; // Assuming you're using react-spinners

const Listing = () => {
  const [Hamburger, SetHamburger] = useState(false);
  const [isOpen, SetIsOpen] = useState(false);
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [propertiesPerPage, setPropertiesPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState(false);
  const [Location, setLocation] = useState(false);
  const [compare, setCompare] = useState([]);

  function handleOpen() {
    SetIsOpen(!isOpen);
  }
  function handleHamburger() {
    SetHamburger(!Hamburger);
  }
  function handleMode() {
    setMode(!mode);
  }
  function handleLocation() {
    setLocation(!Location);
  }
  function handleCompareClick() {
    // Store the compare and properties data in localStorage
    localStorage.setItem('compare', JSON.stringify(compare));
    localStorage.setItem('properties', JSON.stringify(properties));
    
    // Open the ComparePage in a new tab
    window.open("/property/compare", "_blank");
  }
  

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const propertyData = await Service.fetchProperty();
        setProperties(propertyData || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Watch for changes in the query parameter and apply sorting
  useEffect(() => {
    const query = new URLSearchParams(window.location.search); // Check this change
    const sortType = query.get("sort");

    if (sortType) {
      sortProperties(sortType);
    }
  }, [window.location.search]);

  // Sorting logic based on the query parameter
  const sortProperties = (sortType) => {
    let sortedProperties = [...properties];

    if (sortType === "price-low-high") {
      sortedProperties.sort((a, b) => a.rent - b.rent);
      console.log("helloo");

    } else if (sortType === "price-high-low") {
      sortedProperties.sort((a, b) => b.rent - a.rent);
      console.log("helloo");

    } else if (sortType === "most-trending") {
      // Assuming you have a "trendingScore" or similar property
      sortedProperties.sort((a, b) => b.reviews.length - a.reviews.length);

    } else if (sortType === "date-uploaded") {
      // Assuming you have a "dateUploaded" field
      sortedProperties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    setProperties(sortedProperties); // Update the state with sorted properties
  };

  // Calculate total pages
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  // Get current properties
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const handleSortClick = (sortType) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("sort", sortType);
    navigate(`?${queryParams.toString()}`); // Update URL with new sort query
    sortProperties(sortType);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#6CC1B6" size={150} />
      </div>
    );
  }

  return (
    <>
      <div
        className={`bg-black opacity-80 w-full h-[2600px] absolute z-20 ${
          isOpen || Hamburger || Location ? "block" : "hidden"
        }`}
      ></div>

      <section className="property py-24" id="property">
        <div className="container mx-auto px-10">
          <div>
            <div className="flex items-center justify-between px-3 pb-20">
              <p className="lg:text-5xl md:text-4xl text-2xl text-[#C8A21C] font-bold">
                Property Listing
              </p>
              <img
                src={hamburger}
                alt="Hamburger Menu"
                className="cursor-pointer lg:w-12 md:w-11 w-9 h-auto"
                onClick={handleHamburger}
              />
            </div>
            <div className="absolute z-50 right-0 flex gap-4 p-4 sm:w-full md:w-[442px] lg:w-[500px] h-fit">
              <div>
                <img
                  src={cross}
                  alt="Close"
                  onClick={handleHamburger}
                  className={`${Hamburger ? "block" : "hidden"} cursor-pointer`}
                />
              </div>

              <div
                className={`flex flex-col bg-white text-black py-4 rounded-lg shadow-lg md:w-full ${
                  Hamburger ? "block" : "hidden"
                }`}
              >
                <SideOpt />
              </div>
            </div>

            <div className="flex items-center justify-start gap-3 pb-10 ml-4 flex-col md:flex-row lg:flex-row">
              <div className="bg-white h-14 w-80 flex items-center justify-between text-black px-4 rounded-2xl">
                <div className="w-1/4 flex items-center justify-start gap-4 border-r-2 h-3/4 border-black">
                  <p className="text-black">Sort</p>
                  <img
                    src={drop}
                    alt="Dropdown"
                    className={`${
                      mode ? "rotate-180" : "rotate-0"
                    } mt-1 cursor-pointer`}
                    onClick={handleMode}
                  />
                  <div className="relative">
                    <div
                      className={`${
                        mode ? "block" : "hidden"
                      } z-50 absolute bg-white shadow-lg rounded-lg text-center w-40 py-3 top-[50px] left-0`}
                    >
                      <p
                        className="border-b-2 py-2 text-lg font-medium cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          handleSortClick("price-low-high"), setMode(false);
                        }}
                      >
                        Price: Low to High
                      </p>
                      <p
                        className="border-b-2 py-2 text-lg font-medium cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          handleSortClick("price-high-low"), setMode(false);
                        }}
                      >
                        Price: High to Low
                      </p>
                      <p
                        className="py-2 text-lg font-medium cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          handleSortClick("most-trending"), setMode(false);
                        }}
                      >
                        Most Trending
                      </p>
                      <p
                        className="py-2 text-lg font-medium cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          handleSortClick("date-uploaded"), setMode(false);
                        }}
                      >
                        Date Uploaded
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-3/4 gap-4 pl-2">
                  <div className="text-sm py-1 px-4 bg-[#EED98B] rounded-full">
                    <p>Lucknow</p>
                  </div>
                  <div className="text-[12px]">
                    <p>Add more ..</p>
                  </div>
                  <div>
                    <img
                      src={location}
                      alt="Location"
                      className="cursor-pointer"
                      onClick={handleLocation}
                    />
                  </div>
                  <div
                    className={`absolute lg:left-28 left-[-20px] flex lg:gap-3 z-50 ${
                      Location ? "block" : "hidden"
                    }`}
                  >
                    <div>
                      <img
                        src={cross}
                        alt="Close"
                        onClick={handleLocation}
                        className="cursor-pointer"
                      />
                    </div>
                    <SelectLocation />
                  </div>
                </div>
              </div>
              <div className="h-14 w-56 bg-white text-black flex items-start justify-between px-5 rounded-2xl">
                <div className="flex items-center justify-start gap-4 h-full w-2/4">
                  <div className="h-6 w-6 bg-[#EED98B] rounded-full flex items-center justify-center">
                    2
                  </div>
                  <div>Filters</div>
                </div>
                <div className="h-full flex items-center justify-center w-1/4 cursor-pointer rounded-full">
                  <img
                    src={drop}
                    alt="Dropdown"
                    onClick={handleOpen}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              {compare.length > 0 && (
                <div className="">
                  <button
                    onClick={() => setCompare([])}
                    className="hover:bg-red-500 bg-white text-black rounded-2xl px-10 py-4 mx-4"
                  >
                    clear Compare
                  </button>

                  <button onClick={() => handleCompareClick()} className="hover:105 hover:bg-yellow-500 bg-white text-black rounded-2xl px-10 py-4">Compare{compare.length}</button>
                </div>
              )}

            </div>
          </div>

          <div
            className={`min-w-full min-h-fit absolute z-30 top-32 flex items-start justify-center gap-5 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div>
              <img
                src={cross}
                alt="Close"
                onClick={handleOpen}
                className="cursor-pointer lg:static md:static absolute lg:bg-transparent md:bg-transparent bg-black rounded-full top-3 right-56 w-9 lg:w-20 md:w-20 z-50"
              />
            </div>

            <Filters />
          </div>

          <Cards
            properties={properties}
            compare={compare}
            setCompare={setCompare}
          />
        </div>
      </section>

      <Pagination
        properties={properties}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default Listing;
