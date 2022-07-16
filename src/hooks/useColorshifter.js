export const useColorshifter = () => {
    const ColorShifter = (value) => {
        if (value === "dark") {
          return { color: "white"}
        } else if (value === "light") {
        return {color: "black"}
        } else if (value === "repo") {
          return "info"
        } else if (value === "user") {
          return "info"
        }
    }

    return { ColorShifter }
}