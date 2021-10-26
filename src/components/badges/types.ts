import { ReactNode } from "react"

import { Language } from "../../types/language"

export type BadgeSize = "small" | "medium" | "large"
export type BadgeBackground = "white" | "green" | "grey"

export interface BadgeProps {
  language: Language
  size?: BadgeSize
  tooltipContent?: ReactNode
}
