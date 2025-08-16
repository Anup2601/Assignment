import a1 from "../assets/a1.png";
import a2 from "../assets/a21.jpg";
import a3 from "../assets/a22.jpg";


export const About: React.FC = () => {
  return (
    <section className="p-6 mx-9">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold">Sell and buy everything with BID.AI</h2>
      </div>

      {/* 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-6 px-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <img
            src={a1}
            alt="Category"
            className="size-50 object-cover rounded-lg"
          />
          <div className="mt-2 text-black font-semibold text-2xl text-center">
            <p >More than 13+</p>
            <p>Categories on Build.ai</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <img
            src={a2}
            alt="Sell fast"
            className="size-50 object-cover rounded-lg"
          />
          <div className="mt-2 text-black font-semibold text-2xl text-center">
            <p>Sell your items in 30 seconds</p>
            <p>with One Click Sell</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <img
            src={a3}
            alt="Bidding"
            className="size-50 object-cover rounded-lg"
          />
          <div className="mt-2 text-black font-semibold text-2xl text-center">
            <p>Earn upto $100000000 in</p>
            <p>BID.ai credits by referral!</p>
          </div>
        </div>

      </div>
    </section>
  );
};
