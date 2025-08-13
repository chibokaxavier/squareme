// app/api/income/route.ts
import { NextRequest, NextResponse } from "next/server";

type IncomeData = {
  name: string;
  income: number;
}[];



export async function GET(req: NextRequest) {
  const range = req.nextUrl.searchParams.get("range");

  let data: IncomeData;

  switch (range) {
    case "last7days":
      data = [
        {
          name: "Jan",
          income: 180000,
        },
        {
          name: "Feb",
          income: 950000,
        },
        {
          name: "Mar",
          income: 450000,
        },
        {
          name: "April",
          income: 380000,
        },
        {
          name: "May",
          income: 70000,
        },
        {
          name: "June",
          income: 20000,
        },
        {
          name: "July",
          income: 40000,
        },
        {
          name: "Aug",
          income: 20000,
        },
        {
          name: "Sept",
          income: 80000,
        },
        {
          name: "Oct",
          income: 80000,
        },
        {
          name: "Nov",
          income: 420000,
        },
        {
          name: "Dec",
          income: 12000,
        },
      ];

      break;
    case "last30days":
      data = [
        {
          name: "Jan",
          income: 0,
        },
        {
          name: "Feb",
          income: 550000,
        },
        {
          name: "Mar",
          income: 350000,
        },
        {
          name: "April",
          income: 880000,
        },
        {
          name: "May",
          income: 40000,
        },
        {
          name: "June",
          income: 10000,
        },
        {
          name: "July",
          income: 90000,
        },
        {
          name: "Aug",
          income: 670000,
        },
        {
          name: "Sept",
          income: 20000,
        },
        {
          name: "Oct",
          income: 650000,
        },
        {
          name: "Nov",
          income: 220000,
        },
        {
          name: "Dec",
          income: 22000,
        },
      ];
      break;

    default: // today
      data = [
        {
          name: "Jan",
          income: 280000,
        },
        {
          name: "Feb",
          income: 450000,
        },
        {
          name: "Mar",
          income: 350000,
        },
        {
          name: "April",
          income: 280000,
        },
        {
          name: "May",
          income: 20000,
        },
        {
          name: "June",
          income: 80000,
        },
        {
          name: "July",
          income: 50000,
        },
        {
          name: "Aug",
          income: 80000,
        },
        {
          name: "Sept",
          income: 50000,
        },
        {
          name: "Oct",
          income: 80000,
        },
        {
          name: "Nov",
          income: 120000,
        },
        {
          name: "Dec",
          income: 0,
        },
      ];

      break;
  }



  return NextResponse.json(data);
}
