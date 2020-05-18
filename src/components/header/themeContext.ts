import { createContext, useContext, FC, ComponentType } from "react"
import { LoginContext } from "./login"
import Role from "~/types/roles"
import { getSortedUserRoleList } from "~/server/routing/roleBasedRendering"
import { Listing } from "@carforyou/api-client"
import { ListingType } from "~/types/params"

export type ActionButton = ComponentType<{
  listing: Listing
  onSuccess?: () => void
}>

export interface UserActions {
  header: {
    showProfileLink: boolean
    limitListings: {
      active: boolean
      limit?: number
    }
  }
  overview: {
    actionButtons: ActionButton[]
    navigationItems: ListingType[]
  }
}

const initialContext: UserActions = {
  header: {
    showProfileLink: false,
    limitListings: {
      active: false
    }
  },
  overview: {
    actionButtons: [],
    navigationItems: []
  }
}

const UserActionsContext = createContext(initialContext)
export default UserActionsContext

interface Props {
  children: JSX.Element
  userActions?: UserActions
}

const roleBasedUserActions: {
  [key in Role]: UserActions
} = {
  [Role.Default]: initialContext,
  [Role.PrivateSeller]: {
    ...initialContext,
    header: {
      showProfileLink: true,
      limitListings: {
        active: true,
        limit: 1
      }
    }
  },
  [Role.Dealer]: {
    ...initialContext,
    header: {
      showProfileLink: false,
      limitListings: {
        active: false
      }
    }
  }
}

export const UserActionsProvider: FC<Props> = ({ children, userActions }) => {
  const { currentUser } = useContext(LoginContext)
  const [userRole] = getSortedUserRoleList(currentUser)

  const actions = userActions || roleBasedUserActions[userRole]

  return (
    <UserActionsContext.Provider value={actions}>
      {children}
    </UserActionsContext.Provider>
  )
}
