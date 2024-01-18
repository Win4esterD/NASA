import axios from "axios";
import { apiKey, baseURL } from "./credentials";

export async function getPictureOfTheDay() {
  try {
    const result = await axios.get(`${baseURL}${apiKey}`);
    return result.data;
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
    console.log('fetching')
    return result.data;
  } catch (err) {
    console.log(err);
  }
}