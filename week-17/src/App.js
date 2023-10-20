import { useState } from "react";
import data from "./data";

export default function App() {
  const [bill, setBill] = useState([]);

  function addToBill(item) {
    if (item) {
      setBill([...bill, item]);
    } else {
      setBill([...bill]);
    }
  }

  function deleteFromBill(id) {
    setBill(bill.filter((item) => +item.id !== +id));
    return;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 mx-32">
      <Header />
      <div className="flex items-center justify-center  px-5 w-full">
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 w-fit sm:w-[84%] lg:w-fit">
          {data.map((data) => (
            <CoffeeCard
              details={data}
              key={data.id}
              onAddToBill={addToBill}
              onDeleteBill={deleteFromBill}
              billArray={bill}
              bill={false}
            />
          ))}
        </div>
      </div>
      <BillBoxTitle />
      <div className="flex flex-wrap items-center justify-center px-5 w-full">
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 w-fit sm:w-[84%] lg:w-fit">
          {bill.map((data) => (
            <CoffeeCard bill={true} details={data} key={data.id} />
          ))}
        </div>
      </div>
      <Footer billArray={bill} />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <img className="w-1/2 h-1/2" src="./img/logo.png" alt="logo" />
      <h2 className="sm:text-4xl text-2xl font-bold p-5 text-center">
        StarBucks Online Coffee Order
      </h2>
    </div>
  );
}

function CoffeeCard({ details, billArray, bill, onAddToBill, onDeleteBill }) {
  const [count, setCount] = useState(0);

  function increment(id) {
    setCount((qty) => qty + 1);

    const currentItem = billArray.find((item) => +item.id === +id);

    if (currentItem) {
      currentItem.quantity = count + 1;
      onAddToBill();
    } else {
      details.quantity = count + 1;
      onAddToBill(details);
    }
  }

  function decrement(id) {
    if (count === 0) return;

    setCount((qty) => qty - 1);

    if (count === 1) {
      onDeleteBill(id);
      return;
    }

    const currentItem = billArray.find((item) => +item.id === +id);

    if (currentItem) {
      currentItem.quantity = count - 1;
      onAddToBill();
    }
  }

  return (
    <div
      className="flex flex-col items-center justify-center p-5 rounded-md gap-3"
      style={{ backgroundColor: "#1e3932" }}
    >
      <img className="w-36 h-40" src={details.img} alt={details.name} />
      <h4 className="text-white">{details.name}</h4>
      <span style={{ color: "#e9c9a2" }}>${details.price}</span>
      <div className="flex">
        {bill ? (
          <>
            <p className="text-white">
              Qty: <span>{details.quantity}</span>
            </p>
          </>
        ) : (
          <>
            <button
              onClick={() => increment(details.id)}
              className="py-1 px-2"
              style={{
                backgroundColor: "#e9c9a2",
              }}
            >
              +
            </button>
            <span className="bg-white text-black py-1 px-3">{count}</span>
            <button
              onClick={() => decrement(details.id)}
              className="py-1 px-2"
              style={{ backgroundColor: "#e9c9a2" }}
            >
              -
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function BillBoxTitle() {
  return (
    <div className="py-10">
      <h3 className="text-3xl font-bold">Bill</h3>
    </div>
  );
}

function Footer({ billArray }) {
  const total = billArray.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="py-10 w-3/4 flex flex-col items-center">
      <p className="font-semibold">
        Total: <span>${total}</span>
      </p>
      <button
        className="w-full py-3 rounded-md font-semibold mt-2"
        style={{ backgroundColor: "#e9c9a2" }}
      >
        Submit Order !
      </button>
    </div>
  );
}
