import { renderHook } from "@testing-library/react-hooks"

import useIsMountedRef from "../useIsMountedRef"

describe("useIsMountedRef", () => {
  it("should be defined", () => {
    expect(useIsMountedRef).toBeDefined()
  })

  it("should return the current ref object with true value if the component is mounted", () => {
    const { result } = renderHook(() => useIsMountedRef())
    expect(result.current).toEqual({ current: true })
  })

  it("should return the current ref object with false value if the component is unmounted", () => {
    const { result, unmount } = renderHook(() => useIsMountedRef())
    unmount()
    expect(result.current).toEqual({ current: false })
  })
})
