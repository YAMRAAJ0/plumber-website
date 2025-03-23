import Home from "./serviceHome/serviceHome";


const ServicePage = () => {
  const heroData = {
    title: "Plumber Service in Alice Springs",
    description: [
      
    ],
    buttonText: "Call Us!!",
    imageUrl: "/serviceImg/home/unsplash4PPY1v2xChU.jpg", // Corrected path
  };

  return (
    <div>
      <Home {...heroData} />
    </div>
  );
};

export default ServicePage;
