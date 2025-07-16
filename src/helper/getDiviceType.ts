const BREAKPOINTS = {
  mobile: 768,
    laptop: 1024,
    pc: 1024
};
export const getDeviceType = (width: number) => {
    return {
        isMobile: width < BREAKPOINTS.mobile,
        isLaptop: width >= BREAKPOINTS.mobile && width < BREAKPOINTS.laptop,
        isPC: width >= BREAKPOINTS.pc,
        width
    }
}