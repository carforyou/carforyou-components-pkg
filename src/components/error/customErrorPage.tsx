import React, { FC } from "react"

import styles from "./customErrorPage.module.css"
import Button from "../button"

interface Props {
  /**
   * Any status code number
   */
  statusCode: number | "default"
  /**
   * the source path to the image you want to show
   */
  image: string
  /**
   * the page title as an h1 heading
   */
  title: string
  /**
   * the page subtitle as an h2 heading
   */
  subtitle: string
  /**
   * the label for the redirection button
   */
  buttonLabel: string
}

const CustomErrorPage: FC<Props> = ({
  statusCode,
  image,
  title,
  subtitle,
  buttonLabel,
}) => {
  return (
    <div
      data-testid={`error${statusCode}`}
      className="text-center pageWithFooter flex flex-col items-center justify-center"
    >
      <img
        src={image}
        className={styles.image}
        alt={`${statusCode} Error page`}
      />
      <h1 className="text-xl md:text-3xl">{title}</h1>
      <h2 className="text-xl mt-20 mb-10 lg:mb-60 font-regular">{subtitle}</h2>
      <div className={styles.buttonContainer}>
        <Button>
          <a href="/" className="mx-auto">
            {buttonLabel}
          </a>
        </Button>
      </div>
    </div>
  )
}

export default CustomErrorPage
export { Props as Error404Props }
