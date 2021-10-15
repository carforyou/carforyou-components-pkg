import { ReactNode } from "react"

import { Language } from "../../types/language"

export type BadgeSize = "small" | "large"
export type BadgeBackground = "white" | "green"

export interface BadgeProps {
  language: Language
  size?: BadgeSize
  tooltipContent?: ReactNode
}
