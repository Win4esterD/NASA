import axios from "axios";
import { apiKey, baseURL } from "./credentials";

export async function getPictureOfTheDay() {
  try {
    const response = await fetch(`${baseURL}${apiKey}`, {
      next: { revalidate: 3600 },
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function getOtherDaysPicture(startDate: string, endDate: string) {
  try {
    const result = await axios.get(
      `${baseURL}${apiKey}&start_date=${startDate}&end_date=${endDate}`
    );
    return result.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getSpecificPicture(date: string) {
  try {
    const result = await axios.get(`${baseURL}${apiKey}&date=${date}`);
    return result.data;
  } catch (err) {
    console.log(err);
  }
}
