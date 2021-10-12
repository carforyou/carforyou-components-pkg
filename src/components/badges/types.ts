import { ReactNode } from "react"

import { Language } from "../../types/language"

export type BadgeSize = "small" | "large"
export type BadgeHeight = "small" | "large"
export type BadgeBackground = "bg-white" | "bg-whatsapp"

export interface BadgeProps {
  language: Language
  size?: BadgeSize
  tooltipContent?: ReactNode
}
