import data from "./resources/data.json";
import { ReactComponent as Logo } from "./resources/logo.svg";
import { useState } from "react";
import { getDay } from "date-fns";

function getDayL(x) {
  if (x === 0) return "sun";
  if (x === 1) return "mon";
  if (x === 2) return "tue";
  if (x === 3) return "wed";
  if (x === 4) return "thu";
  if (x === 5) return "fri";
  if (x === 6) return "sat";
}
function App() {
  const today = getDayL(getDay(new Date()));
  const [spentOnDay, setSpentOnDay] = useState(false);
  const balance = "$921.48";
  // const weekTotal = data.reduce((p, c) => p + c.amount, 0);
  const largestSpentDay = Math.max(...data.map((day) => day.amount));
  return (
    <div className="bg-[#F8E9DD] h-screen w-screen flex justify-center items-center">
      <div>
        <div className="flex justify-between items-center bg-[#EC775F] rounded-2xl py-3 px-4 text-white w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw] mb-5">
          <div className="">
            <div className="text-sm mb-2">My balance</div>
            <div className="text-2xl font-bold">{balance}</div>
          </div>
          <div>
            <Logo width={50} />
          </div>
        </div>
        <div className="bg-[#FFFAF5] h-[45vh] rounded-2xl w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw] px-6 py-4">
          <div className="text-3xl text-[#382314] font-bold">
            Spending - Last 7 days
          </div>
          <div className="h-[65%]">
            <ul className="flex justify-evenly items-end h-full ">
              {data.map((day) => {
                const rate = (
                  (day.amount / largestSpentDay) *
                  0.8 *
                  100
                ).toFixed(0);
                return (
                  <li
                    key={day.day}
                    className="h-full flex flex-col items-center justify-end py-6"
                  >
                    {/* className={`${height} bg-[#EC775F] w-10`} */}
                    <div className="h-full flex flex-col items-center justify-end">
                      {spentOnDay.day === day.day && (
                        <div className="rounded-md bg-[#382314] text-white text-center w-[3.5rem] py-[0.15rem] px-1 mb-[0.4rem]">
                          {spentOnDay.amount}
                        </div>
                      )}

                      <div
                        style={{ height: `${rate}%` }}
                        onMouseEnter={() => setSpentOnDay(day)}
                        onMouseLeave={() => setSpentOnDay(false)}
                        className={`${
                          today === day.day ? "bg-[#76B5BC]" : "bg-[#EC775F]"
                        } rounded-md hover:bg-opacity-60 cursor-pointer  w-[2.2rem] sm:w-[2.75rem]`}
                      ></div>
                    </div>
                    <div className="px-1 w-[2.2rem] sm:w-[2.75rem] mt-1 text-center text-xs text-[#93867B]">
                      {day.day}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="h-[30%] border-t-2 flex justify-between items-center">
            <div className="">
              <div className="text-[#93867B] text-sm">Total this month</div>
              <div className="py-2 text-4xl text-[#382314] font-bold">
                $478.33
              </div>
            </div>
            <div className="">
              <div className="text-right text-sm text-[#382314] font-bold">
                {" "}
                +2.4%{" "}
              </div>
              <div className="text-[#93867B] text-xs">from last month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
