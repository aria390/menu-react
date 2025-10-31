import { useState } from "react";

function App() {
  const all = [
    {
      id: 1,
      type: "Breakfast",
      title: "buttermilk pancakes",
      price: "15.99",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      image: "src/image/item-1.jpeg",
    },
    {
      id: 2,
      type: "Lunch",
      title: "diner double",
      price: "13.99",
      description:
        "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
      image: "src/image/item-2.jpeg",
    },
    {
      id: 3,
      type: "Shakes",
      title: "godzilla milkshake",
      price: "6.99",
      description:
        "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
      image: "src/image/item-3.jpeg",
    },
    {
      id: 4,
      type: "Breakfast",
      title: "country delight",
      price: "20.99",
      description:
        "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
      image: "src/image/item-4.jpeg",
    },
    {
      id: 5,
      type: "Lunch",
      title: "egg attack",
      price: "22.99",
      description:
        "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
      image: "src/image/item-5.jpeg",
    },
    {
      id: 6,
      type: "Shakes",
      title: "oreo dream",
      price: "18.99",
      description:
        "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
      image: "src/image/item-6.jpeg",
    },
    {
      id: 7,
      type: "Breakfast",
      title: "bacon overflow",
      price: "8.99",
      description:
        "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
      image: "src/image/item-7.jpeg",
    },
    {
      id: 8,
      type: "Lunch",
      title: "american classic",
      price: "12.99",
      description:
        "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
      image: "src/image/item-8.jpeg",
    },
    {
      id: 9,
      type: "Shakes",
      title: "quarantine buddy",
      price: "16.99",
      description:
        "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
      image: "src/image/item-9.jpeg",
    },
    {
      id: 10,
      type: "Dinner",
      title: "bison steak",
      price: "22.99",
      description:
        "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
      image: "src/image/item-10.jpeg",
    },
  ];

  const [item, setItem] = useState(all);
  const [active, setActive] = useState(`all`);

  return (
    <main className="flex flex-col  h-full">
      <div className="pt-30 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-5xl font-semibold text-center">Our Menu</h1>
          <div className="bg-[#c59d5f] h-[5px] w-[90px]"></div>
        </div>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => {
              setItem(all);
              setActive(`all`);
            }}
            className={`${
              active === `all`
                ? "bg-[#c59d5f] text-white "
                : "bg-white text-[#c59d5f] hover:bg-[#c59d5f] hover:text-white"
            } shadow-2xs shadow-black px-[12px] py-[2px] border-2 border-[#c59d5f] rounded-md text-[1rem] cursor-pointer`}
          >
            All
          </button>

          <button
            onClick={() => {
              const breakfastFilter = all.filter(
                (item) => item.type === "Breakfast"
              );
              setItem(breakfastFilter);
              setActive(`breakfastFilter`);
            }}
            className={`${
              active === `breakfastFilter`
                ? "bg-[#c59d5f] text-white "
                : "bg-white text-[#c59d5f] hover:bg-[#c59d5f] hover:text-white"
            } shadow-2xs shadow-black px-[12px] py-[2px] border-2 border-[#c59d5f] rounded-md text-[1rem] cursor-pointer`}
          >
            Breakfast
          </button>

          <button
            onClick={() => {
              const LunchFilter = all.filter((item) => item.type === "Lunch");
              setItem(LunchFilter);
              setActive(`LunchFilter`);
            }}
            className={`${
              active === `LunchFilter`
                ? "bg-[#c59d5f] text-white "
                : "bg-white text-[#c59d5f] hover:bg-[#c59d5f] hover:text-white"
            } shadow-2xs shadow-black px-[12px] py-[2px] border-2 border-[#c59d5f] rounded-md text-[1rem] cursor-pointer`}
          >
            Lunch
          </button>

          <button
            onClick={() => {
              const ShakesFilter = all.filter((item) => item.type === "Shakes");
              setItem(ShakesFilter);
              setActive(`ShakesFilter`);
            }}
            className={`${
              active === `ShakesFilter`
                ? "bg-[#c59d5f] text-white "
                : "bg-white text-[#c59d5f] hover:bg-[#c59d5f] hover:text-white"
            } shadow-2xs shadow-black px-[12px] py-[2px] border-2 border-[#c59d5f] rounded-md text-[1rem] cursor-pointer`}
          >
            Shakes
          </button>

          <button
            onClick={() => {
              const DinnerFilter = all.filter((item) => item.type === "Dinner");
              setItem(DinnerFilter);
              setActive(`DinnerFilter`);
            }}
            className={`${
              active === `DinnerFilter`
                ? "bg-[#c59d5f] text-white "
                : "bg-white text-[#c59d5f] hover:bg-[#c59d5f] hover:text-white"
            } shadow-2xs shadow-black px-[12px] py-[2px] border-2 border-[#c59d5f] rounded-md text-[1rem] cursor-pointer`}
          >
            Dinner
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center py-10 px-40 gap-8">
        {item.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-2 w-[569px]"
          >
            <div className="sm:px-20 md:px-0">
              <img
                className="w-full h-[200px] border-4 border-[#c59d5f] rounded-md "
                src={item.image}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4 md:w-100 sm:right-0 top-3 sm:px-20 md:px-0 sm:left-0 relative md:left-5">
              <div className="flex justify-between border-dotted border-b-1 border-black ">
                <p className="font-bold tracking-[0.25rem] pb-2 text-lg">
                  {item.title}
                </p>
                <p className="text-[#c59d5f] font-bold tracking-[0.25rem]">
                  {item.price}
                </p>
              </div>
              <div className="pt-1">
                <p className="text-[#617d98] text-lg">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
