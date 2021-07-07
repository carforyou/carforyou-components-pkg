import toQueryString from "./toQueryString"

const imageUrlBuilder = (imageS3Key, options = {}) => {
  return `${process.env.LISTINGS_CDN_URL}/${imageS3Key}?${toQueryString({
    // TODO: remove prod check after switching
    // this is to not overwhelm the current CDN with revalidating all images
    ...(process.env.CONFIG_ENV !== "stage-prod"
      ? { auto: "compress,format" }
      : {}),
    ...options,
  })}`
}

export default imageUrlBuilder
