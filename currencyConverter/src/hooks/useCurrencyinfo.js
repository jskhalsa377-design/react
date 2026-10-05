import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    let cancelled = false

    const urls = [
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`,
    ]

    async function load() {
      for (const url of urls) {
        try {
          const res = await fetch(url)
          if (!res.ok) continue
          const json = await res.json()
          if (!cancelled) setData(json[currency] || {})
          return
        } catch (err) {
          // try the next URL
        }
      }
      if (!cancelled) {
        console.error("Could not load currency data for", currency)
        setData({})
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [currency])

  return data
}

export default useCurrencyInfo