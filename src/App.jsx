import { useState } from "react";
import "./index.css";

export default function App() {
  const [total, setTotal] = useState();
  const [vyKwh, setVyKwh] = useState();
  const [duongKwh, setDuongKwh] = useState();
  const [lamKwh, setLamKwh] = useState();
  const [phucKwh, setPhucKwh] = useState();

  // Air : air conditioner money
  let [duongAir, setDuongAir] = useState();
  let [vyAir, setVyAir] = useState();
  let [lamAir, setLamAir] = useState();
  let [phucAir, setPhucAir] = useState();

  // Money after minus air
  let [duongMoney, setDuongMoney] = useState();
  let [vyMoney, setVyMoney] = useState();
  let [lamMoney, setLamMoney] = useState();
  let [phucMoney, setPhucMoney] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let defaultPrice = 3500;

    setDuongAir(duongKwh * defaultPrice);
    setVyAir(vyKwh * defaultPrice);
    setLamAir(lamKwh * defaultPrice);
    setPhucAir(phucKwh * defaultPrice);

    let personalPrice = (total - vyAir - duongAir - lamAir - phucAir) / 10;

    setVyMoney(vyAir + personalPrice * 4);
    setDuongMoney(duongAir + personalPrice * 3);
    setPhucMoney(phucAir + personalPrice * 2);
    setLamMoney(lamAir + personalPrice * 1);
  };

  return (
    <div className="flex flex-col p-8 xl:px-96 mx-auto  h-screen">
      <p className=" h1 font-bold xl:text-6xl text-4xl mb-16 mx-auto">
        ⚡ Máy tính tiền điện A1707 ⚡
      </p>
      <label className="text-2xl font-bold mb-1" htmlFor="vyKwh">
        Tổng tiền điện
      </label>
      <input
        onChange={(e) => setTotal(e.target.value)}
        className="px-4 py-2 rounded-lg  border-2"
        type="text"
      />
      <form className="flex flex-col my-8 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-row flex-wrap xl:flex-nowrap gap-4">
          {" "}
          <div className="flex flex-col xl:w-1/4">
            <label
              className="text-xl font-bold mb-1 text-pink-400"
              htmlFor="vyKwh"
            >
              Số đồng hồ Vy
            </label>
            <input
              onChange={(e) => setVyKwh(e.target.value)}
              className="px-4 py-2 rounded-lg  border-2"
              type="text"
            />
            <p>Máy lạnh của Vy: {vyAir}</p>
          </div>
          <div className="flex flex-col xl:w-1/4">
            <label
              className="text-xl font-bold mb-1 text-sky-500"
              htmlFor="duongKwh"
            >
              Số đồng hồ Dương
            </label>
            <input
              className="px-4 py-2 rounded-lg  border-2"
              onChange={(e) => setDuongKwh(e.target.value)}
              type="text"
            />
            <p>Máy lạnh của Dương: {duongAir}</p>
          </div>
          <div className="flex flex-col xl:w-1/4">
            <label
              className="text-xl font-bold mb-1 text-rose-500"
              htmlFor="phucKwh"
            >
              Số đồng hồ Phúc
            </label>
            <input
              className="px-4 py-2 rounded-lg  border-2"
              onChange={(e) => setPhucKwh(e.target.value)}
              type="text"
            />
            <p>Máy lạnh của Phúc: {phucAir}</p>
          </div>
          <div className="flex flex-col xl:w-1/4">
            <label
              className="text-xl font-bold mb-1 text-amber-500"
              htmlFor="lamKwh"
            >
              Số đồng hồ Lâm
            </label>
            <input
              className="px-4 py-2 rounded-lg  border-2"
              onChange={(e) => setLamKwh(e.target.value)}
              type="text"
            />
            <p>Máy lạnh của Lâm: {lamAir}</p>
          </div>
        </div>
        <input
          className="px-4 py-2 rounded-lg my-16 bg-white hover:bg-blue-500 border-2 hover:border-blue-500 hover:text-white cursor-pointer"
          type="submit"
          value="Tính toán"
        />
      </form>
      <div className="text-xl flex flex-col font-bold gap-2">
        <p className="font-medium">
          Tiền điện mỗi người sau khi trừ máy lạnh:{" "}
          {(total - vyAir - duongAir - lamAir - phucAir) / 10}
        </p>
        <p className="text-pink-400">Tổng tiền điện phòng Vy: {vyMoney}</p>
        <p className="text-sky-500">Tổng tiền điện phòng Dương: {duongMoney}</p>
        <p className="text-rose-500">Tổng tiền điện phòng Phúc: {phucMoney}</p>
        <p className="text-amber-500">Tổng tiền điện phòng Lâm: {lamMoney}</p>
      </div>
    </div>
  );
}
