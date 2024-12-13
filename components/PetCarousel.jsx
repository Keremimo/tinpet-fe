import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import PetCard from "./PetCard";

const PetCarousel = async () => {

  const matchingPets = JSON.parse(localStorage.getItem("matchingPets")) || [];
  const speciesToFilter = ["Dog", "Cat", "Bird", "Fish"];
  const petCards = matchingPets.filter((item) =>
    speciesToFilter.includes(item.species)
  );

  if (petCards.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-lg text-gray-600">No matching pets found. Try updating your preferences!</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-full w-full">
      <Carousel className="w-[250px]">
        <CarouselContent>
          {petCards.map((pet, index) => (
            <CarouselItem key={index}>
              <PetCard petCard={pet} showSeeMore={false}/>
              <div className="w-[250px] flex flex-col justify-self-center m-[10px] gap-[20px]">
                <p><strong>Name:</strong> {pet.name}</p>
                <p><strong>Age:</strong> {pet.age}</p>
                <p><strong>Breed:</strong> {pet.breed}</p>
                <p><strong>Sex:</strong> {pet.gender}</p>
                <p><strong>Size:</strong> {pet.size}</p>
                <p><strong>Description:</strong> {pet.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default PetCarousel;
