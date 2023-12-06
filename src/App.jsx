import { useState } from "react";
import "./index.css";

export default function App() {
  //Total money 
  const [total, setTotal] = useState(0);
  // Number of KWh use by air conditioner
  const [vyKwh, setVyKwh] = useState(0);
  const [duongKwh, setDuongKwh] = useState(0);
  const [thachKwh, setThachKwh] = useState(0);
  const [phucKwh, setPhucKwh] = useState(0);

  // Air conditioner money
  let [duongAir, setDuongAir] = useState(0);
  let [vyAir, setVyAir] = useState(0);
  let [thachAir, setThachAir] = useState(0);
  let [phucAir, setPhucAir] = useState(0);

  // Money after minus air conditioner's money
  let [duongMoney, setDuongMoney] = useState(0);
  let [vyMoney, setVyMoney] = useState(0);
  let [thachMoney, setThachMoney] = useState(0);
  let [phucMoney, setPhucMoney] = useState(0);
  
  let defaultPrice = 3500;

  let vyCount = 4;
  let duongCount = 2;
  let thachCount = 1;
  let phucCount = 1;
  let personalPrice = 0;

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  const currentYear = currentDate.getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();

    setDuongAir(duongKwh * defaultPrice);
    setVyAir(vyKwh * defaultPrice);
    setThachAir(thachKwh * defaultPrice);
    setPhucAir(phucKwh * defaultPrice);

    
    personalPrice = (total - vyAir - duongAir - thachAir - phucAir) / (vyCount + phucCount + duongCount + thachCount);

    setVyMoney((vyAir + personalPrice * vyCount));
    setDuongMoney((duongAir + personalPrice * duongCount));
    setPhucMoney((phucAir + personalPrice * phucCount));
    setThachMoney((thachAir + personalPrice * thachCount));
  };

  return (
    <div className="flex flex-col p-8 xl:px-96 mx-auto h-full xl:h-screen bg-slate-200">
      <p className="font-bold xl:text-6xl text-2xl mb-16 mx-auto text-center">
        ⚡Tiền điện A1707 {currentMonth-1}/{currentYear}⚡
      </p>
      <div className='flex flex-row gap-8 bg-slate-800 p-2 mb-4 rounded-lg justify-center'>
      <p className='text-pink-400'>Phòng Vy: {vyCount} người</p>
      <p className='text-sky-400'>Phòng Dương: {duongCount} người</p>
      <p className='text-rose-400'>Phòng Phúc: {phucCount} người</p>
      <p className='text-amber-400'>Phòng Thạch: {thachCount} người</p>
      </div>
      <label className="text-2xl font-bold mb-1" htmlFor="vyKwh">
        Tổng tiền điện
      </label>
      <input
        onChange={(e) => setTotal(e.target.value)}
        className="px-4 py-2 rounded-lg  border-2"
        type="text"
      />
      <p>Đơn giá 1 Kwh: {defaultPrice.toLocaleString()}</p>
      
      <form className="flex flex-col my-8 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-row flex-wrap xl:flex-nowrap gap-4">
          {" "}
          <div className="flex flex-col xl:w-1/4">
            <label
              className="text-xl font-bold mb-1 text-pink-400"
              htmlFor="vyKwh"
            >
              Hiệu số đồng hồ Vy
            </label>
            <input
              onChange={(e) => setVyKwh(e.target.value)}
              className="px-4 py-2 rounded-lg  border-2"
              type="text"
            />
            <p>Máy lạnh của Vy: {vyAir.toLocaleString()}</p>
          </div>
          <div className="flex flex-col xl:w-1/4">
            <label
              className="text-xl font-bold mb-1 text-sky-500"
              htmlFor="duongKwh"
            >
              Hiệu số đồng hồ Dương
            </label>
            <input
              className="px-4 py-2 rounded-lg  border-2"
              onChange={(e) => setDuongKwh(e.target.value)}
              type="text"
            />
            <p>Máy lạnh của Dương: {duongAir.toLocaleString()}</p>
          </div>
          <div className="flex flex-col xl:w-1/4">
            <label
              className="text-xl font-bold mb-1 text-rose-500"
              htmlFor="phucKwh"
            >
              Hiệu số đồng hồ Phúc
            </label>
            <input
              className="px-4 py-2 rounded-lg  border-2"
              onChange={(e) => setPhucKwh(e.target.value)}
              type="text"
            />
            <p>Máy lạnh của Phúc: {phucAir.toLocaleString()}</p>
          </div>
          <div className="flex flex-col xl:w-1/4">
            <label
              className="text-xl font-bold mb-1 text-amber-500"
              htmlFor="thachKwh"
            >
              Hiệu số đồng hồ Thạch
            </label>
            <input
              className="px-4 py-2 rounded-lg  border-2"
              onChange={(e) => setThachKwh(e.target.value)}
              type="text"
            />
            <p>Máy lạnh của Thạch: {thachAir.toLocaleString()}</p>
          </div>
        </div>
        <input
          className="px-4 py-2 rounded-lg my-16 bg-blue-600 text-white hover:bg-blue-500 border-2 cursor-pointer"
          type="submit"
          value="Tính toán"
        />
      </form>
      <div className="text-xl flex flex-col font-bold gap-2">
        <p className="font-medium">
          Tiền điện mỗi người sau khi trừ máy lạnh:{" "}
          {((total - vyAir - duongAir - thachAir - phucAir) / (vyCount + duongCount + thachCount + phucCount)).toLocaleString()}
        </p>
        <p className="text-pink-400">Tổng tiền điện phòng Vy: {vyMoney.toLocaleString()}</p>
        <p className="text-sky-500">Tổng tiền điện phòng Dương: {duongMoney.toLocaleString()}</p>
        <p className="text-rose-500">Tổng tiền điện phòng Phúc: {phucMoney.toLocaleString()}</p>
        <p className="text-amber-500">Tổng tiền điện phòng Thạch: {thachMoney.toLocaleString()}</p>
      </div>
    </div>
  );
}
