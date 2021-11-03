import { ReactNode } from "react"

import { Language } from "../../types/language"

export type BadgeBackground = "white" | "green" | "grey"

export interface BadgeProps {
  language: Language
  withText?: boolean
  tooltipContent?: ReactNode
}
