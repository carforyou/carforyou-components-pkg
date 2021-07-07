const toQueryString = (params: Record<string, unknown>): string => {
  return Object.keys(params)
    .filter((key) => params[key])
    .reduce((query, key) => {
      const value = params[key]
      if (Array.isArray(value)) {
        for (const val of value) {
          query.push(toQueryString({ [key]: val }))
        }
        return query
      }

      query.push(
        value
          ? `${key}=${encodeURIComponent(value as string | number | boolean)}`
          : null
      )
      return query
    }, [])
    .join("&")
}

export default toQueryString
