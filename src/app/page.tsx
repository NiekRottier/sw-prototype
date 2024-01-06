import Link from "next/link"

async function getWeather<T>(lat: string, lon: string): Promise<T> {
  const API_KEY = process.env.API_KEY
  
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=NL&appid=${API_KEY}`)
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  
  return await (res.json() as Promise<T>)
}

export default async function Home() {  
  
  let data: any = await getWeather("51.559757", (Math.random()*30).toString())
  
  type forecast = {
    "location": string,
    "weather": string,
    "temp": string
  }
  let forecast: forecast = {
    "location": `${data.name}, ${data.sys.country}`,
    "weather": data.weather[0].description,
    "temp": data.main.temp
  }

  return (
    <main>
      <p>Het weer in <i>{forecast.location}</i> is <i>{forecast.temp}</i> &#176;C met <i>{forecast.weather}</i></p>
      <Link href="/next-page">Next page</Link>
    </main>
  )
}
