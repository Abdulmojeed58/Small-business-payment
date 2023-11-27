import React from "react";

interface IData {
  transactionId: string;
  date: string;
  from: string;
  amount: string;
  //   status: "canceled" | "completed" | "failed" | "pending";
  status: string;
}

const Table = ({ data }: { data: IData[] }) => {
  return (
    <table className="min-w-[1203.152px] w-full">
      <thead
        className="bg-white h-[76.984px] mb-[13.2px]"
        style={{ borderTopRightRadius: "14px" }}
      >
        <tr className="" style={{ borderRadius: "14px" }}>
          <th className="rounded-tl-[14px] rounded-bl-[2px]">
            <input type="checkbox" />
          </th>
          <th className="text-[18px] font-[600] leading-normal text-[#04091E] text-center">
            Transaction ID
          </th>
          <th className="text-[18px] font-[600] leading-normal text-[#04091E] text-center">
            Date
          </th>
          <th className="text-[18px] font-[600] leading-normal text-[#04091E] text-center">
            From
          </th>
          <th className="text-[18px] font-[600] leading-normal text-[#04091E] text-center">
            Amount
          </th>
          <th className="text-[18px] font-[600] leading-normal text-[#04091E] rounded-tr-[14px] rounded-br-[2px] text-center">
            Status
          </th>
        </tr>
      </thead>
      <tbody style={{ marginTop: "40px" }}>
        <tr className="h-[13.2px]"></tr>
        {data.map((row, index) => (
          <tr
            key={index}
            className="bg-white h-[98.98px] border-b-[1.1px] border-[#F5F5F5]"
          >
            <td className="">
              <span
                className={`block rounded-[12px] p-[11px] w-[52.789px] ml-auto ${
                  row.status === "canceled"
                    ? "bg-primary"
                    : row.status === "completed"
                    ? "bg-darkGreen"
                    : row.status === "failed"
                    ? "bg-[#E3010F]"
                    : row.status === "pending"
                    ? "bg-black"
                    : ""
                }`}
              >
                <ArrowIcon />
              </span>
            </td>
            <td className="text-center text-[16px] font-[500] leading-normal text-[#04091E]">
              {row.transactionId}
            </td>
            <td className="text-center text-[16px] font-[500] leading-normal text-[#04091E]">
              {row.date}
            </td>
            <td className="text-center text-[16px] font-[500] leading-normal text-[#04091E]">
              {row.from}
            </td>
            <td className="text-center text-[16px] font-[600] leading-normal text-[#04091E]">
              {row.amount}
            </td>
            <td
              className={`uppercase text-center text-[16px] font-[600] leading-normal ${
                row.status === "canceled"
                  ? "text-primary"
                  : row.status === "completed"
                  ? "text-darkGreen"
                  : row.status === "failed"
                  ? "text-[#E3010F]"
                  : row.status === "pending"
                  ? "text-black"
                  : ""
              }`}
            >
              {row.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M14.3724 21.8154L21.6305 21.8154M21.6305 21.8154L21.6305 14.5573M21.6305 21.8154L10.7433 10.9282"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
